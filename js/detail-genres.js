let Key='1c1a02e00c06a48a2a0fa1ed2d8088de'

let queryString = location.search
let queryStringObject = new URLSearchParams(queryString)
let id_name = queryStringObject.get('name') 

console.log(id_name)

let urlDetailGP = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es&page=1&sort_by=popularity.desc&with_genres=${id_name}&api_key=${Key}`
let urlDetailGS = `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=es&page=1&sort_by=popularity.desc&with_genres=${id_name}&api_key=${Key}`




fetch(urlDetailGP)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data.results)
        let detPelis = data.results
        let titPelis= document.querySelector('.genero');
            titPelis.innerHTML+=`Películas del genero ${id_name}:`
        for(let i = 0; i <detPelis.length; i++){
            let article=document.querySelector('.detalle-genero');
            article.innerHTML+=`<a href="detail-movie.html?id=${detPelis[i].id}"><article><img src="https://image.tmdb.org/t/p/w342${detPelis[i].poster_path}" class="pelis"><p>${detPelis[i].title}</p><p>${detPelis[i].release_date
        }</p></article></a>`  
        }
    })
    .catch(function(error){
        console.log(error);
    })




    fetch(urlDetailGS)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
    })
    .catch(function(error){
        console.log(error);
    })