import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar";
import checkAuth from "../auth/checkAuth";
import { useSelector } from "react-redux";

function EditMedicine(){
    const params = useParams();
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [expiry_date, setExpiry_date] = useState('');
    const user = useSelector(store=>store.auth.user)
    const navigate = useNavigate();
    useEffect(()=>{
        if(user){
            axios.get("https://medicalstore.mashupstack.com/api/medicine/" + params.id,{
            headers:{"Authorization":"Bearer " + user.token}
        })
        .then((response)=>{
            setName(response.data.name);
            setCompany(response.data.company);
            setExpiry_date(response.data.expiry_date);
        })}
    }, [params.id, user])
    function updateMedicine(){
        axios.post("https://medicalstore.mashupstack.com/api/medicine/" + params.id,
        {
            name: name,
            company: company,
            expiry_date: expiry_date
        },{
            headers:{"Authorization":"Bearer " + user.token}
        })
        .then(response=>{
            alert(response.data.message);
        })
        navigate('/medicine');
    }
    return(
        <div>
            <Navbar></Navbar>
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <h1 className="text-center">Edit Medicine</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" value={name} onChange={e=>{setName(e.target.value)}}></input>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="form-group">
                            <label>Company</label>
                            <input type="text" className="form-control" value={company} onChange={e=>{setCompany(e.target.value)}}></input>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="form-group">
                            <label>Expiry Date</label>
                            <input type="date" className="form-control" value={expiry_date} onChange={e=>{setExpiry_date(e.target.value)}}></input>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                       <button className="btn btn-primary" onClick={updateMedicine}>Update</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default checkAuth(EditMedicine);