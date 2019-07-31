import React from 'react';

import './UserFields.css';

const UserFields = (props) => {

    if(props.status){
        return (
            <div className='userfields_wrapper'>
                <button className="btn" onClick={props.action} >Search</button>
    <div className="row">
    
        {props.data.x.map((e,key)=>
    
    <div className="col-sm" key={key}>
        
        <div className="card" key={key}>
            <div className="card-body" key={key}>
        {parseInt(e.temp_min)-273}{parseInt(e.temp_max)-273}
        </div>
        </div>
        </div>       )}
    
    
    </div>
            </div>
        );
     
    }

    return (
        <div className='userfields_wrapper'>
<button className="btn" onClick={props.action}>Search</button>
        </div>
    );

}

export default UserFields;