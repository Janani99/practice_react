import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Description from './description';
import Profile from './profile';

function Details() {
    const navigate=useNavigate();
    const location=useLocation();
    const {userId}=useParams();
    let childComponent;
    if(location.pathname==='/details/profile')
    {
        childComponent=<Profile/>
    }
    else if(location.pathname==='/details/description')
    {
        childComponent=<Description/>

    }
    else {
        childComponent = <h3>Welcome to the Dashboard! Please select a section.</h3>;
      }

    const goBackToPreviousPage=()=>{
        //goback to previous page 
        navigate(-1);
    }
    const moveToProfilePage=()=>{
         navigate("profile");
    }
    const moveToDescriptionPage=()=>{
        navigate('description')
    }
  return (
    <div>
      <p>details{userId}</p>
      <button onClick={goBackToPreviousPage}>GOBACK</button>
      <button onClick={moveToProfilePage}>MOVETOPROFILEPAGE</button>
      <button onClick={moveToDescriptionPage}>MOVE TO DESCRIPTION</button>
      <div>{childComponent}</div>
    </div>
  )
}

export default Details;
