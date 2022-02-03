
import { React } from 'react';

import { Rider } from '../Rider/Rider'
import './Lane.css'

export const Lane = ({ lane, position }) => {
    // lane object only contains a Rider so lane == rider
    const rider = lane

    return (
        <div className="lane">
            {position === "right" ? <div></div> : <></>}
            {rider !== null ? <Rider rider={rider}></Rider> : <></>}
            {position === "left" ? <div></div> : <></>}
        </div>
    )
}