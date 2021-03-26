import React,{useContext,useEffect,useState} from 'react';
import { EditUserById, GetUserById } from './api';
import {Link} from 'react-router-dom'


function EditUser(props) {
    console.log(props);

    const [userName,setUserName] = useState("")
    const [userEmail,setUserEmail] = useState("");
    let userData = {
        name : userName,
        email : userEmail
    }
    useEffect(async () => {
        let user = await GetUserById(props.match.params.id);
        setUserName(user.data.name);
        setUserEmail(user.data.email);
    },[]);

    return (

        <>

        <form onSubmit={async (e)=>{
            e.preventDefault();
            console.log(userData);
            //users.setUserList([...users.userList,userData]);

            await EditUserById(props.match.params.id,userData);

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
                    <button className="form-contro btn btn-primary">Update User</button>
                </div>
            </div>
        </div>
        </form>
        </>
    )
}

export default EditUser;

































// let id = props.match.params.id;

//     let users = useContext(UserContext);


//     console.log("Users list ===",users.userList)
//     let editableUser = users.userList.find((element) => {
//         return element.userName === id
//     })

//     console.log("editableUser",editableUser);
//     let uName = editableUser.userName;
//     let uEmail = editableUser.userEmail;

//     console.log(uName,uEmail);

//     const [userName,setUserName] = useState(uName);
//     const [userEmail,setUserEmail] = useState(uEmail);

//     let userData = {
//         userName , userEmail
//     }
    
//     console.log(userData);

//     let newUserList = users.userList.map((element) => {
//         return id === element.userName ? element = userData : element ;
//     });
//     console.log("new users ----",newUserList);