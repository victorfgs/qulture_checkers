import React, { Component } from 'react';
import Position from '../Position/Position';

class Movement {


    validadeMovement = (currentBoard,position1, position2) =>{
        if (currentBoard[position2.x][position2.y]!=='') {
            console.log('cannot move to a house that already has a piece!');
            return false;
        }else if((position2.x !== position1.x) && (position1.y===position2.y) ){
            console.log('Cannot perform vertical movements');
            return false;
        }else if((position2.y !== position1.y) && (position1.x===position2.x)){
            
            console.log('Cannot perform lateral movements');
            return false;
        }else if((position2.x>=position1.x+2) || (position2.y>=position1.y+2)){
            if (currentBoard[position1.x+1][position1.y+1]) {
                
            }
            console.log('Cannot move more than 1 house at a time');
            return false;
        }else{
            console.log('valid movement!');
            return true;
        }
    }


}


export default Movement;