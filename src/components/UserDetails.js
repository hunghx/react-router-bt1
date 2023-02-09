import React from 'react';
import Navbar from "./Navbar";

function UserDetails(props) {
    return (
        <div>
            <Navbar/>
            <h1>User Details</h1>
            <div className="content row">
                <div className="col-6">
                    <h4>Name</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Username :</li>
                        <li className="list-group-item">Email: </li>
                        <li className="list-group-item">
                            <h5>Address Details</h5>
                            <ul>
                                <li>Street</li>
                                <li>Suite</li>
                                <li>City</li>
                                <li>ZipCode</li>
                            </ul>
                        </li>
                        <li className="list-group-item">Phone</li>
                        <li className="list-group-item">Website</li>
                        <li className="list-group-item">
                            <h5>Company Details</h5>
                            <ul>
                                <li>Name</li>
                                <li>Catch Phrasey</li>
                                <li>BS</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="col-6">
                    <img
                        src="https://tse4.mm.bing.net/th?id=OIP.-EgxmN52qH7_v62klUUgMgE8DF&pid=Api&P=0"
                        className="img-fluid"
                        alt="road"
                    />
                    <p className="text-center">name</p>
                </div>
            </div>
        </div>
    );
}

export default UserDetails;