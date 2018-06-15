import React, { Component } from 'react';
import classes from './Board.css';
import Position from '../Position/Position';
import Movement from '../Movement/Movement';
import crown from '../assets/crown.png';
import Piece from '../Piece/Piece';
import { withAlert } from "react-alert";

class Board extends Component {
    state = {
        pieces:[[{color:'BlackPiece',type:'King',selected:'',direction:'downwards'},{color:'',type:'',selected:'',direction:''},{color:'BlackPiece',type:'King',selected:'',direction:'downwards'},{color:'',type:'',selected:'',direction:''},{color:'BlackPiece',type:'King',selected:'',direction:'downwards'},{color:'',type:'',selected:'',direction:''},{color:'BlackPiece',type:'King',selected:'',direction:'downwards'},{color:'',type:'',selected:'',direction:''}],
                [{color:'',type:'',selected:'',direction:''},{color:'BlackPiece',type:'King',selected:'',direction:'downwards'},{color:'',type:'',selected:'',direction:''},{color:'BlackPiece',type:'King',selected:'',direction:'downwards'},{color:'',type:'',selected:'',direction:''},{color:'BlackPiece',type:'King',selected:'',direction:'downwards'},{color:'',type:'',selected:'',direction:''},{color:'BlackPiece',type:'King',selected:'',direction:'downwards'}],
                [{color:'BlackPiece',type:'King',selected:'',direction:'downwards'},{color:'',type:'',selected:'',direction:''},{color:'BlackPiece',type:'King',selected:'',direction:'downwards'},{color:'',type:'',selected:'',direction:''},{color:'BlackPiece',type:'King',selected:'',direction:'downwards'},{color:'',type:'',selected:'',direction:''},{color:'BlackPiece',type:'King',selected:'',direction:'downwards'},{color:'',type:'',selected:'',direction:''}],
                [{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''}],
                [{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''}],
                [{color:'',type:'',selected:'',direction:''},{color:'WhitePiece',type:'King',selected:'',direction:'upwards'},{color:'',type:'',selected:'',direction:''},{color:'WhitePiece',type:'King',selected:'',direction:'upwards'},{color:'',type:'',selected:'',direction:''},{color:'WhitePiece',type:'King',selected:'',direction:'upwards'},{color:'',type:'',selected:'',direction:''},{color:'WhitePiece',type:'King',selected:'',direction:'upwards'}],
                [{color:'WhitePiece',type:'King',selected:'',direction:'upwards'},{color:'',type:'',selected:'',direction:''},{color:'WhitePiece',type:'King',selected:'',direction:'upwards'},{color:'',type:'',selected:'',direction:''},{color:'WhitePiece',type:'King',selected:'',direction:'upwards'},{color:'',type:'',selected:'',direction:''},{color:'WhitePiece',type:'King',selected:'',direction:'upwards'},{color:'',type:'',selected:'',direction:''}],
                [{color:'',type:'',selected:'',direction:''},{color:'WhitePiece',type:'King',selected:'',direction:'upwards'},{color:'',type:'',selected:'',direction:''},{color:'WhitePiece',type:'King',selected:'',direction:'upwards'},{color:'',type:'',selected:'',direction:''},{color:'WhitePiece',type:'King',selected:'',direction:'upwards'},{color:'',type:'',selected:'',direction:''},{color:'WhitePiece',type:'King',selected:'',direction:'upwards'}]],
        currentTurn:'WhitePiece',
        turnsPanel:{White:'ActiveTurn',Black:''},
        movement:{origin:{},destiny:{}},
        messages:[],
        forceJump:false
    }
    
