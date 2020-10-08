import React from 'react';

const Detail = (props) => {
    const { match } = props
    const { params } = match
    const { pokemonid } = params
    return (
        <div>(`Pokemón #${pokemonid}`)</div>
    )
}

export default Detail