import {useEffect, useState} from 'react'
import axios from 'axios'
import Card from "../components/Card";

export default function Community() {

  const [catagories, setCatagories] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8080/api/v1/community/getall')
    .then(response => setCatagories(response.data), console.warn(catagories)
    );
  },[])




  return (
<>

<div class="h-56 grid grid-cols-4 gap-4  content-between ...">
{catagories && catagories.map((card,index)=><Card key={index} card={card}/>)}

</div>

</>  )
}