    state2 = {
        pieces:[[{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''}],
                [{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''}],
                [{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'BlackPiece',type:'King',selected:'',direction:'downwards'},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''}],
                [{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'WhitePiece',type:'King',selected:'',direction:'downwards'},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''}],
                [{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''}],
                [{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''}],
                [{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''}],
                [{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''}],
                [{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''}]
            ],
        currentTurn:'WhitePiece',
        turnsPanel:{White:'ActiveTurn',Black:''},
        movement:{origin:{},destiny:{}},
        messages:[],
        forceJump:false
    }

    constructor(){
        super();
    }


    
    forceJump = ()=>{
        let pieces = this.state.pieces;
        let currentTurn = this.state.currentTurn;
        let positions = [];
        let _mov = new Movement();
        for (let rowIndex = 0; rowIndex < 8; rowIndex++) {
            for (let columnIndex = 0; columnIndex < 8; columnIndex++) {
                if (pieces[rowIndex][columnIndex].color==currentTurn) {
                    positions.push(new Position(rowIndex,columnIndex));
                }
            }
            
        }//gets all positions in the current turn
        let originPositions = [];
        //analize if one of those positions has a jump possibility
        positions.forEach(_position=>{
            let validMovements = _mov.listValidMovements(this.state.pieces,_position,this.state.currentTurn);
            validMovements.forEach(_targetPosition=>{
                if (_mov.isJump(_position,_targetPosition)) {
                    originPositions.push(_position);
                }
            });
        });

        originPositions.forEach(_position=>{
            console.log('POSSICAAAAO', _position);
            this.highlightPosition(this.state,_position);
            this.highlightTargets(this.state,_position);
        })
        return originPositions;
        
    }
    
    changeTurn = (_state,currentTurn) =>{
        if (_state.currentTurn==='BlackPiece') {
            _state.currentTurn ='WhitePiece'    
            _state.turnsPanel.White ='ActiveTurn'   
            _state.turnsPanel.Black =''   
        }else{
            _state.currentTurn ='BlackPiece'
            _state.turnsPanel.Black ='ActiveTurn'   
            _state.turnsPanel.White =''   
        }
        return _state;
    }

    highlightPosition =(_state,position)=>{
        if (_state.pieces[position.x][position.y].selected==='') {
            _state.pieces[position.x][position.y].selected = 'RedBorder';    
        }
    }

    removeHighlights = (_state)=>{
        _state.pieces.forEach(row=>{
            row.forEach(piece=>{
                piece.selected='';
            })
        })
    }

    highlightTargets = (_state, position)=>{
        let _movement = new Movement();
        let validMovements= _movement.listValidMovements(_state.pieces,position,_state.currentTurn);
        validMovements.forEach(position=>{
            this.highlightPosition(_state,position);
        })
    };

    isEndGame = ()=>{
        let count=0;
        this.state.pieces.forEach(row => {
            row.forEach(piece=>{
                if (piece.color!==this.state.currentTurn && piece.color!=='') {
                    count++;
                }
            })
        });
        return count===0 ? true : false;
    }

    addMessage = (message) =>{
        let _state = {...this.state};
        _state.messages.unshift(message);
        this.setState(_state);
    }
    
    setBoard = () =>{
        this.setState({
            pieces:[[{color:'BlackPiece',type:'King',selected:'',direction:'downwards'},{color:'',type:'',selected:'',direction:''},{color:'BlackPiece',type:'King',selected:'',direction:'downwards'},{color:'',type:'',selected:'',direction:''},{color:'BlackPiece',type:'King',selected:'',direction:'downwards'},{color:'',type:'',selected:'',direction:''},{color:'BlackPiece',type:'King',selected:'',direction:'downwards'},{color:'',type:'',selected:'',direction:''}],
            [{color:'',type:'',selected:'',direction:''},{color:'BlackPiece',type:'King',selected:'',direction:'downwards'},{color:'',type:'',selected:'',direction:''},{color:'BlackPiece',type:'King',selected:'',direction:'downwards'},{color:'',type:'',selected:'',direction:''},{color:'BlackPiece',type:'King',selected:'',direction:'downwards'},{color:'',type:'',selected:'',direction:''},{color:'BlackPiece',type:'King',selected:'',direction:'downwards'}],
            [{color:'BlackPiece',type:'King',selected:'',direction:'downwards'},{color:'',type:'',selected:'',direction:''},{color:'BlackPiece',type:'King',selected:'',direction:'downwards'},{color:'',type:'',selected:'',direction:''},{color:'BlackPiece',type:'King',selected:'',direction:'downwards'},{color:'',type:'',selected:'',direction:''},{color:'BlackPiece',type:'King',selected:'',direction:'downwards'},{color:'',type:'',selected:'',direction:''}],
            [{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''}],
            [{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''}],
            [{color:'',type:'',selected:'',direction:''},{color:'WhitePiece',type:'King',selected:'',direction:'upwards'},{color:'',type:'',selected:'',direction:''},{color:'WhitePiece',type:'King',selected:'',direction:'upwards'},{color:'',type:'',selected:'',direction:''},{color:'WhitePiece',type:'King',selected:'',direction:'upwards'},{color:'',type:'',selected:'',direction:''},{color:'WhitePiece',type:'King',selected:'',direction:'upwards'}],
            [{color:'WhitePiece',type:'King',selected:'',direction:'upwards'},{color:'',type:'',selected:'',direction:''},{color:'WhitePiece',type:'King',selected:'',direction:'upwards'},{color:'',type:'',selected:'',direction:''},{color:'WhitePiece',type:'King',selected:'',direction:'upwards'},{color:'',type:'',selected:'',direction:''},{color:'WhitePiece',type:'King',selected:'',direction:'upwards'},{color:'',type:'',selected:'',direction:''}],
            [{color:'',type:'',selected:'',direction:''},{color:'WhitePiece',type:'King',selected:'',direction:'upwards'},{color:'',type:'',selected:'',direction:''},{color:'WhitePiece',type:'King',selected:'',direction:'upwards'},{color:'',type:'',selected:'',direction:''},{color:'WhitePiece',type:'King',selected:'',direction:'upwards'},{color:'',type:'',selected:'',direction:''},{color:'WhitePiece',type:'King',selected:'',direction:'upwards'}]],
            currentTurn:'WhitePiece',
            turnsPanel:{White:'ActiveTurn',Black:''},
            movement:{origin:{},destiny:{}}
        });
    }


    validateTurn = (position) =>{
        if (this.state.pieces[position.x][position.y].color===''){
            return false;
        } else if (this.state.pieces[position.x][position.y].color!==this.state.currentTurn){
            //empty board cell
            this.addMessage("It's not your turn!")
            return false;
        } else{
            return true;
        }
    }
    setMovementState =(position,movementType)=>{
        let _state = {...this.state};
        if (movementType==='origin') {
            if (position) {
                _state.movement.origin = position ? position : {};    
                this.highlightPosition(_state,position);
                this.highlightTargets(_state,position);    
            } else {
                _state.movement.origin = {};
            }
            
        } else {
            _state.movement.destiny = position ? position : {};    
        }
        this.setState(_state);
    }

    abortMovement = (position) =>{
        if(this.state.movement.origin.x===position.x && this.state.movement.origin.y===position.y){
           return true; console.log('return true caraio')
        }
        return false;
    }

    setMovement = (x,y) =>{
        let _state = {...this.state};
        let _position = new Position(x,y);
        let _mov = new Movement();
        let forceOrigin = this.forceJump();
        if (forceOrigin.length>0) {
            if (!(this.state.movement.origin instanceof Position)) {
                if (forceOrigin.filter(__position=> __position.x===_position.x && __position.y===_position.y).length===1) {
                    this.setMovementState(_position,'origin');                        
                } else {
                    this.addMessage('There is a mandatory movement in this turn. Select one of the highlighted pieces.');
                }
            } else {
                this.setMovementState(_position,'destiny');
                this.movePiece();
            }
        } else {
            if (!(this.state.movement.origin instanceof Position)) {
                if (this.validateTurn(_position)){
                    if (_mov.listValidMovements(_state.pieces,_position,_state.currentTurn).length>0){
                        this.setMovementState(_position,'origin');                        
                    }
                }
            } else {
                if (!this.abortMovement(_position)) {
                    this.setMovementState(_position,'destiny');
                    this.movePiece();
                } else{
                    this.setMovementState(null,'origin');
                    this.removeHighlights(this.state);
                }
            }
        }
    }

    movePiece = () =>{
        let _state = {...this.state};
        let _movement = new Movement();
        let possibleMovements = _movement.listValidMovements(_state.pieces,_state.movement.origin,_state.currentTurn);
        let _destinyPosition = possibleMovements.find(_position=>{
            return _position.x==_state.movement.destiny.x && _position.y==_state.movement.destiny.y;
        });
        if (_destinyPosition) {
            let originPiece = new Piece();
            let destinyPiece = new Piece();
            let jumped = _movement.killOponent(_state.pieces,_state.movement.origin,_state.movement.destiny,_state.currentTurn);
            destinyPiece = _state.pieces[_state.movement.origin.x][_state.movement.origin.y];
            this.highlightPosition(_state,_state.movement.origin);
            if (_state.movement.destiny.x===0 || _state.movement.destiny.x===7) {
                destinyPiece.direction='both';
            }
            _state.pieces[_state.movement.origin.x][_state.movement.origin.y] = originPiece;
            _state.pieces[_state.movement.destiny.x][_state.movement.destiny.y] = destinyPiece;
            this.removeHighlights(_state);
            if (_movement.listValidMovements(_state.pieces,_state.movement.destiny,_state.currentTurn).filter) {
                
            }
            if (this.isEndGame()) {
                this.props.alert.show(`Game end! ${this.state.currentTurn} won!`);
            }
            let hasJumps =  _movement.hasJumpMovements(_state.pieces,new Position(_state.movement.destiny.x,_state.movement.destiny.y),_movement.listValidMovements(_state.pieces,
                                new Position(_state.movement.destiny.x,_state.movement.destiny.y)
                                ,_state.currentTurn));
            if (hasJumps && jumped) {
                this.setMovementState(new Position(_state.movement.destiny.x,_state.movement.destiny.y),'origin');
            } else{
                this.changeTurn(_state,_state.currentTurn);
                _state.movement.origin = {};
                _state.movement.destiny = {}; 
            }
            this.setState(_state, ()=>{
            });
        }else{
            this.addMessage('Invalid Movement');
        }
    }
    render() {
        const listItems = this.state.messages.map((_message) =>
                                    <li className="MessageItem"><div className="MessageInfo">{_message}</div></li>);
        return (
            <div className="GameContainer">
                <div className="GamePanel">
                    <button className="button" onClick={this.setBoard}>Start Game</button>
                    {/* <button onClick={()=> {this.setState(this.state2)}}>teste</button> */}
                    <div>
                        <div className={"Turns " + this.state.turnsPanel.White}><p>White Pieces Turn</p></div>
                        <div className={"Turns " + this.state.turnsPanel.Black}><p>Black Pieces Turn</p></div>
                    </div>
                </div>
                <div className="Board">
                    <div className="BoardRow">
                        <div onClick={()=> this.setMovement(0,0)} id="1A" className={"BlackHouse" + ' ' + this.state.pieces[0][0].selected}>
                            <div className={this.state.pieces[0][0].color}/>
                        </div>
                        <div id="1B" className="WhiteHouse">
                            <div className={this.state.pieces[0][1].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(0,2)} id="1C" className={"BlackHouse" + ' ' + this.state.pieces[0][2].selected}>
                            <div className={this.state.pieces[0][2].color}/>
                        </div>
                        <div id="1D" className="WhiteHouse">
                            <div className={this.state.pieces[0][3].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(0,4)} id="1E" className={"BlackHouse" + ' ' + this.state.pieces[0][4].selected}>
                            <div className={this.state.pieces[0][4].color}/>
                        </div>
                        <div id="1F" className="WhiteHouse">
                            <div className={this.state.pieces[0][5].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(0,6)} id="1G" className={"BlackHouse" + ' ' + this.state.pieces[0][6].selected}>
                            <div className={this.state.pieces[0][6].color}/>
                        </div>
                        <div id="1H" className="WhiteHouse">
                            <div className={this.state.pieces[0][7].color}/>
                        </div>
                    </div>
                    <div className="BoardRow">
                        <div id="2A" className="WhiteHouse">
                            <div className={this.state.pieces[1][0].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(1,1)} id="2B" className={"BlackHouse" + ' ' + this.state.pieces[1][1].selected}>
                            <div className={this.state.pieces[1][1].color}/>
                        </div>
                        <div id="2C" className="WhiteHouse">
                            <div className={this.state.pieces[1][2].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(1,3)} id="2D" className={"BlackHouse" + ' ' + this.state.pieces[1][3].selected}>
                            <div className={this.state.pieces[1][3].color}/>
                        </div>
                        <div id="2E" className="WhiteHouse">
                            <div className={this.state.pieces[1][4].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(1,5)} id="2F" className={"BlackHouse" + ' ' + this.state.pieces[1][5].selected}>
                            <div className={this.state.pieces[1][5].color}/>
                        </div>
                        <div id="2G" className="WhiteHouse">
                            <div className={this.state.pieces[1][6].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(1,7)} id="2H" className={"BlackHouse" + ' ' + this.state.pieces[1][7].selected}>
                            <div className={this.state.pieces[1][7].color}/>
                        </div>
                    </div>
                    <div className="BoardRow">
                        <div onClick={()=> this.setMovement(2,0)} id="3A" className={"BlackHouse" + ' ' + this.state.pieces[2][0].selected}>
                            <div className={this.state.pieces[2][0].color}/>
                        </div>
                        <div id="3B" className="WhiteHouse">
                            <div className={this.state.pieces[2][1].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(2,2)} id="3C" className={"BlackHouse" + ' ' + this.state.pieces[2][2].selected}>
                            <div className={this.state.pieces[2][2].color}/>
                        </div>
                        <div id="3D" className="WhiteHouse">
                            <div className={this.state.pieces[2][3].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(2,4)} id="3E" className={"BlackHouse" + ' ' + this.state.pieces[2][4].selected}>
                            <div className={this.state.pieces[2][4].color}/>
                        </div>
                        <div id="3F" className="WhiteHouse">
                            <div className={this.state.pieces[2][5].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(2,6)} id="3G" className={"BlackHouse" + ' ' + this.state.pieces[2][6].selected}>
                            <div  className={this.state.pieces[2][6].color}/>
                        </div>
                        <div id="3H" className="WhiteHouse">
                            <div  className={this.state.pieces[2][7].color}/>
                        </div>
                    </div>
                    <div className="BoardRow">
                        <div id="4A" className="WhiteHouse">
                            <div className={this.state.pieces[3][0].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(3,1)} id="4B" className={"BlackHouse" + ' ' + this.state.pieces[3][1].selected}>
                            <div className={this.state.pieces[3][1].color}/>
                        </div>
                        <div id="4C" className="WhiteHouse">
                            <div className={this.state.pieces[3][2].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(3,3)} id="4D" className={"BlackHouse" + ' ' + this.state.pieces[3][3].selected}>
                            <div className={this.state.pieces[3][3].color}/>
                        </div>
                        <div id="4E" className="WhiteHouse">
                            <div className={this.state.pieces[3][4].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(3,5)} id="4F" className={"BlackHouse" + ' ' + this.state.pieces[3][5].selected}>
                            <div className={this.state.pieces[3][5].color}/>
                        </div>
                        <div id="4G" className="WhiteHouse">
                            <div className={this.state.pieces[3][6].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(3,7)} id="4H" className={"BlackHouse" + ' ' + this.state.pieces[3][7].selected}>
                            <div className={this.state.pieces[3][7].color}/>
                        </div>
                    </div>
                    <div className="BoardRow">
                        <div onClick={()=> this.setMovement(4,0)} id="5A" className={"BlackHouse" + ' ' + this.state.pieces[4][0].selected}>
                            <div className={this.state.pieces[4][0].color}/>
                        </div>
                        <div id="5B" className="WhiteHouse">
                            <div className={this.state.pieces[4][1].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(4,2)} id="5C" className={"BlackHouse" + ' ' + this.state.pieces[4][2].selected}>
                            <div className={this.state.pieces[4][2].color}/>
                        </div>
                        <div id="5D" className="WhiteHouse">
                            <div className={this.state.pieces[4][3].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(4,4)} id="5E" className={"BlackHouse" + ' ' + this.state.pieces[4][4].selected}>
                            <div className={this.state.pieces[4][4].color}/>
                        </div>
                        <div id="5F" className="WhiteHouse">
                            <div className={this.state.pieces[4][5].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(4,6)}  id="5G" className={"BlackHouse" + ' ' + this.state.pieces[4][6].selected}>
                            <div className={this.state.pieces[4][6].color}/>
                        </div>
                        <div id="5H" className="WhiteHouse">
                            <div className={this.state.pieces[4][7]}/>
                        </div>   
                    </div>
                    <div className="BoardRow">
                        <div id="6A" className="WhiteHouse">
                            <div className={this.state.pieces[5][0].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(5,1)}  id="6B" className={"BlackHouse" + ' ' + this.state.pieces[5][1].selected}>
                            <div className={this.state.pieces[5][1].color}/>
                        </div>
                        <div id="6C" className="WhiteHouse">
                            <div className={this.state.pieces[5][2].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(5,3)} id="6D" className={"BlackHouse" + ' ' + this.state.pieces[5][3].selected}>
                            <div className={this.state.pieces[5][3].color}/>
                        </div>
                        <div id="6E" className="WhiteHouse">
                            <div className={this.state.pieces[5][4].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(5,5)} id="6F" className={"BlackHouse" + ' ' + this.state.pieces[5][5].selected}>
                            <div className={this.state.pieces[5][5].color}/>
                        </div>
                        <div id="6G" className="WhiteHouse">
                            <div className={this.state.pieces[5][6].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(5,7)} id="6H" className={"BlackHouse" + ' ' + this.state.pieces[5][7].selected}>
                            <div className={this.state.pieces[5][7].color}/>
                        </div>
                    </div>
                    <div className="BoardRow">
                        <div onClick={()=> this.setMovement(6,0)} id="7A" className={"BlackHouse" + ' ' + this.state.pieces[6][0].selected}>
                            <div className={this.state.pieces[6][0].color}/>
                        </div>
                        <div id="7B" className="WhiteHouse">
                            <div className={this.state.pieces[6][1].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(6,2)} id="7C" className={"BlackHouse" + ' ' + this.state.pieces[6][2].selected}>
                            <div className={this.state.pieces[6][2].color}/>
                        </div>
                        <div id="7D" className="WhiteHouse">
                            <div className={this.state.pieces[6][3].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(6,4)} id="7E" className={"BlackHouse" + ' ' + this.state.pieces[6][4].selected}>
                            <div className={this.state.pieces[6][4].color}/>
                        </div>
                        <div id="7F" className="WhiteHouse">
                            <div className={this.state.pieces[6][5].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(6,6)} id="7G" className={"BlackHouse" + ' ' + this.state.pieces[6][6].selected}>
                            <div className={this.state.pieces[6][6].color}/>
                        </div>
                        <div id="7H" className="WhiteHouse">
                            <div className={this.state.pieces[6][7].color}/>
                        </div>
                    </div>
                    <div className="BoardRow">
                        <div id="8A" className="WhiteHouse">
                            <div className={this.state.pieces[7][0].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(7,1)} id="8B" className={"BlackHouse" + ' ' + this.state.pieces[7][1].selected}>
                            <div className={this.state.pieces[7][1].color}/>
                        </div>
                        <div id="8C" className="WhiteHouse">
                            <div className={this.state.pieces[7][2].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(7,3)} id="8D" className={"BlackHouse" + ' ' + this.state.pieces[7][3].selected}>
                            <div className={this.state.pieces[7][3].color}/>
                        </div>
                        <div id="8E" className="WhiteHouse">
                            <div className={this.state.pieces[7][4].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(7,5)} id="7F" className={"BlackHouse" + ' ' + this.state.pieces[7][5].selected}>
                            <div className={this.state.pieces[7][5].color}/>
                        </div>
                        <div id="7G" className="WhiteHouse">
                            <div className={this.state.pieces[7][6].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(7,7)} id="7H" className={"BlackHouse" + ' ' + this.state.pieces[7][7].selected}>
                            <div className={this.state.pieces[7][7].color}/>
                        </div>
                    </div>
                </div>
                <div className="MessageContainer">
                    <ul className="MessageList">{listItems}</ul>
                </div>
            </div>
        )
    }
}

export default withAlert(Board);

