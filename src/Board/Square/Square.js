import { React } from 'react';
import { Lane } from '../Lane/Lane';

import './Square.css'

export const Square = ({ square }) => {
    return (
        <div className="square">
            <Lane lane={square.rightLane} position="right"/>
            <Lane lane={square.leftLane} position="left" />
        </div>
    )
}

