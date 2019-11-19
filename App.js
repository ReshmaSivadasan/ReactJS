import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles.js';
import Profile from './assets/Profile.jpg'

class App extends Component{

    state = { displayBio : false};
    
 toggleDisplayBio = () =>{
    this.setState({displayBio : !this.state.displayBio});
}

render(){
    return(
         <div>
             <img src ={Profile} alt ='profile' className = "profile"/>
           <h1>Hello!</h1>
           <p>This is my first React Portfolio Page</p>
          { 
              this.state.displayBio ? (
               <div>
                 <p>displays when the readMore button is clicked</p>
                 <button onClick = {this.toggleDisplayBio}> show less</button>
               </div>
          ): (
              <div>
                  <button onClick = {this.toggleDisplayBio}>Read More </button>
              </div>
          )
          }

          <hr />
          <Projects />

         </div>
    )
 }
}

export default App;
