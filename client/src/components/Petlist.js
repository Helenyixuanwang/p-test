import React from 'react';

import { Link } from '@reach/router';
import Delete from './Delete';


const Petlist = (props) => {
    
    const { formSubmittedBoolean, setFormSubmittedBoolean} = props;
    const { pets, setPets } = props;

    const updateAfterDelete=(deletedPetId)=> {
        const filteredArray = pets.filter((petObj)=>{
        
            return petObj._id !== deletedPetId;
        });
        
        setPets(filteredArray);
        
    }
    
    return (
        <div>
            <table className="table">
                <thead>
                    <th> Name      </th>
                    <th> type      </th>
                    <th> description      </th>
                    <th>skill1</th>
                    <th>skill2</th>
                    <th>skill2</th>
                    <th> Action available</th>
                </thead>
                <tbody>
                {pets.map((pet, idx)=>(
                <tr key={idx}>
                    <td>{ pet.name} </td>
                    <td>{pet.type}</td>
                    <td>{pet.description}</td>
                    <td>{pet.skill1}</td>
                    <td>{pet.skill2}</td>
                    <td>{pet.skill3}</td>
                    <td><span className="edit-btn"><Link to={"/pets/"+pet._id+"/edit"}>edit</Link></span >|<Delete petId={pet._id} afterDelete={updateAfterDelete} /></td>

                </tr>
            ))
            }
                </tbody>
            </table>
           
        </div>
    )
}
export default Petlist;

