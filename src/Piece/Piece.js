import React, { Component } from 'react';



class Piece extends Component {
    constructor(){
        super();
        this.color = '';
        this.type = '';
        this.selected = '';
        this.direction = '';
    }

    setFromState = (piece) =>{
        this.color = piece.color;
        this.type = piece.type;
        this.selected = piece.selected;
        this.direction = piece.direction;
    }

}



export default Piece