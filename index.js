import React from 'react';
import ReactDOM from 'react-dom/client';

function Sample()
{
    return(
        
        <div>
            <label>Name</label>
            <input type="text" placeholder="Enter yur name"></input>
            <br/> <br/>
            <label>Password</label>
            <input type="password" placeholder="Enter the passord"></input>
            <br/><br/>
        
            <button>submit</button>
            
        </div>
    )
}
const r1= ReactDOM.createRoot(document.getElementById("root"))
r1.render(<Sample/>)

......................................[  1  ]....................................................


Basic Rendering

const Sample=()=>{
    return(
        <div>
            <h1>my first react app</h1>
            <p>welcme to you</p>
        </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)

...........................................[  2   ]..............................................


const App=()=>{
    const username="manju"
    const password="12345"

    return(
        <div>
            <h1>my first react app.</h1>
            <h2>to show my user name is {username} and password is {password} </h2>
            <p>{new Date().toLocaleDateString()}</p>
            <p>this is react page</p>
            <label>username</label>
            <input type="text" placeholder="Enter your name" />
            <br></br>
            <label>password</label>
            <input type="password" placeholder='enter the pasword'></input>
            <br></br>
            <button>submit</button>
        </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)

.........................................[  3  ].........................................

const myname1=<h1>welcome</h1>
const myname2=<p>React is a javascript library for building user interface</p>
const myname3=<label>username</label>
const myname4=<input type="text" placeholder='Enter your name'/>
const myname5=<label>password</label>
const myname6=<input type="password" placeholder='Enter your password'/>
const myname7=<button>submit</button>
const myname8=<div>
    <h1>My first react app</h1>
    <p>{new Date().toLocaleTimeString()}</p>
    {myname1}
    {myname2}
    <br/>
    {myname3}
    {myname4}
    <br/>
    {myname5}
    {myname6}
    <br/>
    {myname7}
    
</div>
const r2=ReactDOM.createRoot(document.getElementById('root'));
r2.render(myname8)

...........................................[  4  ]........................................................

react list
const App=()=>{
    return(
        <div>
            <h1>welcome</h1>
            <ul>
                <li>one</li>
                <li>two</li>
                <li>three</li>
            </ul>
        </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)

.............................................[  5  ].................................................

Fragment tag

const App=()=>{
    return(
        <>
        <h1>welcome</h1>
        <h2>welcome</h2>
        </>
    )
}
const r1= ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)

=============================================[  6  ]==================================================

import './index.css'
const App=()=>{
    return(
        <div className='container'>
            <div className='one'>
                <h3>hello</h3>
                <h4>nice to meet you</h4>

            </div>
            <h1>welcome</h1>
            <h2>one</h2>
            <form>
                <input type="button" value="submit" className="btn-btn-dark"/>
            </form>

        </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)

=================================================[  7  ]=================================================


Login Form
import './index.css'

const App=()=>{
    return(
        <div className='container'>
            <div className='box'>
                <h1>Login</h1>
                <form>
                    <div className='inputbox'>
                      <label>Name :</label>
                      <hr></hr><br/>
                       <label>Password:</label>
                      <hr></hr>
                    </div>
                    <br/>
                    <div className='forgot'>
                        <label><input type="checkbox"/> Remember me</label>
                        <a href='#'>forgot Password</a>
                    </div> <br/>
                    <button type='submit' className='btn'  >Login</button><br/>
                    <div className='register'>
                        <p> Dont't have an accound ? <a href='#'>Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)

=======================================[  8  ]===============================================

const x=11
let text=""
if(x>10){
    text='world'
}
else if(x==10){
    text="equal"
}
else{
    text="less"
}
const Myelem=()=>{
    return(
        <div>
            <h1>{text}</h1>
        </div>
    )
}
const r2=ReactDOM.createRoot(document.getElementById('root'))
r2.render(<Myelem/>)

// // ==============bb==================[  9  ]====================================================
// class component
class Sample extends React.Component
{
    render()
    {
        return(
            <div><h1>Welcome</h1></div>
        )
    }
}
const r3=ReactDOM.createRoot(document.getElementById('root'))
r3.render(<Sample/>)
// // ===================================[  10  ]============================================================

// function component
// function Sample(props)
// {
//     return(
//         <div>
//             <h1>hello {props.name}</h1>
//             <h2>hello{props.age}</h2>
//         </div>
//     )
// }
// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<Sample name="priya" age="20"/>)

// ======================================[  11  ]==============================================

// component in component
// program 1

// function App1(){
//     return(
//         <div>
//             <h1>hello</h1>
//         </div>
//     )
// }
// function App2(){
//     return(
//         <div>
//             <App1/>
//             <h3>welcome</h3>
//         </div>
//     )
// }
// const r2=ReactDOM.createRoot(document.getElementById('root'))
// r2.render(<App2/>)

// =================================[  12  ]===========================================
// program 2

// function Tree(){
//     return(
//         <div>
//             <center>
//             <a href=''>Home</a>&nbsp;&nbsp;&nbsp;
//             <a href=''>Product</a>&nbsp;&nbsp;&nbsp;
//             <a href=''>about</a>&nbsp;&nbsp;&nbsp;
//             <a href=''>contact</a>&nbsp;&nbsp;&nbsp;

//             </center>
            

//         </div>
//     )
// }
// function Tree1(){
//     return(
//         <div>
//             <center>
//             <Tree/> <br/>
//             <h1>This is a navbar</h1>
//             </center>
            
//         </div>
//     )
// }
// const r4=ReactDOM.createRoot(document.getElementById('root'))
// r4.render(<Tree1/>)
// ==================================[  13  ]=============================================

// import and export

// import Branch from './App.js'

// const r5=ReactDOM.createRoot(document.getElementById('root'))
// r5.render(<Branch/>)

// ====================================[  14  ]=============================================
import Navbar from './App.js'
const r5=ReactDOM.createRoot(document.getElementById('root'))
r5.render(<Navbar/>)
















