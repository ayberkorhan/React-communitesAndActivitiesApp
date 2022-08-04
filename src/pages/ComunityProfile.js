import {useParams, useLocation } from "react-router-dom"
import {useEffect, useState} from 'react'
import axios from 'axios'
import ActiveCard from '../components/ActiveCard';


export default function ComunityProfile() {

  const [community, setCommunity] = useState([]);

  const [userdata, setuserdata] = useState([]);

  const [active, setActive] = useState([]);


  const params = useParams();

  
  useEffect(() => {
    const fetchUserData = async () => {

    const users =  await axios.get("http://localhost:8080/api/v1/community/single/",{
      params: {
        id: params.id
      }
    })

    const activ =  await axios.get(`http://localhost:8080/api/v1/activity/community/${params.id}`)


    setActive(activ.data);

    setuserdata(users.data);
    }
    fetchUserData();

  }, []);
  console.log(userdata)
  console.log(active)



  function register(){
    let communityId = params.id;
    let accId = localStorage.getItem('accountId');
      axios.get(`http://localhost:8080/api/v1/UserCommunity/${accId}/${communityId}`)
      .then(response => (response.data)?  alert(`${response.data.ucid}`): alert(`uye olunamadı`)
      );


   }

  return (

<>
<div>
<section 
>
  <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
      <div
        class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last"
      >
        <img
          class="absolute inset-0 object-cover w-full h-full"
          src={userdata.image}
          alt="Man using a computer"
        />
      </div>

      <div class="lg:py-24">
        <h2 class="text-3xl font-bold sm:text-4xl">{userdata.communityName}</h2>

        <p class="mt-4 text-gray-600">
          {userdata.description}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
          atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
          veniam tempora deserunt? Molestiae eius quidem quam repellat.
        </p>

        <a
         onClick={register}

          class="inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
        >
          <span class="text-sm font-medium"> Uye Ol </span>
          
          <svg
            class="w-5 h-5 ml-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>


<section>
  <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
      <div class="flex items-center p-8 bg-gray-100 rounded">
        <div class="mx-auto text-center lg:text-left">
          <h2 class="text-2xl font-bold">
            Etkinlikler
          </h2>

          <p class="mt-4 text-sm text-gray-700 max-w-[45ch]">
            Topluluğumuzun düzenlediği etkinlikler
          </p>

          <a
            href="/activity"
            class="inline-block px-6 py-3 mt-6 text-sm text-white bg-black rounded"
          >
            bütün etkinlikler
          </a>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 lg:col-span-2 lg:grid-cols-3 lg:py-12">

      {active && active.map((activeCard,index)=><ActiveCard key={index} activeCard={activeCard}/>)}

        

        
      </div>
    </div>
  </div>
</section>


</div>

</>


  )
}
