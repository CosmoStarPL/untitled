import React, {Component} from 'react';
import {ReactComponent as Option} from "./iMages/option.svg";
import {ReactComponent as Home} from "./iMages/home.svg";
import Hom from "./Home"
import "./index.css"

class Sait extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btt:false,
            home: "h"
        }
    }
    render() {
        return (
            <div className="sait">
                <Option className="option"/>
                <Home className="home"/>
                <span onClick={()=>this.setState({home:"h",btt: false})} className="menu">Главная</span>
                {this.state.home==="h"? <Hom className='a' onClick={this.setState({btt:true})}/>: <span>error!</span>}
            </div>
        );
    }
}

export default Sait;