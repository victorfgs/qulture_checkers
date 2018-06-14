import React, { Component } from 'react';
import Position from '../Position/Position';
import Piece from '../Piece/Piece';

class Movement {


    removeInvalidVerticalMovements = (currentBoard,position1,validMovementsList) =>{
        let allowedPositions = [];
        let originPiece = new Piece();
        originPiece.setFromState(currentBoard[position1.x][position1.y]);
        validMovementsList.forEach(_position=>{
            if(Math.abs(_position.x-position1.x)=== 2 && Math.abs(_position.y-position1.y)===2){
                allowedPositions.push(_position);
            }else if (originPiece.direction==='downwards' && position1.x<_position.x) {
                allowedPositions.push(_position);
            }
            else if(originPiece.direction==='upwards' && position1.x>_position.x){
                allowedPositions.push(_position);
            }else if(originPiece.direction==='both'){
                allowedPositions.push(_position);
            }
        });
        return allowedPositions;
    }



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
        let possibleMovements = [];
        bounds.forEach(bound=>{
            if (currentBoard[bound.x][bound.y].color==='') {
                possibleMovements.push(bound);
            }else if(currentBoard[bound.x][bound.y].color!=='' && currentBoard[bound.x][bound.y].color!==currentTurn){
                let boundsTarget = this.getNeighborhood(currentBoard,bound,currentTurn);
                boundsTarget.forEach(targetNeighbor=>{
                    if (currentBoard[targetNeighbor.x][targetNeighbor.y].color==='' 
                        && !((targetNeighbor.x===position1.x) || (targetNeighbor.y===position1.y))) {
                        possibleMovements.push(targetNeighbor);
                    }
                })
            }
        });
        return this.removeInvalidVerticalMovements(currentBoard,position1,possibleMovements);;
    }

    killOponent =(currentBoard,position1, position2,currentTurn)=>{
        if(Math.abs(position2.x-position1.x)=== 2 && Math.abs(position2.y-position1.y)===2){ 
            let enemyPosition = new Position((position1.x+position2.x)/2,(position1.y+position2.y)/2);
                currentBoard[enemyPosition.x][enemyPosition.y]= new Piece();
        }
    }
}


export default Movement;