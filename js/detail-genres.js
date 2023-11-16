let Key='1c1a02e00c06a48a2a0fa1ed2d8088de'

let queryString = location.search
let queryStringObject = new URLSearchParams(queryString)
let id_genre = queryStringObject.get('id')
let id_name = queryStringObject.get('name') 

console.log(id_genre)
console.log(id_name)

let urlDetailG = `https://api.themoviedb.org/3/discover/movie?${id_genre}-${id_name}?api_key=${Key}`

fetch(urlDetailG)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
    })
    .catch(function(error){
        console.log(error);
    })