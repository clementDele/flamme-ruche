import { React } from 'react';
import { Lane } from '../Lane/Lane';
import { SQUARE_TYPE } from '../../const';


import './Square.css'

export const Square = ({ square }) => {
    const getSquareStyleFromSquareType = sqType => {
        switch (sqType) {
            case SQUARE_TYPE.START:
            case SQUARE_TYPE.FINISH:
                return {
                    background: `url('${process.env.PUBLIC_URL}/start-finish-square.png')`,
                    backgroundSize: "100% 100%"
                }
            case SQUARE_TYPE.ASCENT:
                return {
                    background: `url('${process.env.PUBLIC_URL}/ascent-square.png')`,
                    backgroundSize: "100% 100%"
                }
            case SQUARE_TYPE.DESCENT:
                return {
                    background: `url('${process.env.PUBLIC_URL}/descent-square.png')`,
                    backgroundSize: "100% 100%"
                }
            case SQUARE_TYPE.COBBLE:
                return {
                    backgroundColor: "Gray"
                }
            case SQUARE_TYPE.ROAD:
                return {
                    background: `url('${process.env.PUBLIC_URL}/road-square.png')`,
                    backgroundSize: "100% 100%"
                }
            default:
                return {
                    backgroundColor: "Gainsboro"
                }
        }
    }
    
    return (
        <div className="square" style={getSquareStyleFromSquareType(square.type)}>
            <Lane lane={square.rightLane} position="right"/>
            <Lane lane={square.leftLane} position="left" />
        </div>
    )
}

