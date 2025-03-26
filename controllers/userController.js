const User = require('../models/user.js');
const bcrypt = require('bcryptjs');

// Fonction pour générer un token simple (sans JWT)
const generateToken = (id) => {
    return jwt.sign({ id },process.env.JWT_SECRET, {
        expiresIn: '40d' // Token valide pendant 40 jours 
    });
};

// Enregistrer un nouvel utilisateur
const registerUser = async (req, res) => {
    try {
        const { username, email, password, firstName, lastName } = req.body;

        // Vérification des champs obligatoires
        if (!username || !email || !password) {
            return res.status(400).json({ 
                message: 'Veuillez remplir tous les champs obligatoires' 
            });
        }

        // Vérifier si l'utilisateur existe déjà
        const userExists = await User.findOne({ 
            $or: [{ email }, { username }] 
        });

        if (userExists) {
            return res.status(400).json({ 
                message: 'Un utilisateur avec cet email ou ce nom d\'utilisateur existe déjà' 
            });
        }

        // Hacher le mot de passe
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Créer l'utilisateur
        const user = await User.create({
            username,
            email,
            password: hashedPassword,
            profile: {
                firstName,
                lastName
            }
        });

        // Générer un token simple
        const token = generateToken(user._id);

        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            token: token
        });
    } catch (error) {
        res.status(500).json({ 
            message: 'Erreur lors de l\'enregistrement de l\'utilisateur',
            error: error.message 
        });
    }
};

// Authentifier un utilisateur
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Vérifier que l'email et le mot de passe sont fournis
        if (!email || !password) {
            return res.status(400).json({ 
                message: 'Veuillez fournir un email et un mot de passe' 
            });
        }

        // Vérifier si l'utilisateur existe
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ 
                message: 'Utilisateur non trouvé' 
            });
        }

        // Vérifier le mot de passe
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ 
                message: 'Mot de passe incorrect' 
            });
        }

        // Générer un token simple
        const token = generateToken(user._id);

        res.json({
            _id: user._id,
            username: user.username,
            email: user.email,
            token: token
        });
    } catch (error) {
        res.status(500).json({ 
            message: 'Erreur lors de la connexion',
            error: error.message 
        });
    }
};

// Obtenir le profil de l'utilisateur
const getUserProfile = async (req, res) => {
    try {
        // Utilisez req.user au lieu de req.params.id
        const user = await User.findById(req.user._id).select('-password');
        
        if (!user) {
            return res.status(404).json({ 
                message: 'Utilisateur non trouvé' 
            });
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ 
            message: 'Erreur lors de la récupération du profil',
            error: error.message 
        });
    }
};

// Mettre à jour le profil de l'utilisateur
const updateUserProfile = async (req, res) => {
    try {
        // Pour l'instant, sans middleware d'authentification
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ 
                message: 'Utilisateur non trouvé' 
            });
        }

        // Mettre à jour les champs du profil
        user.profile.firstName = req.body.firstName || user.profile.firstName;
        user.profile.lastName = req.body.lastName || user.profile.lastName;
        
        // Mettre à jour l'email si fourni
        if (req.body.email) {
            // Vérifier que le nouvel email n'est pas déjà utilisé
            const emailExists = await User.findOne({ 
                email: req.body.email, 
                _id: { $ne: user._id } 
            });

            if (emailExists) {
                return res.status(400).json({ 
                    message: 'Cet email est déjà utilisé' 
                });
            }

            user.email = req.body.email;
        }

        // Mettre à jour le mot de passe si fourni
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(req.body.password, salt);
        }

        const updatedUser = await user.save();

        res.json({
            _id: updatedUser._id,
            username: updatedUser.username,
            email: updatedUser.email,
            profile: updatedUser.profile
        });
    } catch (error) {
        res.status(500).json({ 
            message: 'Erreur lors de la mise à jour du profil',
            error: error.message 
        });
    }
};

module.exports = {
    registerUser,
    loginUser,
    getUserProfile,
    updateUserProfile
};