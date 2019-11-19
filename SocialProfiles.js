import React, { Component } from 'react';
import ICONS from './data/socialProjects.js'

class ICON extends Component{
    render(){
           const {image,link} = this.props.icon;

        return(
            <div style = {{display :'inline-block'}}>
                 
                 <a href ={link}>
                     <img src={image} alt = 'profile' style ={{width:35, height:35 }}/>
                 </a>
             
    </div>

        );
    }
}
class Profiles extends Component{
    render(){
        return(
            <div>
                <h2>Social profiles</h2>
            <div>
                {
                    ICONS.map(SPROFILES=>{
                        return(
                            <ICON key={SPROFILES.id} icon={SPROFILES}/>
                        );
                    })
                }
            </div>
            </div>
        )
    }
}


export default Profiles;