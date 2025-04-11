//============== CLASES =================
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
    get title(){
        return this._title;
    }

    set title(newTitle) {
        this._title = newTitle;
    }

    get overview() {
        return this._overview;
    }
    
    set overview(newOverview) {
        this._overview = newOverview;
    }

    get popularity(){
        return this._popularity;
    } 

    set popularity(newPopularity) {
        this._popularity = newPopularity;
    }

    get release_date(){
        return this.release_date;
    }

    set release_date(newReleaseDate) {
        this._release_date = newReleaseDate;
    }

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
        //Método no implementado por falta de tiempo
    }
                  

    getPopularFilmTitles() {
        //Método no implementado por falta de tiempo
    
    }
}


//=========== DATOS DE EJEMPLO ===================

const peli1 = new Film(1, "Leyendas de Pasión", "Una historia de amor y drama en tiempos de guerra.", 8.4, "leyendas.jpg", 1994, 8.0, 1500, [18,10749]);
const peli2 = new Film(2, "Los Puentes de Madison", "Un breve romance cambia sus vidas para siempre.", 8.2, "madison.jpg", 1995, 8.1, 1300, [18, 10749]);
const peli3 = new Film(3, "El Hombre que Susurraba a los Caballos", "Un hombre con un don ayuda a sanar heridas del pasado", 7.8, "caballos.jpg", 1998, 7.5, 1200, [18, 10751]);

//========== VALIDACIÓN DEL CÓDIGO ===============

const listaPeliculas = new FilmList();

listaPeliculas.addMultipleFilms(peli1, peli2, peli3);

console.log ("Listado de todas las películas:");
listaPeliculas.showList();

console.log("Buscar película con ID 3:");
console.log(listaPeliculas.findFilmById(3));

console.log("Películas con más de 1000 votos:");
console.log(listaPeliculas.getPopularFilmTitles(1000));


console.log("Películas estrenadas entre 1994 y 1998:");
console.log(listaPeliculas.getFilmsByDateRange(1994, 1998));







