import React, { Component } from 'react';
//import PROJECT from './data/projects.js';



class Project extends Component{
    render(){
/*
        const {title,image,description,link} = this.props.project;
        return(
            <div style={{display :'inline-block' , width :300, margin:10}}>
                <h3>{title}</h3>
                <img src ={image} alt ='profile' style={{width : 100, height :120}}/>
                <p>{description} </p>
                <a href ={link}>{link}</a>
            </div>
        )*/
        

 const reqSvgs = require.context ( '../assets', true, /\.png$/ )
const paths = reqSvgs.keys ()
console.log(paths);

const svgs = paths.map( path => reqSvgs ( path ) )
console.log(svgs);
    }
}


/*class Projectss extends Component{
    render(){
        return(
            <div>
                <h2>Highlighted Projects</h2>
        
            <div>
                {
                  PROJECT.map(PROJECTS => {
                      return (
                          <Project key={PROJECTS.id} project ={PROJECTS}/>
                      );
                  })  
                }

            </div>
            </div>
        )
    }
}*/

export default Project;
