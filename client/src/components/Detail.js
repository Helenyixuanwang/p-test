import React , { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';


const Detail = (props) => {
    const { id } = props; //this comes from the routes' URL
    const [ pet, setPet ] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets/"+ id)
        .then((res) =>{
             console.log(res);
             setPet(res.data);
        })
        .catch((err) => console.log(err))
        //alrays remember the dependency array--empty is fine
        },[]);
    


    return(
        <div >
        <Link to="/pets/">Home</Link>
        <h1>Details of a Pet</h1>
        <table className="table">
        <tbody>
            <tr>
                <th>Name:</th>
                <td>{ pet.name } </td>
            </tr>
            <tr>
                <th>Type</th>
                <td>{pet.type}</td>
            </tr>
            <tr>
                <th>Description</th>
                <td>{pet.description}</td>
            </tr>
            <tr>
                <th>Skill1</th>
                <td>{pet.skill1}</td>
            </tr>
            <tr>
                <th>Skill2</th>
                <td>{pet.skill2}</td>
            </tr>
            <tr>
                <th>Skill3</th>
                <td>{pet.skill3}</td>
            </tr>
            
        </tbody>
        </table>
        <button className="edit-btn" onClick={(e)=> navigate(`/pets/${id}/edit`)}>Edit</button>
        
        </div>
    )
}

export default Detail;