let APIKey='7bbfa155b881d065cf760bebe36c4d28'

let queryString=location.search
let queryStringObj= new URLSearchParams(queryString)
let id_pelicula= queryStringObj.get('id') //recupero el queryString, o la entrada del usuario.

let urlDetail=`https://api.themoviedb.org/3/movie/${id_pelicula}?api_key=${APIKey}`

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