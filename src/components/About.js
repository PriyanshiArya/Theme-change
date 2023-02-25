import React, {useState} from 'react'

export default function About() {
    const [text, setText] = useState('Dark Mode')
    const [mystyle, setMstyle] = useState({
        backgroundColor : 'White',
        color : 'black'
    })
    const Colorchange = ()=>{
        if (mystyle.color === 'black'){
            setMstyle({ backgroundColor : 'black',
            color : 'white'}) 
            setText('Light Mode')

        }
        else{
            setMstyle({
                backgroundColor : 'white',
                color : 'black'
            })   
            setText('Dark Mode')      
        }
    }
    
  return (
    <div style={mystyle}>
         <div>
        <nav className="navbar bg-body-tertiary" style={mystyle}>
            <div className="container-fluid" style={mystyle}>
                <a className="navbar-brand" href='/' style={mystyle}>Navbar</a>
                <div className="form-check form-switch">
                    <input className="form-check-input" onClick={Colorchange} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">{text}</label>
                </div>
            </div>
        </nav>
    </div>
      <div className="container my-3" style={mystyle}>
        <h1>Hey Everyone!!</h1>
        
        <p className='my-3'>Chess is a board game between two players. It is sometimes called international
             chess or Western chess to distinguish it from related games, such as xiangqi 
             (Chinese chess) and shogi (Japanese chess). The current form of the game 
             emerged in Spain and the rest of Southern Europe during the second half of 
             the 15th century after evolving from chaturanga, a similar but much older 
             game of Indian origin. Today, chess is one of the world's most popular games,
            played by millions of people worldwide.</p>
            <p>Chess is an abstract strategy game and involves no hidden information. It is
                played on a chessboard with 64 squares arranged in an eight-by-eight grid.
                At the start, each player controls sixteen pieces: one king, one queen, 
              two rooks, two bishops, two knights, and eight pawns. The player 
              controlling the white pieces moves first, followed by the player 
              controlling the black pieces. The object of the game is to checkmate
               the opponent's king, whereby the king is under immediate attack(in "check") and there is no way for it to escape. There are also 
            several ways a game can end in a draw.</p>
            <p>Organized chess arose in the 19th century. Chess competition today is
                 governed internationally by FIDE (the International Chess Federation).
                  The first universally recognized World Chess Champion, Wilhelm Steinitz, 
                  claimed his title in 1886; Magnus Carlsen is the current World Champion. 
                  A huge body of chess theory has developed since the game's inception. 
                  Aspects of art are found in chess composition, and chess in its turn 
                  influenced Western culture and art, and has connections with 
                other fields such as mathematics, computer science, and psychology.</p>
            <p>Organized chess arose in the 19th century. Chess competition today is 
                governed internationally by FIDE (the International Chess Federation). 
                The first universally recognized World Chess Champion, Wilhelm Steinitz, 
                claimed his title in 1886; Magnus Carlsen is the current World Champion. 
                A huge body of chess theory has developed since the game's inception. 
                Aspects of art are found in chess composition, and chess in its turn 
                influenced Western culture and art, and has connections with other fields 
                such as mathematics, computer science, and psychology.</p>
                <p>The rules of chess are published by FIDE 
                    (Fédération Internationale des Échecs),
                     chess's international governing body, in its Handbook.[1]
                      Rules published by national governing bodies, 
                      or by unaffiliated chess organizations, commercial publishers,
                       etc., may differ in some details. FIDE's rules were most recently
                        revised in 2023.</p>
      </div>
    </div>
  )
}
