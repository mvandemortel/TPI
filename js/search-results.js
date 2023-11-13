let APIKey='7bbfa155b881d065cf760bebe36c4d28'

let queryString=location.search
let queryStringObj= new URLSearchParams(queryString)
let busqueda= queryStringObj.get('busqueda') //recupero el queryString, o la entrada del usuario.

let urlbusqueda=`https://api.themoviedb.org/3/search/movie?query=${busqueda}&api_key=${APIKey}`


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