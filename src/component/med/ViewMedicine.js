import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import checkAuth from "../auth/checkAuth";
import { useSelector } from "react-redux";
function ViewMedicine(){
    var params = useParams();
    const [medicine, setMedicine] = useState({});
    const user = useSelector(store=>store.auth.user)
    useEffect(()=>{
        if(user)
        {axios.get("https://medicalstore.mashupstack.com/api/medicine/" + params.id,{
            headers:{"Authorization":"Bearer " + user.token}
        })
        .then((response)=>{
            setMedicine(response.data);
        })}
    },[params.id, user])
    return(
        <div>
            <Navbar></Navbar>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>View Medicine</h1>
                        <div className="card mt-3">
                            <div className="card-header"><h3>{medicine.name}</h3></div>
                            <div className="card-body">Company: {medicine.company}</div>
                            <div className="card-body">Expiry Date: {medicine.expiry_date}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default checkAuth(ViewMedicine);