import React , { useEffect, useState } from 'react';
import axios from 'axios';
import { link, navigate } from '@reach/router';

const Delete = (props) => {
    const { petId ,afterDelete} = props;
    

    const deleteHandler=()=> {
        console.log("Delete Id is "+petId);
        axios.delete("http://localhost:8000/api/pets/"+ petId)
        .then((res)=>{
            console.log("pet deleted: ");
            console.log(res.data);
            //run the specific code for after the delete is successful
            afterDelete(petId);
        } )
        .catch((err)=> console.log(err))

    }

    return(
        <button onClick={deleteHandler}>
        Delete 
        </button>
    )
}

export default Delete;