import axios from "axios";
import { useEffect, useState } from "react";
const PokeLista = (props) => {

    const [pokemons, setPokemons] = useState([]);
    useEffect (() => {
        axios.get("https://pokeapi.co/api/v2/pokemon").then(response =>{
            setPokemons(response.data.results);
        })
    }, [])

    return <div>
        <h1>Lista</h1>
        {pokemons.map(p => <p>Bo nadal!</p>)}
    </div>
}

export default PokeLista;