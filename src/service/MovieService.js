export async function getAllMovie (){
    const data = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=2636b2d7771a08188920aa3e4d47111a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
    const movies = await data.json()
    const response = movies.results
    console.log(response)
    return response
}

export async function getMovieById (id){
    const data = await fetch('https://api.themoviedb.org/3/movie/'+id+'?api_key=2636b2d7771a08188920aa3e4d47111a')
    const movie = await data.json()
    console.log(movie)
    return movie
    
}

export async function getInfo(search){
    const data = await fetch('https://api.themoviedb.org/3/search/movie?api_key=2636b2d7771a08188920aa3e4d47111a&language=en-US&page=1&include_adult=fals&query='+ {search})
    const info = await data.json()
    const response = info.results
    console.log(response)
    return response
}
