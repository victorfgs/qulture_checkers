import React, { Component } from 'react';
import Position from '../Position/Position';

class Movement {


    getNeighborhood = (currentBoard,position1,currentTurn) =>{
        let bound1 = (position1.x-1<0 ||position1.y-1<0) ? new Position(position1.x,position1.y): new Position((position1.x-1),(position1.y-1));
        let bound2 = (position1.x+1>7 ||position1.y-1<0) ? new Position(position1.x,position1.y): new Position((position1.x+1),(position1.y-1));
        let bound3 = (position1.x+1>7 ||position1.y+1>7) ? new Position(position1.x,position1.y): new Position((position1.x+1),(position1.y+1));
        let bound4 = (position1.x-1<0 ||position1.y+1>7) ? new Position(position1.x,position1.y): new Position((position1.x-1),(position1.y+1));
        let bounds = [bound1,bound2,bound3,bound4];
        return bounds;
    }
    
    
    listValidMovements = (currentBoard,position1,currentTurn) =>{
        let bounds = this.getNeighborhood(currentBoard,position1,currentTurn);//[bound1,bound2,bound3,bound4];
        console.log('Position', position1);
        console.log('Bounds',bounds);
        let possibleMovements = [];
        bounds.forEach(bound=>{
            if (currentBoard[bound.x][bound.y]==='') {
                possibleMovements.push(bound);
            }else if(currentBoard[bound.x][bound.y]!=='' && currentBoard[bound.x][bound.y]!==currentTurn){
                let boundsTarget = this.getNeighborhood(currentBoard,bound,currentTurn);
                console.log('Bounds target',boundsTarget)
                boundsTarget.forEach(targetNeighbor=>{
                    if (currentBoard[targetNeighbor.x][targetNeighbor.y]==='' 
                        && !((targetNeighbor.x===position1.x) || (targetNeighbor.y===position1.y))) {
                        possibleMovements.push(targetNeighbor);
                    }
                })
            }
        })
        console.log('Possible movements',possibleMovements);
        return possibleMovements;
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