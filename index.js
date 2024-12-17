import React, { Component } from 'react';
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

// ......................................[  1  ]....................................................


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

// ...........................................[  2   ]..............................................


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

// .........................................[  3  ].........................................

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

// ...........................................[  4  ]........................................................

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

// .............................................[  5  ].................................................

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

// =============================================[  6  ]==================================================

// import './index.css'
// const App=()=>{
//     return(
//         <div className='container'>
//             <div className='one'>
//                 <h3>hello</h3>
//                 <h4>nice to meet you</h4>

//             </div>
//             <h1>welcome</h1>
//             <h2>one</h2>
//             <form>
//                 <input type="button" value="submit" className="btn-btn-dark"/>
//             </form>

//         </div>
//     )
// }
// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<App/>)

// =================================================[  7  ]=================================================


// Login Form
// import './index.css'

// const App=()=>{
//     return(
//         <div className='container'>
//             <div className='box'>
//                 <h1>Login</h1>
//                 <form>
//                     <div className='inputbox'>
//                       <label>Name :</label>
//                       <hr></hr><br/>
//                        <label>Password:</label>
//                       <hr></hr>
//                     </div>
//                     <br/>
//                     <div className='forgot'>
//                         <label><input type="checkbox"/> Remember me</label>
//                         <a href='#'>forgot Password</a>
//                     </div> <br/>
//                     <button type='submit' className='btn'  >Login</button><br/>
//                     <div className='register'>
//                         <p> Dont't have an accound ? <a href='#'>Register</a></p>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }
// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<App/>)

// =======================================[  8  ]===============================================

// const x=11
// let text=""
// if(x>10){
//     text='world'
// }
// else if(x==10){
//     text="equal"
// }
// else{
//     text="less"
// }
// const Myelem=()=>{
//     return(
//         <div>
//             <h1>{text}</h1>
//         </div>
//     )
// }
// const r2=ReactDOM.createRoot(document.getElementById('root'))
// r2.render(<Myelem/>)

// // // ==============bb==================[  9  ]====================================================
// // class component
// class Sample extends React.Component
// {
//     render()
//     {
//         return(
//             <div><h1>Welcome</h1></div>
//         )
//     }
// }
// const r3=ReactDOM.createRoot(document.getElementById('root'))
// r3.render(<Sample/>)
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
//  import Navbar from './App.js'
//  const r5=ReactDOM.createRoot(document.getElementById('root'))
//  r5.render(<Navbar/>)

// ==================================[  15 ]=================================================

// constructor component

// class Sample extends React.Component
// {
//     constructor(){
//         super()
//         this.state={name:"rahul" ,
//             age:10}
//     }
//     render(){
//         return(
//             <div>
//                 <h1>{this.state.name}</h1>
//                 <h1>{this.state.age}</h1>
                

//             </div>
//         )
//     }
// }
// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<Sample/>)

// =====================[  16  ]======================================


// class Header extends Component
// {
//     text='welcome'
//     constructor(){
//         super();
//         this. state={f1:'blue'}
//     }
//     render()
//     {
//         return(
//             <div>
//                 <h1>{this.text}</h1>
//                 <h1>{this.state.f1}</h1>
//                 <h1 style={{color:this.state.f1}}>welcome</h1>
//             </div>

//         )
//     }
// }
// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<Header/>)
// ========================[ 17 ]===============================================


// changing the state object

// class Sample extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             emp: {
//                 name: "kavi",
//                 age: 20,
//                 city: "chennai"
//             },
//             showData: false
//         };
//     }

//     showData() {
//         this.setState({ showData: true });
//     }

//     hideData() {
//         this.setState({ showData: false });
//     }

//     render() {
//         let data;
//         if (this.state.showData==true) {
//             data = 
//                 <div>
//                     <b>name: </b> {this.state.emp.name}<br/> <b>age: </b> {this.state.emp.age} <br/><b>city: </b> {this.state.emp.city}<br/>
//                     <button onClick={this.hideData.bind(this)}>hideData</button>
//                 </div>
            
//         } else {
//             data = 
//                 <div>
//                     <button onClick={this.showData.bind(this)}>showData</button>
//                 </div>
            
//         }

//         return (
//             <div>
//                 <h1>welcome</h1>
//                 <h2>Employee Details</h2>
//                 {data}
//             </div>
//         );
//     }
// }

// const r1 = ReactDOM.createRoot(document.getElementById('root'));
// r1.render(<Sample />);

// ============================[  18  ]===============================================

// react Events

// function Football(){
//     const shoot=()=>{
//         alert("goal shooted")
//     }
//     return(
//         <div>
//             <button onClick={shoot}>shoot</button>
//         </div>
//     )
// }
// const r1 = ReactDOM.createRoot(document.getElementById('root'));
// r1.render(<Football/>);

