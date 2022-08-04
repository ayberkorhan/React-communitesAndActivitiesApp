import { useState,useEffect} from 'react'
import {useParams, useLocation } from "react-router-dom"

import axios from 'axios'
export default function CommunityAdd() {
    

    const[communityName,setCommunityName]=useState("")
    const[description,setDescription]=useState("")
    const[image,setImage]=useState("")
    const[creatorId,setCreatorId]=useState("")

    const params = useParams();
    useEffect(() => {
        
        setCreatorId(params.id);

        console.log(params.id);

      }, []);

    function signin(){
        let account={communityName,description,image,creatorId}
          axios.post('http://localhost:8080/api/v1/community', account)
          .then(response => (response.data)? localStorage.setItem('accountId', `${response.data.accountId}`) & alert("topluluk oluşturuldu"): alert(`hatalı islem`)
          );


       }


  return (
    <div className="min-h-full flex items-center justify-center py-6 px-2 sm:px-4 lg:px-4">
        
        <section class="bg-gray-100">
  <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div class="lg:py-12 lg:col-span-2">

      <div class="mt-8">
          <a href="" class="text-2xl font-bold text-pink-600"> Topluluğunuzu Oluşturun </a>

          <address class="mt-2 not-italic">.</address>
        </div>
        <p class="max-w-xl text-lg">
        Topluluğunuzu yerel ve uluslararası olarak büyütmek, muhteşem etkinlikler düzenlemek ve 
        üyelerinizle iletişim kurmak için tüm ihtiyaçlarınıza cevap veren bir etkinlik platformu.
        </p>

        
      </div>

      <div class="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">
        <form action="" class="space-y-4">
          <div>
            <label class="sr-only" for="name">Topluluk Ismi</label>
            <input class="w-full p-3 text-sm border-gray-200 rounded-lg"
             placeholder="Topluluk Ismi"
              type="text"
               id="name"
               
               value={communityName}
                onChange={(e)=>setCommunityName(e.target.value)}
               
               />
          </div>

          <div>
            <label class="sr-only" for="name">Topluluk Resmi </label>
            <input class="w-full p-3 text-sm border-gray-200 rounded-lg" 
            placeholder="Topluluk Resmi"
             type="text"
              id="name" 
              
              value={image}
                onChange={(e)=>setImage(e.target.value)}
              
              />
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
           

          </div>

          <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
         
          </div>

          <div>
            <label class="sr-only" for="message">Message</label>
            <textarea
              class="w-full p-3 text-sm border-gray-200 rounded-lg"
              placeholder="Açıklama"
              rows="8"
              id="message"

              value={description}
              onChange={(e)=>setDescription(e.target.value)}
            
            ></textarea>
          </div>

          <a class="mt-4">
            <button
              type="submit"
              class="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto"
              onClick={signin}

            >
              <span class="font-medium"> Oluştur! </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 ml-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </a>
        </form>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}
