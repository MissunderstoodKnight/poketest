import React, {useState} from 'react';
import { AppBar, Toolbar, Grid, Card, CardContent } from '@material-ui/core'
import './Home.css'
import apiStatic from './apiStatic'

function Home () {
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);
const [pokemonData, getPokemonData] = useState(apiStatic)
    const getPokemonCard = () => {
        return (
            <Grid item xs={12} sm={4}>
                <Card>
                    <CardContent>Pikachu</CardContent>
                </Card>
            </Grid>
        )
    }

    return (
        <>
        <AppBar position='static'>
          <Toolbar />
        </AppBar>
        <Grid container spacing={2} className='Home-Grid'>
            {/* {Object.keys(pokemonData).map(pokemonId =>
                getPokemonCard(pokemonId))} */}
        </Grid>
        </>
    )
}

export default Home;
