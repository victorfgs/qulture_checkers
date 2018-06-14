import React, { Component } from 'react';
import classes from './Board.css';
import Position from '../Position/Position';
import Movement from '../Movement/Movement';
import crown from '../assets/crown.png';
import Piece from '../Piece/Piece';
import { withAlert } from "react-alert";

class Board extends Component {
    state = {
        pieces:[[{color:'BlackPiece',type:'King',selected:'RedBorder',direction:'downwards'},{color:'',type:'',selected:'',direction:''},{color:'BlackPiece',type:'King',selected:'RedBorder',direction:'downwards'},{color:'',type:'',selected:'',direction:''},{color:'BlackPiece',type:'King',selected:'RedBorder',direction:'downwards'},{color:'',type:'',selected:'',direction:''},{color:'BlackPiece',type:'King',selected:'RedBorder',direction:'downwards'},{color:'',type:'',selected:'',direction:''}],
                [{color:'',type:'',selected:'',direction:''},{color:'BlackPiece',type:'King',selected:'RedBorder',direction:'downwards'},{color:'',type:'',selected:'',direction:''},{color:'BlackPiece',type:'King',selected:'RedBorder',direction:'downwards'},{color:'',type:'',selected:'',direction:''},{color:'BlackPiece',type:'King',selected:'RedBorder',direction:'downwards'},{color:'',type:'',selected:'',direction:''},{color:'BlackPiece',type:'King',selected:'RedBorder',direction:'downwards'}],
                [{color:'BlackPiece',type:'King',selected:'RedBorder',direction:'downwards'},{color:'',type:'',selected:'',direction:''},{color:'BlackPiece',type:'King',selected:'RedBorder',direction:'downwards'},{color:'',type:'',selected:'',direction:''},{color:'BlackPiece',type:'King',selected:'RedBorder',direction:'downwards'},{color:'',type:'',selected:'',direction:''},{color:'BlackPiece',type:'King',selected:'RedBorder',direction:'downwards'},{color:'',type:'',selected:'',direction:''}],
                [{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''}],
                [{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''}],
                [{color:'',type:'',selected:'',direction:''},{color:'WhitePiece',type:'King',selected:'RedBorder',direction:'upwards'},{color:'',type:'',selected:'',direction:''},{color:'WhitePiece',type:'King',selected:'RedBorder',direction:'upwards'},{color:'',type:'',selected:'',direction:''},{color:'WhitePiece',type:'King',selected:'RedBorder',direction:'upwards'},{color:'',type:'',selected:'',direction:''},{color:'WhitePiece',type:'King',selected:'RedBorder',direction:'upwards'}],
                [{color:'WhitePiece',type:'King',selected:'RedBorder',direction:'upwards'},{color:'',type:'',selected:'',direction:''},{color:'WhitePiece',type:'King',selected:'RedBorder',direction:'upwards'},{color:'',type:'',selected:'',direction:''},{color:'WhitePiece',type:'King',selected:'RedBorder',direction:'upwards'},{color:'',type:'',selected:'',direction:''},{color:'WhitePiece',type:'King',selected:'RedBorder',direction:'upwards'},{color:'',type:'',selected:'',direction:''}],
                [{color:'',type:'',selected:'',direction:''},{color:'WhitePiece',type:'King',selected:'RedBorder',direction:'upwards'},{color:'',type:'',selected:'',direction:''},{color:'WhitePiece',type:'King',selected:'RedBorder',direction:'upwards'},{color:'',type:'',selected:'',direction:''},{color:'WhitePiece',type:'King',selected:'RedBorder',direction:'upwards'},{color:'',type:'',selected:'',direction:''},{color:'WhitePiece',type:'King',selected:'RedBorder',direction:'upwards'}]],
        currentTurn:'WhitePiece',
        turnsPanel:{White:'ActiveTurn',Black:''},
        movement:{origin:{},destiny:{}},
        messages:[]
    }
    
