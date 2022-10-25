const mongoose = require("mongoose");

const Movie = require("../../api/movies/movies.models");

require("dotenv").config();

const DB_URL = process.env.DB_URL;

const movies = [
  {
    title: "The Matrix",
    director: "Hermanas Wachowski",
    year: 1999,
    genre: "Acción",
  },
  {
    title: "The Matrix Reloaded",
    director: "Hermanas Wachowski",
    year: 2003,
    genre: "Acción",
  },
  {
    title: "Buscando a Nemo",
    director: "Andrew Stanton",
    year: 2003,
    genre: "Animación",
  },
  {
    title: "Buscando a Dory",
    director: "Andrew Stanton",
    year: 2016,
    genre: "Animación",
  },
  {
    title: "Interestelar",
    director: "Christopher Nolan",
    year: 2014,
    genre: "Ciencia ficción",
  },
  {
    title: "50 primeras citas",
    director: "Peter Segal",
    year: 2004,
    genre: "Comedia romántica",
  },
];

mongoose
.connect(DB_URL)
.then(async() =>{
    const allMovies = await Movie.find();
    if(!allMovies.length){
        console.log('No se encuentran películas');
    }else{
        console.log(`Encontradas ${allMovies.length} películas`);
        await Movie.collection.drop();
        console.log('Se ha eliminado la colección');
    }
}).catch((error) =>{
    console.log('no se ha podido eliminar las películas', error);
}).then(async() =>{
    await Movie.insertMany(movies);
    console.log(`Agregadas ${movies.length} películas a la colección`);
}).catch((error) => console.log('error agregando las películas', error))
.finally(() => mongoose.disconnect());