// // ========================[  19  ]=========================================================

// function Football(){
//     const shoot=(a)=>{
//         alert(a)
//     }
//     return(
//         <div>
//             <button onClick={()=>shoot("goal shooted")}>shoot</button>
//         </div>
//     )
// }
// const r1 = ReactDOM.createRoot(document.getElementById('root'));
// r1.render(<Football/>);

// ==================================[  19  ]===============================================

// conditional rendering

// function Missedgoal()
// {
//     return<h1>MISSED</h1>
// }
// function Madegoal()
// {
//     return<h1>GOAL</h1>
// }
// function Goal(props){
//     const isGoal=props.isGoal;
//     if(isGoal)
//     {
//         return <Madegoal/>
//     }
//     else{
//         return  <Missedgoal/>
//     }
// }
// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<Goal isGoal={Math.random()>0.5}/>)
// ====================================[  20  ]=====================================================

// react list

// function Car(props)
// {
//     return<li>i am a {props.b1}</li>
// }
// function Garage()
// {
//     const Cars=["BMW","Audi","TVS"]
//     return(
//         <div>
//             <h1>Garage</h1>
//             <ul>
//                 {Cars.map((car)=> <Car b1={car}/>)}
//             </ul>
//         </div>
//     )
// }
// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<Garage/>)

// =================================[  21  ]=============================================

// getderivedstatefrompros
// class Header extends React.Component{
//     constructor(props)
//     {
//         super(props)
//         this.state={favcolor:"red"}
//     }
//     static getDerivedStateFromProps(props,state){
//         return {favcolor:props.favcolor}
//     }
//     render()
//     {
//         return(
//         <div>
//             <h1>my fav color is {this.state.favcolor}</h1>
//          </div>
//         )
//     }
// }

// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<Header favcolor="blue"/>)

// =========================[  22  ]===================================================================

// class Header extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={empname:"azar"};
//     }
//     static getDerivedStateFromProps(props,state){
//         return{empname:props.empname};
//     }
//     changeEmployee=()=>{
//         this.setState({empname:"mohamed"})
//     }
//     render(){
//         return(
//             <div>
//                 <h1>this is rener page{this.state.empname}</h1>
//                 <button type="submit" onClick={this.changeEmployee}>click</button>
//             </div>
//         )
//     }
// }
// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<Header empname="tech"/>)

// ======================================[  23  ]==================================================


// class Header extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={empname:"Menaga"};
//     }
//     static getDrivedStateFromProps(props,state){
//         return{empname:props.empname};
//     }
//     changeEmployee=()=>{
//         this.setState({empname:"Mohan"});
//     }
//     render(){
//         return(
//             <div>
//                 <h1>This is Render page{this.state.empname}</h1>
//                 <button type='submit' onClick={this.changeEmployee}>Click</button>
//             </div>
//         );
//     }
// }
// const r1=ReactDOM.createRoot(document.getElementById('root'));
// r1.render(<Header empname="tech"/>);

// ======================================[ 24 ]==========================================================

// componentdidmount
// class TimerComponent extends React.Component
// {
//     constructor(props)
//     {
//         super(props)
//         this.state={seconds:0}
//     };
// }
// componentDidMount()
// {
//     this.timerID=setInterval(
//         ()=>this.setState({seconds:this.state.seconds+1}),
//         1000
//     );

// }
// comonentWillUnmount()
// {
//     clearInterval(this.timerID)
// }
// render()
// {
//     return(
//         <div>
//                 <h1>timer component</h1>
//                 <h2>
//                     time elapsed {this.state.seconds}sec
//                 </h2>
//         </div>
//     );

// }

// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<TimerComponent/>)

// =================================[  25 ]================================================


// shouldidcomponentupdate

// class Header extends React.Component
// {
//     constructor(props)
//     {
//         super(props)
//         this.state={favcolor:'red'}
//     }
//     shouldComponentUpdate()
//     {
//         return true 
//     }
//     changecolor =()=> {
//         this.setState({favcolor:"blue"})
//     }
//     render(){
//         return(
//             <div>
//                 <h1>this is a Render page : {this.state.favcolor}</h1>
//                 <button type='submit' onClick={this.changecolor}>click</button>
//             </div>
//         )
//     }
// }
// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<Header/>)

// ================================[  26  ]===================================================

//react hooks 

// usestate
import { useState } from 'react';
function Counter(){
    const [count,setCount]=useState (10)
    const[name,setName]=useState ("manju")
    return(
        <div>
            <h1>Count:{count}</h1>
            <button type="submit" onClick={()=>setCount(count+1)}>click</button>
            <h1>name:{name}</h1>
            <button type="submit" onClick={()=>setName("bharathi")}>click</button>
            
        </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Counter/>)

// ==============================[  27  ]====================================================

// useeffect
















    

                                                            
















