import MovieCard from "../../component/MovieCard";
import { useState , useEffect } from "react";
import { searchMovies , getPopularMovies } from "./services/api";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    // Déclaration d'un tableau de films
    const movies = [
        { id: 1, title: "John Wick", release_date: "2020" },
        { id: 2, title: "Terminator", release_date: "2010" },
        { id: 3, title: "Lord of the ring", release_date: "2020" },
        { id: 4, title: "The matrix", release_date: "2020" },
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("------");
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="search for movies ..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}

export default Home;