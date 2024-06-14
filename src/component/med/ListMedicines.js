import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import MedicineListItem from "./MedicineListItem";
import { useSelector } from "react-redux";
import checkAuth from "../auth/checkAuth";

function ListMedicines(){
    var [allMedicines, setAllMedicines] = useState([]);
    var [filteredMedicines, setFilteredMedicines] = useState([]);
    var [searchTerm, setSearchTerm] = useState('');
    let user = useSelector(store=>store.auth.user);

    function handleSearchInput(event){
        event.preventDefault();
        setSearchTerm(event.target.value);
    }
    function handleSearch(event){
        event.preventDefault();
        axios.get('https://medicalstore.mashupstack.com/api/medicine/search?keyword=' + searchTerm,{
            headers:{"Authorization":"Bearer " + user.token}
        })
        .then((response)=>{
            if(searchTerm.trim() === ''){
                setFilteredMedicines(allMedicines);
            }else{
                setFilteredMedicines(response.data);
            }
        });
    };
    function fetchMedicines(){
        if(user){
            axios.get("https://medicalstore.mashupstack.com/api/medicine", {
            headers:{"Authorization":"Bearer " + user.token}
        })
        .then((response)=>{
            setAllMedicines(response.data);
            setFilteredMedicines(response.data);
        });}
    }
    useEffect(()=>{
        fetchMedicines();
    }, [])
    return(
        <div>
            <Navbar></Navbar>
            <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center my-3">Medicine</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-8 offset-2">
                    <div className="form-group">
                        <label>Search: </label>
                        <input type="text" value={searchTerm} onChange={handleSearchInput}/>
                        <button className="btn btn-success ml-2" type="button" onClick={handleSearch}>Search</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-8 offset-2">
                    <Link to="/medicine/add" className="btn btn-info mb-2">Add Medicine</Link>
                    {filteredMedicines.length === 0 ? (
                        <p>No matching Medicines found.</p>
                    ):(
                        filteredMedicines.map(medicine=><MedicineListItem key={medicine.id} medicine={medicine} refresh={fetchMedicines}/>)
                    )}
                </div>
            </div>
        </div>
        </div>

    )
}

export default checkAuth(ListMedicines);