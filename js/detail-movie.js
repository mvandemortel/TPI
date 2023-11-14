let Key='1c1a02e00c06a48a2a0fa1ed2d8088de'

let queryString = location.search
let queryStringObject = new URLSearchParams(queryString)
let id_pelicula = queryStringObject.get('id') 

let urlDetail=`https://api.themoviedb.org/3/movie/${id_pelicula}?api_key=${Key}`

fetch(urlDetail)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data); 
        let lista_generos = []
        for(let i=0; i<data.genres.length; i++){
            lista_generos += data.genres[i].name + "  "
        }
        let izquierda = document.querySelector('.izq')
        let derecha = document.querySelector('.dere')
        izquierda.innerHTML += `<img src="https://image.tmdb.org/t/p/w500/${data.backdrop_path}">`
        derecha.innerHTML += `<article> <h1>${data.title}</h1> 
        <p> Rating: ${data.vote_average}</p> <p> Duración: ${data.runtime}m</p><p> Fecha de estreno: ${data.release_date}</p> <p> Generos: ${lista_generos}</p><p>Sinopsis: ${data.overview}</p></article> `
    })
    .catch(function(error){
        console.log(error);
    })