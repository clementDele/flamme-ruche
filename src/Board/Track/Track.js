import { React } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll'

import './Track.css'

import { Tile } from '../Tile/Tile';

export const Track = ({ track }) => {
    const getSquaresOfGlobalSquaresArray = tileIndex => {
        let firstSquareIndex = 0
        
        for (let i = 0; i < tileIndex; i++) {
            firstSquareIndex += track.tiles[i].squares.length
        }

        const lastSquareIndex = firstSquareIndex + track.tiles[tileIndex].squares.length 

        return track.squares.slice(firstSquareIndex, lastSquareIndex)
    } 

    return (
        <ScrollContainer className='track'>
            {track.tiles.map((t, i) => (
                <Tile key={i} name={t.name} squares={getSquaresOfGlobalSquaresArray(i)} />
            ))}
        </ScrollContainer>
        )
}