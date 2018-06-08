import React, { Component } from 'react';
import classes from './Board.css';


class Board extends Component {
    state={
        pieces:[['BlackPiece','','BlackPiece','','BlackPiece','','BlackPiece',''],
                ['','BlackPiece','','BlackPiece','','BlackPiece','','BlackPiece'],
                ['BlackPiece','','BlackPiece','','BlackPiece','','BlackPiece',''],
                ['','','','','','','',''],
                ['','','','','','','',''],
                ['','WhitePiece','','WhitePiece','','WhitePiece','','WhitePiece'],
                ['WhitePiece','','WhitePiece','','WhitePiece','','WhitePiece',''],
                ['','WhitePiece','','WhitePiece','','WhitePiece','','WhitePiece']]
    };
    setBoard = () =>{
        
    }
    render() {
        return (
            <div>
                <button onClick={this.setBoard}>Start Game</button>
                <div className="Board">
                    <div className="BoardRow">
                        <div id="1A" className="BlackHouse">
                            <div className={this.state.pieces[0][0]}/>
                        </div>
                        <div id="1B" className="WhiteHouse">
                            <div className={this.state.pieces[0][1]}/>
                        </div>
                        <div id="1C" className="BlackHouse">
                            <div className={this.state.pieces[0][2]}/>
                        </div>
                        <div id="1D" className="WhiteHouse">
                            <div className={this.state.pieces[0][3]}/>
                        </div>
                        <div id="1E" className="BlackHouse">
                            <div className={this.state.pieces[0][4]}/>
                        </div>
                        <div id="1F" className="WhiteHouse">
                            <div className={this.state.pieces[0][5]}/>
                        </div>
                        <div id="1G" className="BlackHouse">
                            <div className={this.state.pieces[0][6]}/>
                        </div>
                        <div id="1H" className="WhiteHouse">
                            <div className={this.state.pieces[0][7]}/>
                        </div>
                    </div>
                    <div className="BoardRow">
                        <div id="2A" className="WhiteHouse">
                            <div className={this.state.pieces[1][0]}/>
                        </div>
                        <div id="2B" className="BlackHouse">
                            <div className={this.state.pieces[1][1]}/>
                        </div>
                        <div id="2C" className="WhiteHouse">
                            <div className={this.state.pieces[1][2]}/>
                        </div>
                        <div id="2D" className="BlackHouse">
                            <div className={this.state.pieces[1][3]}/>
                        </div>
                        <div id="2E" className="WhiteHouse">
                            <div className={this.state.pieces[1][4]}/>
                        </div>
                        <div id="2F" className="BlackHouse">
                            <div className={this.state.pieces[1][5]}/>
                        </div>
                        <div id="2G" className="WhiteHouse">
                            <div className={this.state.pieces[1][6]}/>
                        </div>
                        <div id="2H" className="BlackHouse">
                            <div className={this.state.pieces[1][7]}/>
                        </div>
                    </div>
                    <div className="BoardRow">
                        <div id="3A" className="BlackHouse">
                            <div className={this.state.pieces[2][0]}/>
                        </div>
                        <div id="3B" className="WhiteHouse">
                            <div className={this.state.pieces[2][1]}/>
                        </div>
                        <div id="3C" className="BlackHouse">
                            <div className={this.state.pieces[2][2]}/>
                        </div>
                        <div id="3D" className="WhiteHouse">
                            <div className={this.state.pieces[2][3]}/>
                        </div>
                        <div id="3E" className="BlackHouse">
                            <div className={this.state.pieces[2][4]}/>
                        </div>
                        <div id="3F" className="WhiteHouse">
                            <div className={this.state.pieces[2][5]}/>
                        </div>
                        <div id="3G" className="BlackHouse">
                            <div className={this.state.pieces[2][6]}/>
                        </div>
                        <div id="3H" className="WhiteHouse">
                            <div className={this.state.pieces[2][7]}/>
                        </div>
                    </div>
                    <div className="BoardRow">
                        <div id="4A" className="WhiteHouse">
                            <div className={this.state.pieces[3][0]}/>
                        </div>
                        <div id="4B" className="BlackHouse">
                            <div className={this.state.pieces[3][1]}/>
                        </div>
                        <div id="4C" className="WhiteHouse">
                            <div className={this.state.pieces[3][2]}/>
                        </div>
                        <div id="4D" className="BlackHouse">
                            <div className={this.state.pieces[3][3]}/>
                        </div>
                        <div id="4E" className="WhiteHouse">
                            <div className={this.state.pieces[3][4]}/>
                        </div>
                        <div id="4F" className="BlackHouse">
                            <div className={this.state.pieces[3][5]}/>
                        </div>
                        <div id="4G" className="WhiteHouse">
                            <div className={this.state.pieces[3][6]}/>
                        </div>
                        <div id="4H" className="BlackHouse">
                            <div className={this.state.pieces[3][7]}/>
                        </div>
                    </div>
                    <div className="BoardRow">
                        <div id="5A" className="BlackHouse">
                            <div className={this.state.pieces[4][0]}/>
                        </div>
                        <div id="5B" className="WhiteHouse">
                            <div className={this.state.pieces[4][1]}/>
                        </div>
                        <div id="5C" className="BlackHouse">
                            <div className={this.state.pieces[4][2]}/>
                        </div>
                        <div id="5D" className="WhiteHouse">
                            <div className={this.state.pieces[4][3]}/>
                        </div>
                        <div id="5E" className="BlackHouse">
                            <div className={this.state.pieces[4][4]}/>
                        </div>
                        <div id="5F" className="WhiteHouse">
                            <div className={this.state.pieces[4][5]}/>
                        </div>
                        <div id="5G" className="BlackHouse">
                            <div className={this.state.pieces[4][6]}/>
                        </div>
                        <div id="5H" className="WhiteHouse">
                            <div className={this.state.pieces[4][7]}/>
                        </div>   
                    </div>
                    <div className="BoardRow">
                        <div id="6A" className="WhiteHouse">
                            <div className={this.state.pieces[5][0]}/>
                        </div>
                        <div id="6B" className="BlackHouse">
                            <div className={this.state.pieces[5][1]}/>
                        </div>
                        <div id="6C" className="WhiteHouse">
                            <div className={this.state.pieces[5][2]}/>
                        </div>
                        <div id="6D" className="BlackHouse">
                            <div className={this.state.pieces[5][3]}/>
                        </div>
                        <div id="6E" className="WhiteHouse">
                            <div className={this.state.pieces[5][4]}/>
                        </div>
                        <div id="6F" className="BlackHouse">
                            <div className={this.state.pieces[5][5]}/>
                        </div>
                        <div id="6G" className="WhiteHouse">
                            <div className={this.state.pieces[5][6]}/>
                        </div>
                        <div id="6H" className="BlackHouse">
                            <div className={this.state.pieces[5][7]}/>
                        </div>
                    </div>
                    <div className="BoardRow">
                        <div id="7A" className="BlackHouse">
                            <div className={this.state.pieces[6][0]}/>
                        </div>
                        <div id="7B" className="WhiteHouse">
                            <div className={this.state.pieces[6][1]}/>
                        </div>
                        <div id="7C" className="BlackHouse">
                            <div className={this.state.pieces[6][2]}/>
                        </div>
                        <div id="7D" className="WhiteHouse">
                            <div className={this.state.pieces[6][3]}/>
                        </div>
                        <div id="7E" className="BlackHouse">
                            <div className={this.state.pieces[6][4]}/>
                        </div>
                        <div id="7F" className="WhiteHouse">
                            <div className={this.state.pieces[6][5]}/>
                        </div>
                        <div id="7G" className="BlackHouse">
                            <div className={this.state.pieces[6][6]}/>
                        </div>
                        <div id="7H" className="WhiteHouse">
                            <div className={this.state.pieces[6][7]}/>
                        </div>
                    </div>
                    <div className="BoardRow">
                        <div id="8A" className="WhiteHouse">
                            <div className={this.state.pieces[7][0]}/>
                        </div>
                        <div id="8B" className="BlackHouse">
                            <div className={this.state.pieces[7][1]}/>
                        </div>
                        <div id="8C" className="WhiteHouse">
                            <div className={this.state.pieces[7][2]}/>
                        </div>
                        <div id="8D" className="BlackHouse">
                            <div className={this.state.pieces[7][3]}/>
                        </div>
                        <div id="8E" className="WhiteHouse">
                            <div className={this.state.pieces[7][4]}/>
                        </div>
                        <div id="7F" className="BlackHouse">
                            <div className={this.state.pieces[7][5]}/>
                        </div>
                        <div id="7G" className="WhiteHouse">
                            <div className={this.state.pieces[7][6]}/>
                        </div>
                        <div id="7H" className="BlackHouse">
                            <div className={this.state.pieces[7][7]}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Board;

