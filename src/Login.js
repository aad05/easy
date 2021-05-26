import React, { Component } from 'react'
import './Loginstyle.css'
import Singup from './Singup'

export default class Login extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-top">
                    {/* Textstyle and positioning Section 1 */}
                    <div className="opener-text">
                    <h3 className="text-style">
                        Welcome Back Asadbek
                    </h3>
                    <p className="p-style">Login Back into your account</p>
                    </div>
                    {/* Section 2 */}
                    <div className="login-box">
                        <h3 className="bg-color text-style">Log In</h3>
                        <div className="input-box">
                            <div className="input">
                                <input className="input-style" type="text" placeholder="E-mail" />
                                <i class="icon-style fa fa-envelope"></i>
                            </div>
                            <div className="input">
                                <input className="input-style" type="text" placeholder="Password" />
                                <i class="icon-style  fa fa-lock-alt"></i>
                            </div>
                        </div>
                        <p className="left-p">Forgot Password?</p>
                        <button className="button-style">LOGIN</button>
                        <img className="img-style"  src="https://www.justheadshots.photo/wp-content/uploads/2020/04/white-background-headshots-083.jpg" />
                    </div>
                   <p className="page-bottom"> <b>Don't have an account yet?</b> <a href="" >{this.props.link}</a></p>
                </div>
            </div>
        )
    }
}
