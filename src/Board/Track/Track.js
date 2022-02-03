import { React } from 'react';

import './Track.css'

import { Square } from '../Square/Square';

export const Track = ({ track }) => {
    return (
        <div className='track'>
            {track.squares.map((sq, i) => (
                    <Square key={i} square={sq} />
                )
            )}
        </div>
        )
}