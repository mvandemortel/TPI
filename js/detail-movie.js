let Key='1c1a02e00c06a48a2a0fa1ed2d8088de'

let queryString = location.search
let queryStringObject = new URLSearchParams(queryString)
let id_pelicula = queryStringObject.get('id') 

let urlDetail=`https://api.themoviedb.org/3/movie/${id_pelicula}?api_key=${Key}`
let reco= `https://api.themoviedb.org/3/movie/${id_pelicula}/recommendations?api_key=${Key}`


fetch(urlDetail)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data); 
        let lista_generos = []
        for(let i=0; i<data.genres.length; i++){
            lista_generos += `<a href="detail-genres.html?id=${data.genres[i].id}&name=${data.genres[i].name}&type=movie"> ${data.genres[i].name}  </a>`
        }
        let izquierda = document.querySelector('.izq')
        let derecha = document.querySelector('.dere')
        izquierda.innerHTML += `<img src="https://image.tmdb.org/t/p/w500/${data.backdrop_path}">`
        derecha.innerHTML += `<article> <h1>${data.title}</h1> 
        <p> Rating: ${data.vote_average}</p> <p> Duración: ${data.runtime}m</p><p> Fecha de estreno: ${data.release_date}</p> <p> Generos:${lista_generos}</p><p>Sinopsis: ${data.overview}</p></article> `
    })
    .catch(function(error){
        console.log(error);
    })

fetch(reco)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data.results)
        let listReco = data.results
        let topReco= document.querySelector('.recomen');
        topReco.addEventListener("click", function(){
        for(let i = 0; i <5; i++){
            let article=document.querySelector('.recom');
            article.innerHTML+=`<a href="detail-movie.html?id=${listReco[i].id}"><article class="recomendacion"><img src="https://image.tmdb.org/t/p/w342${listReco[i].poster_path}" class="pelis"></article></a>`  
        }    
        })
        
    })
    .catch(function(error){
        console.log(error);
    })
