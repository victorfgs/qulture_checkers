import React, { Component } from 'react';
import Position from '../Position/Position';
import Piece from '../Piece/Piece';

class Movement {


    removeInvalidVerticalMovements = (currentBoard,position1,validMovementsList) =>{
        let allowedPositions = [];
        let originPiece = new Piece();
        originPiece.setFromState(currentBoard[position1.x][position1.y]);
        console.log('Origin piece',originPiece);
        validMovementsList.forEach(_position=>{
            console.log('_position',_position);
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
        console.log('allowed positions',allowedPositions);
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
        console.log('Position', position1);
        console.log('Bounds',bounds);
        let possibleMovements = [];
        bounds.forEach(bound=>{
            console.log('board piece object', currentBoard[bound.x][bound.y]);
            if (currentBoard[bound.x][bound.y].color=='') {
                possibleMovements.push(bound);
            }else if(currentBoard[bound.x][bound.y].color!=='' && currentBoard[bound.x][bound.y].color!==currentTurn){
                let boundsTarget = this.getNeighborhood(currentBoard,bound,currentTurn);
                console.log('Bounds target',boundsTarget)
                boundsTarget.forEach(targetNeighbor=>{
                    if (currentBoard[targetNeighbor.x][targetNeighbor.y].color==='' 
                        && !((targetNeighbor.x===position1.x) || (targetNeighbor.y===position1.y))) {
                        possibleMovements.push(targetNeighbor);
                    }
                })
            }
        })
        console.log('Possible movements',possibleMovements);
        
        return this.removeInvalidVerticalMovements(currentBoard,position1,possibleMovements);;
    }

    killOponent =(currentBoard,position1, position2,currentTurn)=>{
        if(Math.abs(position2.x-position1.x)=== 2 && Math.abs(position2.y-position1.y)===2){ 
            let enemyPosition = new Position((position1.x+position2.x)/2,(position1.y+position2.y)/2);
                currentBoard[enemyPosition.x][enemyPosition.y]= new Piece();
        }
    }
    validadeMovement = (currentBoard,position1, position2,currentTurn) =>{
        let originPiece = new Piece();
        originPiece = currentBoard[position1.x][position1.y];

        if (currentBoard[position2.x][position2.y].color!=='') {
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
            if (currentBoard[enemyPosition.x][enemyPosition.y].color!=='' 
                    && currentBoard[enemyPosition.x][enemyPosition.y]!==currentTurn) {
                currentBoard[enemyPosition.x][enemyPosition.y].color=''
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