import React, {Component} from 'react';
import { connect } from 'react-redux';
import "../assets/styles/Header.scss";

class Head extends Component{
    render(){
        return(
        <div class="header">
            <a href="/" class="logo">CompanyLogo</a>
            <ul>
                <li><a class="active" href="#home">Home</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
            </ul>
            
            
            
        </div>) 
    }
}


const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps)(Head);