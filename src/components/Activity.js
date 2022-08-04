import {useEffect, useState} from 'react'
import axios from 'axios'
import ActivityCard from './ActivityCard';

export default function Activity() {

    const [activites, setActivities] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8080/api/v1/activity/getall')
    .then(response => setActivities(response.data), console.warn(activites)
    );
  },[])


  return (
   <>

   <div class=" grid grid-cols-4 mb-300 gap-4   ">
   {activites && activites.map((activityCard,index)=><ActivityCard key={index} activityCard={activityCard}/>)}



</div>
   </>
  )
}
