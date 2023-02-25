import React, {useState} from 'react'

export default function Navbar() {
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
  )
}
