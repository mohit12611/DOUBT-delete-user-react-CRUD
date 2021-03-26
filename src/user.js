import React, { useContext, useEffect, useState } from 'react';
import UserContext from './userContext';
import { Link } from 'react-router-dom';
import { DeleteUserById, GetUserData } from "./api";

function User() {
    //let users = useContext(UserContext);

    let [userData, setUserData] = useState([]);
    let born = false;



    useEffect(async () => {
        let users = await GetUserData();
        setUserData(...userData, users.data);
        console.log("userData-----", userData)

    }, [])


    async function deleteUser(id) {
        await DeleteUserById(id);
        let newUsers = await GetUserData();
        setUserData(...userData, newUsers.data);
    }

    if(userData !== null){
    return (
        <>

            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Users</h1>
                <Link to="/create-user" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i>Create User</Link>
            </div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Action</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {

                                    userData.map((user) => {
                                        return (
                                            <tr>
                                                <td>
                                                    <Link to={`/profile/${user.id}`}>{user.name}</Link>
                                                </td>
                                                <td>{user.email}</td>
                                                <td>Edinburgh</td>
                                                <td>61</td>
                                                <td>2011/04/25</td>
                                                <td>
                                                    <Link to={`/edit-user/${user.id}`} className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                                        className="fas fa-download fa-sm text-white-50"></i>Edit</Link>
                                                    <button className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" userId={user.id} onClick={() => { deleteUser(user.id) }
                                                    } ><i
                                                        className="fas fa-download fa-sm text-white-50"></i>Deletee</button>
                                                </td>
                                            </tr>
                                        )

                                    })


                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

}


export default User;