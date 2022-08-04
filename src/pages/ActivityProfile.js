import React from 'react'
import {useParams, useLocation } from "react-router-dom"
import {useEffect, useState} from 'react'
import axios from 'axios'

export default function ActivityProfile() {
  const [userdata, setuserdata] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {

    const users =  await axios.get(`http://localhost:8080/api/v1/activity/${params.id}`)

    setuserdata(users.data);
    }
    fetchUserData();

  }, []);

    const params = useParams();
    console.log(params)


    function register(){
      let communityId = params.id;
      let accId = localStorage.getItem('accountId');
        axios.get(`http://localhost:8080/api/v1/UserActivity/${accId}/${communityId}`)
        .then(response => (response.data)?  alert(`${response.data.usid}`): alert(`uye olunamadı`)
        );
  
  
     }


  return (<><div>{params.id}</div>

<section>
  <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-24">
    <div class="max-w-3xl">
      <h2 class="text-3xl font-bold sm:text-4xl">
        {userdata.activityName}
      </h2>
    </div>

    <div class="grid grid-cols-1 gap-8 mt-8 lg:gap-16 lg:grid-cols-2">
      <div class="relative h-64 overflow-hidden sm:h-80 lg:h-full">
        <img
          class="absolute inset-0 object-cover w-full h-full"
          src={userdata.image}
          alt="Man using a computer"
        />
      </div>

      <div class="lg:py-16">
        <article class="space-y-4 text-gray-600">
          <p>
            {userdata.description}
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
            explicabo quidem voluptatum voluptas illo accusantium ipsam quis,
            vel mollitia? Vel provident culpa dignissimos possimus, perferendis
            consectetur odit accusantium dolorem amet voluptates aliquid,
            
          </p>
          <h1>{userdata.date}</h1>
          
        <a
          onClick={register}
          class="inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
        >
          <span class="text-sm font-medium"> etkinliğe katıl </span>
          
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
        </article>
      </div>
    </div>
  </div>
</section>


  </>
    
  )
}
