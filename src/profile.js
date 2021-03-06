import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import UserContext from './userContext';

function Profile() {
    let users = useContext(UserContext);
    console.log(users);
    return (
        <>

            <header className="header">
                <div className="container">
                    <div className="teacher-name">
                        <div className="row">
                            <div className="col-sm-9">
                                <h2><strong>{users.userName}</strong></h2>
                            </div>
                            <div className="col-sm-3">
                                <div className="button pull-right">
                                    <Link to="/edit-user/1" className="btn btn-outline-success btn-sm">Edit Profile <i className="fa fa-pencil"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row" style={{ marginTop: "20px" }}>
                        <div className="col-sm-3">
                            <a href="#"> <img className="rounded-circle" src="//images.weserv.nl/?url=i.imgur.com/Md9jS0Ib.jpg" alt="Rick" /></a>
                        </div>

                        <div className="col-sm-6">
                            <h5> Associate Professor, <small>Dept. of Alien Agriculture, Jaarvlar-3 University</small></h5>
                            <p>PhD on Molecular Shwanky Physics</p>
                            <p>Address: 123 Cuba str Tampa, Fl, Earth 137</p>
                        </div>

                        <div className="col-sm-3 text-center social">
                            <span className="number">Email:<strong>{users.userEmail}</strong></span>
                            <div className="button-email">
                                <a href="mailto:arick@yahoo.com" className="btn btn-outline-success btn-block"><i className="fa fa-envelope-o"></i> Send Email</a>
                            </div>
                            <div className="social-icons">
                                <a href="#">
                                    <span className="fa-stack">
                                        <i className="fa fa-circle fa-stack-2x" ></i>
                                        <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                                    </span></a>
                                <a href="#">
                                    <span className="fa-stack">
                                        <i className="fa fa-circle fa-stack-2x"></i>
                                        <i className="fa fa-google-plus fa-stack-1x fa-inverse"></i>
                                    </span></a>
                                <a href="#">
                                    <span className="fa-stack">
                                        <i className="fa fa-circle fa-stack-2x"></i>
                                        <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                                    </span></a>
                                <a href="#">
                                    <span className="fa-stack">
                                        <i className="fa fa-circle fa-stack-2x"></i>
                                        <i className="fa fa-slideshare fa-stack-1x fa-inverse"></i>
                                    </span></a>

                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container">

                <div className="row">
                    <div className="col-sm-12">
                        <div className="card card-block text-xs-left">
                            <h5><i className="fa fa-user fa-fw"></i>Biography</h5>

                            <p>Rick Sanchez C-137 is the father of Beth Smith, and the grandfather of Morty and Summer Smith. Aged 60 years old, he is said to have been away from the family for around fourteen years prior to the events of the show's first episode, "Pilot". He frequently travels on adventures through space and other planets and dimensions with his grandson Morty.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card card-block">
                            <h5><i className="fa fa-rocket fa-fw"></i>Interests</h5>
                            <ul className="list-group" style={{ marginTop: "15px", marginBottom: "15px" }}>
                                <li className="list-group-item">Cloud & Parallel Computing</li>
                                <li className="list-group-item">Big Data Analysis and Management</li>
                                <li className="list-group-item">High-performance and Low-Power Real-Time Systems</li>
                                <li className="list-group-item">Mobile Embedded Systems and Network Security</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;