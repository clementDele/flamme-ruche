import { React } from 'react';

import './Tile.css'

import { Square } from '../Square/Square';

export const Tile = ({ name, squares }) => {
    return (
        <div className='tile' style={{
            background: `url('${process.env.PUBLIC_URL}/img/tiles/${name}.bmp')`,
            backgroundSize: "100% 100%"
        }}>
            {squares.map((sq, i) => (
                <Square key={i} square={sq} />
            ))}
        </div>
        )
}