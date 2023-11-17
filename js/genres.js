let Key='1c1a02e00c06a48a2a0fa1ed2d8088de'

let queryString = location.search
let queryStringObject = new URLSearchParams(queryString)
let genres = queryStringObject.get('busqueda') 

let urlGenresP=`https://api.themoviedb.org/3/genre/movie/list?api_key=${Key}`
let urlGenresS=`https://api.themoviedb.org/3/genre/tv/list?api_key=${Key}`


fetch(urlGenresP)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        let listGenreP = data.results
        let topSerie= document.querySelector('.genP');
        topSerie.innerHTML+=`Generos Peliculas:`
        let lista_generos = []
        for(let i=0; i<data.genres.length; i++){
            lista_generos = data.genres[i].name + "  "
            let article=document.querySelector('.genres1');
            article.innerHTML+=`<a href="detail-genres.html?id=${data.genres[i].id}&name=${lista_generos}&type=movie"><article ><p>${lista_generos}</p></article></a>`

        }
        
       
    })
    .catch(function(error){
        console.log(error);
    })







    fetch(urlGenresS)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        let listGenreS = data.results
        let topSerie= document.querySelector('.genS');
        topSerie.innerHTML+=`Generos Series:`
        let lista_generos = []
        for(let i=0; i<data.genres.length; i++){
            lista_generos = data.genres[i].name + "  "
            let article=document.querySelector('.genres2');
            article.innerHTML+=`<a href="detail-genres.html?id=${data.genres[i].id}&name=${lista_generos}&type=serie"><article ><p>${lista_generos}</p></article></a>`

        }
        console.log(lista_generos)
       
    })
    .catch(function(error){
        console.log('Ocurrio error:'+ error);
    })