const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config()
console.log(process.env.API_KEY)
console.log(process.env.PORT)

const PORT = process.env.PORT || 5000
console.log(PORT)

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"))

let filmId = 550
let linkFilm = `https://api.themoviedb.org/3/movie/${filmId}?api_key=${process.env.API_KEY}`


let pageList = 1
let linkFilms = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageList}`

app.listen(PORT, () => {
    console.log(`listening at: https://localhost:${PORT}`)
})

app.get('/', (req, res) => {
    let pageList = 3
    let linkFilms = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageList}`

    fetch(linkFilms)
        .then(result => result.json())
        .then(data => {

            // res.json : Good for testing
            // res.json(data.results)

            // console.log(data);
            res.render('pages/index', { 
                data: data,
                page: pageList
            
            })
        })
    // res.render('pages/index', { data: data })
})






app.get('/:id', (req, res) => {
    // console.log(data);
    res.redirect('/film/:id')
    // console.log(req.params.id);
    // filmId = req.params.id
    // let linkFilmNew = `https://api.themoviedb.org/3/movie/${filmId}?api_key=${process.env.API_KEY}`
    // fetch(linkFilmNew)
    //     .then(result => result.json())
    //     .then(data => {
    //         console.log(data.original_title);

    //         // res.json : Good for testing
    //         // res.json(data)

    //         // console.log(data);
    //         res.render('pages/film', { data: data })
    //     })
    // res.render('pages/index', { data: data })
})

app.get('/film/:id', (req, res) => {
    filmId = req.params.id
    let linkFilmNew = `https://api.themoviedb.org/3/movie/${filmId}?api_key=${process.env.API_KEY}`
    fetch(linkFilmNew)
        .then(result => result.json())
        .then(data2 => {
            console.log(data2.original_title);

            // res.json : Good for testing
            // res.json(data)

            // console.log(data);
            res.render('pages/film', { 
                data2: data2,
                
             })
        })
})
