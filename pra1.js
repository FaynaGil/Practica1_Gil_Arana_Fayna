class Film {
    constructor(id, title, overview, popularity, poster_path, release_date, vote_average, vote_count, genre_ids) {
        this.id = id;
        this.title = title;
        this.overview = overview;
        this.popularity = popularity;
        this.poster_path = poster_path;
        this.release_date = release_date;
        this.vote_average = vote_average;
        this.vote_count = vote_count;
        this.genre_ids = genre_ids;
    }

    //Getters y setters

}

class FilmList {
    constructor() {
        this.films = []; //(this.films = []; es la propiedad) Array vacío donde se irán guardando las películas
    }

    addFilm (film){   //Método para añadir película al array this.films
        this.films.push(film);
    }

    removeFilm(filmId){  //Método para eliminar película por su Id del array this.films
        this.films = this.films.filter(film => film.id !== filmId);
    }

    showList() {  //Método para mostrar por consola la lista de películas guardadas
        console.log (this.films);
    }

    addMultipleFilms = (...films) => {   //Método que recibe varias películas como parámetro (rest parameter)
        films.forEach(film => this.addFilm(film)); //Recorre el array films con forEcah y añade cada película con el método addFilm
    }
    

    getFilmsByDateRange = (startDate, endDate) => {  //Método que devuelve las películas dentro de un rango de fechas
        return this.films.filter(film =>
            film.release_date >= startDate && film.release_date <= endDate
        );
    }

    sortFilmsByPopularity = () => { //Método que ordena las películas por popularidad (de mayor a menor)
        this.films.sort ((a, b) => b.popularity - a.popularity); // ordena el array this.films usando sort y compara la propiedad popularity de cada película
    }
    
    findFilmById(filmId, index = 0) { //Función recursiva
        if (index >= this.films.length) { 
            return null; //Si llega al final del array y no la encontró devuelve nulo.
        }

        if (this.films[index].id === filmId) {
            return this.films[index]; //Si la encuentra devuelve la película
        }

        return this.findFilmById(filmId, index + 1); //Si no la encuentra en esta posición vuelve a llamarse para buscar en la siguiente posición.
    }
    
    getMostCommonGenre() {
        //Uso de reduce
    }

    getPopularFilmTitles() {
        //Uso de map y filter
    }
}



