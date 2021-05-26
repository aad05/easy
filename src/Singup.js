import React, { Component } from 'react'
import './Loginstyle.css'

export default class Singup extends Component {
    render() {
        return (
                        <div className="header">
                            <div className="header-top">
                                {/* Textstyle and positioning Section 1 */}
                                <div className="opener-text">
                                <h3 className="text-style">
                                    Welcome
                                </h3>
                                <p className="p-style">Sing up into your account</p>
                                </div>
                                {/* Section 2 */}
                                <div className="login-box">
                                    <h3 className="bg-color text-style">Sing Up</h3>
                                    <div className="input-box">
                                    <div className="input">
                                            <input className="input-style" type="text" placeholder="Full Name" />
                                            <i class= "icon-style fa fa-user"></i>
                                        </div>
                                        <div className="input">
                                            <input className="input-style" type="text" placeholder="E-mail" />
                                            <i class="icon-style fa fa-envelope"></i>
                                        </div>
                                        <div className="input">
                                            <input className="input-style" type="text" placeholder="Password" />
                                            <i class="icon-style fa fa-lock-alt"></i>
                                        </div>
                                    </div>
                                    <button className="button-style">SING UP</button>
                                    <div className="img-style img-left">
                                    <img className="img-style"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL-0C7Cg5RrtmqDqRgpmPkRjpf0V3qHgcqog&usqp=CAU" />
                                    <div className="camera-style">
                                    <i class="icon-style icon-style1 fa fa-camera"></i>
                                    </div>
                                    </div>
                                    
                                </div>
                               <p className="page-bottom"> <b>Already have an account yet?</b> <a href="" >{this.props.link}</a></p>
                            </div>
                        </div>
        )
    }
}
