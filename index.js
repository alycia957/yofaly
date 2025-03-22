//importe le paquet express
const express = require('express')
const mongoose = require('mongoose');
//crer une appli express 
const app = express()
const recipeRoutes = require('./routes/recipeRoutes');
const { errorHandler } = require('./middleware/errorHandler');
const recipes =require('./models/recipes.js');


// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//http method (get,post,put,delete) ,ecouter la methode get 
app.get('/',(req,res) =>{
    res.send("hello from node API ")

});

// Routes pour les recettes
app.use('/api/recipes', recipeRoutes);

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

   
  
