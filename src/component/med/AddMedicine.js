import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import checkAuth from "../auth/checkAuth";
import { useSelector } from "react-redux";

function AddMedicine(){
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [expiry_date, setExpiry_date] = useState('');
    let user = useSelector(store=>store.auth.user);

    const navigate = useNavigate();

    function addNewMedicine(){
        console.log("hello" + user.token);
        axios.post("https://medicalstore.mashupstack.com/api/medicine",
        {
            name:  name,
            company: company,
            expiry_date: expiry_date
        },{
            headers:{"Authorization":"Bearer " + user.token}
        })
        .then((response)=>{
            navigate('/medicine')
        })
    }
    return(
        <div>
            <Navbar></Navbar>
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <h1>Add Medicine</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                        <div className="form-group">
                            <label>Name: </label>
                            <input className="form-control" type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
                        </div>
                        <div className="form-group">
                            <label>Company: </label>
                            <input className="form-control" type="text" value={company} onChange={(e)=>setCompany(e.target.value)}></input>
                        </div>
                        <div className="form-group">
                            <label>Expiry Date: </label>
                            <input className="form-control" type="date" value={expiry_date} onChange={(e)=>setExpiry_date(e.target.value)}></input>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <button className="btn btn-primary" onClick={addNewMedicine}>Add Medicine</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default checkAuth(AddMedicine);