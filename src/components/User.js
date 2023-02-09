import React from 'react';
import Navbar from "./Navbar";

function User(props) {
    return (
        <div>
            <Navbar/>
            <h1>User Page</h1>
            <div className="row">
                <div className="col-3 card my-4">
                    <img
                        src="https://sm.mashable.com/t/mashable_in/news/c/constantly/constantly-stressed-at-work-it-might-actually-be-changing-yo_cqv3.1200.jpg"
                        className="card-img-top"
                        alt="Csdvd"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Usename :</li>
                        <li className="list-group-item">Email:</li>
                        <li className="list-group-item">Phone:</li>
                    </ul>
                    <div className="card-body">
                        <button className="btn btn-primary">Show more details</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;