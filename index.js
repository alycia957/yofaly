//pour le fichier.env
require('dotenv').config();
//importe le paquet express
const express = require('express')
const mongoose = require('mongoose');
//
const helmet =require('helmet');
const cors =require('cors');

const recipeRoutes = require('./routes/recipeRoutes.js');
const { errorHandler } = require('./middleware/errorHandler.js');
const recipes =require('./models/recipes.js');
const db = require('./config/db.js');
const userRoutes = require('./routes/userRoutes.js');

//crer une appli express 
const app = express();

// Middleware
app.use(helmet()); //Sécurise les headers HTTP
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 

//http method (get,post,put,delete) ,ecouter la methode get 
app.get('/',(req,res) =>{
    res.send("Welcome to Maghrebi Recipes API")

});

// Routes pour les recettes
app.use('/api/recipes', recipeRoutes);
// Routes pour les utilisateurs
app.use('/api/users', userRoutes);
// Middleware de gestion d'erreur
app.use(errorHandler);

// Connexion à MongoDB
mongoose.connect('mongodb+srv://alycia:Mama270682.@cluster0.18x60.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Connected to the database!');
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch(() => {
        console.log('Connection failed!');
    });

   
  
