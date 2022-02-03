import { React } from 'react';
import { buildFrontRiderFromRiderID } from '../../utils'

import './Rider.css'

export const Rider = ({ rider }) => {
    const frontRider = buildFrontRiderFromRiderID(rider)

    return (
        <div className='rider' style={{backgroundColor: frontRider.team}}>
            <p>{frontRider.type}</p>
        </div>
    )
}