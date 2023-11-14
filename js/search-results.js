let Key='1c1a02e00c06a48a2a0fa1ed2d8088de'

let queryString = location.search
let queryStringObject = new URLSearchParams(queryString)
let busqueda = queryStringObject.get('busqueda') 

let urlbusqueda=`https://api.themoviedb.org/3/search/movie?api_key=${Key}&query=${busqueda}`


fetch(urlbusqueda)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data.results); 
        document.querySelector('#busqueda').innerHTML=busqueda
        let listPelis = data.results
        let search= document.querySelector('.h1f');
            search.innerHTML+=`Se muestran resultados o similares de ${busqueda}`
        for(let i = 0; i <listPelis.length; i++){
            let article=document.querySelector('.fav1');
            article.innerHTML+=`<a href="detail-movie.html?id=${listPelis[i].id}"><article><img src="https://image.tmdb.org/t/p/w342${listPelis[i].poster_path}" class="pelis"><p>${listPelis[i].title}</p><p>${listPelis[i].release_date
        }</p></article></a>`  
        }
    })
    .catch(function(error){
        console.log(error);
    })