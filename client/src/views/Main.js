import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Create from '../components/Create';
import Petlist from '../components/Petlist';

const Main = () => {
    const [pets, setPets] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [formSubmittedBoolean, setFormSubmittedBoolean] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/pets')
            .then(res=>{
                setPets(res.data);
                setLoaded(true);
            })
            .catch((err) => console.log(err));
    },[formSubmittedBoolean]);
  
    return (
        <div>
            <h1> Pet Shelter </h1>
           <Create formSubmittedBoolean={formSubmittedBoolean}
                    setFormSubmittedBoolean={setFormSubmittedBoolean}/>
           <hr/>
           <h1>All Pets: </h1>
           { loaded && <Petlist pets={pets} 
                                setPets={setPets} 
                                formSubmittedBoolean={formSubmittedBoolean}
                                setFormSubmittedBoolean={setFormSubmittedBoolean}
                                /> }
           
        </div>
    )
}
export default Main;
