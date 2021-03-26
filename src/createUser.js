import React,{useContext,useState} from 'react';
import UserContext from './userContext';
import {PostUserData} from './api';


function CreateUser() {
    const [userName,setUserName] = useState("");
    const [userEmail,setUserEmail] = useState("");

    let userData = {
        name : userName , email : userEmail
    }
    // let users = useContext(UserContext);
    
    return (
        <>
        <form onSubmit={async (e)=>{
            e.preventDefault();
            console.log(userData);
            //users.setUserList([...users.userList,userData]);

            await PostUserData(userData);

            setUserName("");
            setUserEmail("");

        }}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <lable >User Name : </lable>
                    <input id="name" className="form-control" type="text" value={userName} onChange={(e) => {
                        setUserName(e.target.value)
                    }}>
                    </input>
                </div>
                <div className="col-lg-6">
                    <lable >Email : </lable>
                    <input id="email" className="form-control" type="text" value={userEmail} onChange={(e) => {
                        setUserEmail(e.target.value)
                    }}>
                    </input>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <button className="form-contro btn btn-primary">Add User</button>
                </div>
            </div>
        </div>
        </form>
        </>
    );
}

export default CreateUser;