    state2 = {
        pieces:[[{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''}],
                [{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''}],
                [{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'BlackPiece',type:'King',selected:'RedBorder',direction:'downwards'},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''}],
                [{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'WhitePiece',type:'King',selected:'RedBorder',direction:'downwards'},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''}],
                [{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''}],
                [{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''}],
                [{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''}],
                [{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''}],
                [{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''}]
            ],
        currentTurn:'WhitePiece',
        turnsPanel:{White:'ActiveTurn',Black:''},
        movement:{origin:{},destiny:{}},
        messages:[]
    }

    constructor(){
        super();
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
            pieces:[[{color:'BlackPiece',type:'King',selected:'RedBorder',direction:'downwards'},{color:'',type:'',selected:'',direction:''},{color:'BlackPiece',type:'King',selected:'RedBorder',direction:'downwards'},{color:'',type:'',selected:'',direction:''},{color:'BlackPiece',type:'King',selected:'RedBorder',direction:'downwards'},{color:'',type:'',selected:'',direction:''},{color:'BlackPiece',type:'King',selected:'RedBorder',direction:'downwards'},{color:'',type:'',selected:'',direction:''}],
            [{color:'',type:'',selected:'',direction:''},{color:'BlackPiece',type:'King',selected:'RedBorder',direction:'downwards'},{color:'',type:'',selected:'',direction:''},{color:'BlackPiece',type:'King',selected:'RedBorder',direction:'downwards'},{color:'',type:'',selected:'',direction:''},{color:'BlackPiece',type:'King',selected:'RedBorder',direction:'downwards'},{color:'',type:'',selected:'',direction:''},{color:'BlackPiece',type:'King',selected:'RedBorder',direction:'downwards'}],
            [{color:'BlackPiece',type:'King',selected:'RedBorder',direction:'downwards'},{color:'',type:'',selected:'',direction:''},{color:'BlackPiece',type:'King',selected:'RedBorder',direction:'downwards'},{color:'',type:'',selected:'',direction:''},{color:'BlackPiece',type:'King',selected:'RedBorder',direction:'downwards'},{color:'',type:'',selected:'',direction:''},{color:'BlackPiece',type:'King',selected:'RedBorder',direction:'downwards'},{color:'',type:'',selected:'',direction:''}],
            [{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''}],
            [{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''},{color:'',type:'',selected:'',direction:''}],
            [{color:'',type:'',selected:'',direction:''},{color:'WhitePiece',type:'King',selected:'RedBorder',direction:'upwards'},{color:'',type:'',selected:'',direction:''},{color:'WhitePiece',type:'King',selected:'RedBorder',direction:'upwards'},{color:'',type:'',selected:'',direction:''},{color:'WhitePiece',type:'King',selected:'RedBorder',direction:'upwards'},{color:'',type:'',selected:'',direction:''},{color:'WhitePiece',type:'King',selected:'RedBorder',direction:'upwards'}],
            [{color:'WhitePiece',type:'King',selected:'RedBorder',direction:'upwards'},{color:'',type:'',selected:'',direction:''},{color:'WhitePiece',type:'King',selected:'RedBorder',direction:'upwards'},{color:'',type:'',selected:'',direction:''},{color:'WhitePiece',type:'King',selected:'RedBorder',direction:'upwards'},{color:'',type:'',selected:'',direction:''},{color:'WhitePiece',type:'King',selected:'RedBorder',direction:'upwards'},{color:'',type:'',selected:'',direction:''}],
            [{color:'',type:'',selected:'',direction:''},{color:'WhitePiece',type:'King',selected:'RedBorder',direction:'upwards'},{color:'',type:'',selected:'',direction:''},{color:'WhitePiece',type:'King',selected:'RedBorder',direction:'upwards'},{color:'',type:'',selected:'',direction:''},{color:'WhitePiece',type:'King',selected:'RedBorder',direction:'upwards'},{color:'',type:'',selected:'',direction:''},{color:'WhitePiece',type:'King',selected:'RedBorder',direction:'upwards'}]],
            currentTurn:'WhitePiece',
            turnsPanel:{White:'ActiveTurn',Black:''},
            movement:{origin:{},destiny:{}}
        });
    }

    setMovement = (x,y) =>{
        let _state = {...this.state};
        let _position = new Position(x,y);
        let _mov = new Movement();
        if (!(this.state.movement.origin instanceof Position)) {
            if (_state.pieces[x][y].color!=_state.currentTurn) {
                this.addMessage('Cannot initiate movement. It\'s not your turn');
            }else{
                if (_mov.listValidMovements(_state.pieces,_position,_state.currentTurn).length>0){
                    _state.movement.origin = _position;
                        this.setState(_state,()=>{
                        this.addMessage('Movement initiated');
                    });
                }else{
                    this.addMessage('There are no possible movements for this piece');
                }
            }
        }else{
            if (_state.movement.origin.x===_position.x && _state.movement.origin.y===_position.y) {
                _state.movement.origin={};
                this.setState(_state,()=>{   
                    this.addMessage('Movement aborted');
                }); 
            }else{
                _state.movement.destiny = _position;
                this.setState(_state,()=>{
                    this.addMessage('Movement finalized');
                    this.movePiece();
                });
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
            _movement.killOponent(_state.pieces,_state.movement.origin,_state.movement.destiny,_state.currentTurn);
            destinyPiece = _state.pieces[_state.movement.origin.x][_state.movement.origin.y];
            _state.pieces[_state.movement.origin.x][_state.movement.origin.y] = originPiece;
            _state.pieces[_state.movement.destiny.x][_state.movement.destiny.y] = destinyPiece;
            if (this.isEndGame()) {
                this.props.alert.show(`Game end! ${this.state.currentTurn} won!`);
            }
            this.changeTurn(_state,_state.currentTurn);
            _state.movement.origin = {};
            _state.movement.destiny = {};
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
                    <button onClick={()=> {this.setState(this.state2)}}>teste</button>
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
                        <div onClick={()=> this.setMovement(0,2)} id="1C" className="BlackHouse">
                            <div className={this.state.pieces[0][2].color}/>
                        </div>
                        <div id="1D" className="WhiteHouse">
                            <div className={this.state.pieces[0][3].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(0,4)} id="1E" className="BlackHouse">
                            <div className={this.state.pieces[0][4].color}/>
                        </div>
                        <div id="1F" className="WhiteHouse">
                            <div className={this.state.pieces[0][5].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(0,6)} id="1G" className="BlackHouse">
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
                        <div onClick={()=> this.setMovement(1,1)} id="2B" className="BlackHouse">
                            <div className={this.state.pieces[1][1].color}/>
                        </div>
                        <div id="2C" className="WhiteHouse">
                            <div className={this.state.pieces[1][2].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(1,3)} id="2D" className="BlackHouse">
                            <div className={this.state.pieces[1][3].color}/>
                        </div>
                        <div id="2E" className="WhiteHouse">
                            <div className={this.state.pieces[1][4].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(1,5)} id="2F" className="BlackHouse">
                            <div className={this.state.pieces[1][5].color}/>
                        </div>
                        <div id="2G" className="WhiteHouse">
                            <div className={this.state.pieces[1][6].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(1,7)} id="2H" className="BlackHouse">
                            <div className={this.state.pieces[1][7].color}/>
                        </div>
                    </div>
                    <div className="BoardRow">
                        <div onClick={()=> this.setMovement(2,0)} id="3A" className="BlackHouse">
                            <div className={this.state.pieces[2][0].color}/>
                        </div>
                        <div id="3B" className="WhiteHouse">
                            <div className={this.state.pieces[2][1].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(2,2)} id="3C" className="BlackHouse">
                            <div className={this.state.pieces[2][2].color}/>
                        </div>
                        <div id="3D" className="WhiteHouse">
                            <div className={this.state.pieces[2][3].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(2,4)} id="3E" className="BlackHouse">
                            <div className={this.state.pieces[2][4].color}/>
                        </div>
                        <div id="3F" className="WhiteHouse">
                            <div className={this.state.pieces[2][5].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(2,6)} id="3G" className="BlackHouse">
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
                        <div onClick={()=> this.setMovement(3,1)} id="4B" className="BlackHouse">
                            <div className={this.state.pieces[3][1].color}/>
                        </div>
                        <div id="4C" className="WhiteHouse">
                            <div className={this.state.pieces[3][2].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(3,3)} id="4D" className="BlackHouse">
                            <div className={this.state.pieces[3][3].color}/>
                        </div>
                        <div id="4E" className="WhiteHouse">
                            <div className={this.state.pieces[3][4].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(3,5)} id="4F" className="BlackHouse">
                            <div className={this.state.pieces[3][5].color}/>
                        </div>
                        <div id="4G" className="WhiteHouse">
                            <div className={this.state.pieces[3][6].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(3,7)} id="4H" className="BlackHouse">
                            <div className={this.state.pieces[3][7].color}/>
                        </div>
                    </div>
                    <div className="BoardRow">
                        <div onClick={()=> this.setMovement(4,0)} id="5A" className="BlackHouse">
                            <div className={this.state.pieces[4][0].color}/>
                        </div>
                        <div id="5B" className="WhiteHouse">
                            <div className={this.state.pieces[4][1].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(4,2)} id="5C" className="BlackHouse">
                            <div className={this.state.pieces[4][2].color}/>
                        </div>
                        <div id="5D" className="WhiteHouse">
                            <div className={this.state.pieces[4][3].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(4,4)} id="5E" className="BlackHouse">
                            <div className={this.state.pieces[4][4].color}/>
                        </div>
                        <div id="5F" className="WhiteHouse">
                            <div className={this.state.pieces[4][5].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(4,6)}  id="5G" className="BlackHouse">
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
                        <div onClick={()=> this.setMovement(5,1)}  id="6B" className="BlackHouse">
                            <div className={this.state.pieces[5][1].color}/>
                        </div>
                        <div id="6C" className="WhiteHouse">
                            <div className={this.state.pieces[5][2].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(5,3)} id="6D" className="BlackHouse">
                            <div className={this.state.pieces[5][3].color}/>
                        </div>
                        <div id="6E" className="WhiteHouse">
                            <div className={this.state.pieces[5][4].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(5,5)} id="6F" className="BlackHouse">
                            <div className={this.state.pieces[5][5].color}/>
                        </div>
                        <div id="6G" className="WhiteHouse">
                            <div className={this.state.pieces[5][6].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(5,7)} id="6H" className="BlackHouse">
                            <div className={this.state.pieces[5][7].color}/>
                        </div>
                    </div>
                    <div className="BoardRow">
                        <div onClick={()=> this.setMovement(6,0)} id="7A" className="BlackHouse">
                            <div className={this.state.pieces[6][0].color}/>
                        </div>
                        <div id="7B" className="WhiteHouse">
                            <div className={this.state.pieces[6][1].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(6,2)} id="7C" className="BlackHouse">
                            <div className={this.state.pieces[6][2].color}/>
                        </div>
                        <div id="7D" className="WhiteHouse">
                            <div className={this.state.pieces[6][3].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(6,4)} id="7E" className="BlackHouse">
                            <div className={this.state.pieces[6][4].color}/>
                        </div>
                        <div id="7F" className="WhiteHouse">
                            <div className={this.state.pieces[6][5].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(6,6)} id="7G" className="BlackHouse">
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
                        <div onClick={()=> this.setMovement(7,1)} id="8B" className="BlackHouse">
                            <div className={this.state.pieces[7][1].color}/>
                        </div>
                        <div id="8C" className="WhiteHouse">
                            <div className={this.state.pieces[7][2].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(7,3)} id="8D" className="BlackHouse">
                            <div className={this.state.pieces[7][3].color}/>
                        </div>
                        <div id="8E" className="WhiteHouse">
                            <div className={this.state.pieces[7][4].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(7,5)} id="7F" className="BlackHouse">
                            <div className={this.state.pieces[7][5].color}/>
                        </div>
                        <div id="7G" className="WhiteHouse">
                            <div className={this.state.pieces[7][6].color}/>
                        </div>
                        <div onClick={()=> this.setMovement(7,7)} id="7H" className="BlackHouse">
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

