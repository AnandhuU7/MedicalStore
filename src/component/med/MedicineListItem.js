import axios from "axios";
import { Link } from "react-router-dom";
import checkAuth from "../auth/checkAuth";
import { useSelector } from "react-redux";

function MedicineListItem(props){
    const user = useSelector(store=>store.auth.user);
    function deleteMedicine(){
        axios.delete("https://medicalstore.mashupstack.com/api/medicine/" + props.medicine.id,{
            headers:{"Authorization":"Bearer " + user.token}
        })
        .then((response)=>{
            alert(response.data.message);
            props.refresh();
        })
    }
    return(
        <div className="card-body">
            {props.medicine.name}
            <button className="btn btn-danger float-right mr-2" onClick={deleteMedicine}>Delete</button>
            <Link to={"/medicine/" + props.medicine.id} className="btn btn-primary float-right mr-2">View</Link>
            <Link to={"/medicine/update/" + props.medicine.id} className="btn btn-primary float-right mr-2">Update</Link>
        </div>
    )
    
}

export default checkAuth(MedicineListItem);