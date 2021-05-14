import React from 'react'
import '../assets/styles/components/Search.scss'

const mainTitle = "¿Qué quieres ver hoy?";
const placeHolderTitle = "Buscar...";

function Search() {
    return (
        <>
            <section className="main">
                <h2 className="main__title">{mainTitle}</h2>
                <input type="text" className="input" placeholder={placeHolderTitle}/>
            </section>
        </>
    )
}

export default Search
