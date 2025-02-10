import MovieCard from "../../component/MovieCard";
import { useState } from "react";

function Home() {
    const [seachQuery, setSearchQuery]= useState("");

    // Déclaration d'un tableau de films
    const movies = [
        {id: 1, title: "John Wick", release_date: "2020"},
        {id: 2, title: "Terminator", release_date: "2010"},
        {id: 3, title: "Lord of the ring", release_date: "2020"},
        {id: 4, title: "The matrix", release_date: "2020"},
    ];
    const handlSearch  = ()=>{

    }
    // Le composant retourne du JSX (syntaxe similaire à HTML utilisée dans React)
    return (
        // Div conteneur principal avec la classe "home"
        <div className="home">
            <from  onSubmite={handlSearch} className="search-form">
                <input type="text" placeholder="search for movies ..." className="search-input"  
                value={searchQuery}
                onChange={(e)=> setSearchQuery(e.target.value)}/>
                <button type="submite" className="search-button">Search</button>
            </from>

            {/* Div pour la grille de films */}
            <div className="movies-grid">
                {/* Utilisation de la méthode map() pour transformer le tableau de films */}
                {movies.map((movie) => (
                    // Pour chaque film, on crée un composant MoviesCard
                    // 'movie' est passé comme propriété (prop)
                    // 'key' est une propriété spéciale React pour aider à l'optimisation du rendu
                    <MoviesCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}