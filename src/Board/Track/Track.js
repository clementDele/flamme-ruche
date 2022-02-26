import { React } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll'

import './Track.css'

import { Square } from '../Square/Square';

export const Track = ({ track }) => {
    return (
        <ScrollContainer className='track'>
            {track.squares.map((sq, i) => (
                    <Square key={i} square={sq} />
                )
            )}
        </ScrollContainer>
        )
}