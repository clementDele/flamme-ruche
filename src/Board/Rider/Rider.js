import { React } from 'react';
import { buildFrontRiderFromRiderID } from '../../utils'

import './Rider.css'

export const Rider = ({ rider }) => {
    const frontRider = buildFrontRiderFromRiderID(rider)

    return (
        <div
            style={{
                background: `url('${process.env.PUBLIC_URL}/img/riders/${frontRider.team}/${frontRider.type}.png') 0% 0% / contain no-repeat`
            }} 
        />
    )
}