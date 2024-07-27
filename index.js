import React from 'react';
import ReactDOM from 'react-dom/client';

// function Sample()
// {
//     return(
        
//         <div>
//             <label>Name</label>
//             <input type="text" placeholder="Enter yur name"></input>
//             <br/> <br/>
//             <label>Password</label>
//             <input type="password" placeholder="Enter the passord"></input>
//             <br/><br/>
        
//             <button>submit</button>
            
//         </div>
//     )
// }
// const r1= ReactDOM.createRoot(document.getElementById("root"))
// r1.render(<Sample/>)

// ................................................................................................


// Basic Rendering

// const Sample=()=>{
//     return(
//         <div>
//             <h1>my first react app</h1>
//             <p>welcme to you</p>
//         </div>
//     )
// }
// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<Sample/>)

// ....................................................................................................


// const App=()=>{
//     const username="manju"
//     const password="12345"

//     return(
//         <div>
//             <h1>my first react app.</h1>
//             <h2>to show my user name is {username} and password is {password} </h2>
//             <p>{new Date().toLocaleDateString()}</p>
//             <p>this is react page</p>
//             <label>username</label>
//             <input type="text" placeholder="Enter your name" />
//             <br></br>
//             <label>password</label>
//             <input type="password" placeholder='enter the pasword'></input>
//             <br></br>
//             <button>submit</button>
//         </div>
//     )
// }
// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<App/>)

// ....................................................................................

// const myname1=<h1>welcome</h1>
// const myname2=<p>React is a javascript library for building user interface</p>
// const myname3=<label>username</label>
// const myname4=<input type="text" placeholder='Enter your name'/>
// const myname5=<label>password</label>
// const myname6=<input type="password" placeholder='Enter your password'/>
// const myname7=<button>submit</button>
// const myname8=<div>
//     <h1>My first react app</h1>
//     <p>{new Date().toLocaleTimeString()}</p>
//     {myname1}
//     {myname2}
//     <br/>
//     {myname3}
//     {myname4}
//     <br/>
//     {myname5}
//     {myname6}
//     <br/>
//     {myname7}
    
// </div>
// const r2=ReactDOM.createRoot(document.getElementById('root'));
// r2.render(myname8)

// ...................................................................................................

// react list
// const App=()=>{
//     return(
//         <div>
//             <h1>welcome</h1>
//             <ul>
//                 <li>one</li>
//                 <li>two</li>
//                 <li>three</li>
//             </ul>
//         </div>
//     )
// }
// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<App/>)

// ..............................................................................................

// Fragment tag

// const App=()=>{
//     return(
//         <>
//         <h1>welcome</h1>
//         <h2>welcome</h2>
//         </>
//     )
// }
// const r1= ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<App/>)

// ================================================================================

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