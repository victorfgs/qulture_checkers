import React, { Component } from 'react';
import Position from '../Position/Position';

class Movement {


    listValidMovements = (currentBoard,position1) =>{
        
    }


    validadeMovement = (currentBoard,position1, position2,currentTurn) =>{
        if (currentBoard[position2.x][position2.y]!=='') {
            console.log('cannot move to a house that already has a piece!');
            return false;
        }else if((position2.x !== position1.x) && (position1.y===position2.y) ){
            console.log('Cannot perform vertical movements');
            return false;
        }else if((position2.y !== position1.y) && (position1.x===position2.x)){
            console.log('Cannot perform lateral movements');
            return false;
        }else if(Math.abs(position2.x-position1.x)=== 2 && Math.abs(position2.y-position1.y)===2){ 
            let enemyPosition = new Position((position1.x+position2.x)/2,(position1.y+position2.y)/2);
            if (currentBoard[enemyPosition.x][enemyPosition.y]!=='' 
                    && currentBoard[enemyPosition.x][enemyPosition.y]!==currentTurn) {
                currentBoard[enemyPosition.x][enemyPosition.y]=''
                return true
            }else{
                console.log('Cannot move more than 1 house at a time');
                return false;
            }
        }else{
            console.log('valid movement!');
            return true;
        }
    }
}


export default Movement;