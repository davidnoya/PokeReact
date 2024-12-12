import { useState } from "react";

const Pokemon = (props) => {
    const [nivel, setNivel] = useState(1);

    const onSubirNivel = (event) => {
        setNivel(n => n + 1)
    }

    const onBajarNivel = (event) => {
        setNivel(n => n - 1)
    }

    const calcularHP = () => {
        //TODO: usar la fórmula real, esta está un poco inventadaa
        return 65 + (nivel * 3);
    }

    const calcularAtaque = () => {
        return 130 + (nivel *2);
    }

    const calcularDefensa = () => {
        return 60 + (nivel *2);
    }
    return <div>
        <h1>Bulbasur</h1>
        <h2>Nivel: {nivel}</h2>
        <button onClick={onSubirNivel}>Subir nivel</button>
        <button onClick={onBajarNivel}>Bajar nivel</button>
        <p>HP: {calcularHP()}</p>
        <p>Ataque: {calcularAtaque()}</p>
        <p>Defensa: {calcularDefensa()}</p>
    </div>
}

export default Pokemon;