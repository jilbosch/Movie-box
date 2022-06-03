import  Axios  from "axios";
const baseUrl = "https://6286353296bccbf32d713ccb.mockapi.io";

export const movieServices = {
    getAllMovies(){
      const movies = Axios.get(baseUrl + "/movies").then((res) =>
        res.data);
        return movies;
    },
    deleteMovie(id){
        const movies = Axios.delete (baseUrl + "/movies/"+id).then((res) =>
        res.data);
        return movies;
    },
    createMovie (dataMovie) {
        const movies = Axios.post (baseUrl + "/movies/",dataMovie ).then((res) =>
        res.data);
        return movies;
    }, 
    updateMovie(id,dataMovie){
        const movies = Axios.put (baseUrl + "/movies/"+id,dataMovie).then((res) =>
        res.data);
        return movies;
    },

    getMovieById (id) {
        const movies = Axios.get(baseUrl + "/movies/"+id).then((res) =>
        res.data);
        return movies;
    }
    
    
};
