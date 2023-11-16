let Key='1c1a02e00c06a48a2a0fa1ed2d8088de'

let queryString = location.search
let queryStringObject = new URLSearchParams(queryString)

let urlTopRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${Key}`
let urlPeli = `https://api.themoviedb.org/3/movie/popular?api_key=${Key}`
let urlSerie = `https://api.themoviedb.org/3/tv/popular?api_key=${Key}`

fetch(urlTopRated)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data.results)
        let listPelis = data.results
        let topmovie= document.querySelector('.tende');
            topmovie.innerHTML+=`Películas Mejor calificadas:`
        for(let i = 0; i <5; i++){
            let article=document.querySelector('.tendencia');
            article.innerHTML+=`<a href="detail-movie.html?id=${listPelis[i].id}"><article><img src="https://image.tmdb.org/t/p/w342${listPelis[i].poster_path}" class="pelis"><p>${listPelis[i].title}</p><p>${listPelis[i].release_date
        }</p></article></a>`  
        }
    })
    .catch(function(error){
        console.log(error);
    })

    fetch(urlPeli)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data.results)
        let listPeli = data.results
        let topPeli= document.querySelector('.pel');
            topPeli.innerHTML+=`Películas Populares:`
        for(let i = 0; i <5; i++){
            let article=document.querySelector('.peliculaspopu');
            article.innerHTML+=`<a href="detail-movie.html?id=${listPeli[i].id}"><article><img src="https://image.tmdb.org/t/p/w342${listPeli[i].poster_path}" class="pelis"><p>${listPeli[i].title}</p><p>${listPeli[i].release_date
        }</p></article></a>`  
        }
    })
    .catch(function(error){
        console.log(error);
    })



    fetch(urlSerie)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data.results)
        let listSerie = data.results
        let topSerie= document.querySelector('.ser');
            topSerie.innerHTML+=`Series Populares:`
        for(let i = 0; i <5; i++){
            let article=document.querySelector('.seriespopu');
            article.innerHTML+=`<a href="detail-serie.html?id=${listSerie[i].id}"><article><img src="https://image.tmdb.org/t/p/w342${listSerie[i].poster_path}" class="pelis"><p>${listSerie[i].name}</p><p>${listSerie[i].first_air_date

        }</p></article></a>`  
        }
    })
    .catch(function(error){
        console.log(error);
    })