import React from 'react'

export default function ActivityCard({activityCard:{activitiyId,description,activityName,date,image}}) {
  return (

   <div class="h-[360px] w-[590px] bg-center bg-no-repeat bg-cover bg-cover my-16 ...">
   <a href="#">
       <img class="p-8 rounded-t-lg" src={image} alt="product image" />

       <div class="px-5 pb-5">
       <a href="#">
           <h5 class="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">{activityName}</h5>
       </a>
       <div class="flex justify-between items-center">
           <span class="text-2xl font-bold text-gray-900 dark:text-white">{description}</span>
       </div>
       <div class="flex justify-between items-center">
           <span class="text-3xl font-bold text-gray-900 dark:text-white">{date}</span>
           <a href={`activityprofile/${activitiyId}`} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">details</a>
       </div>
   </div>
   
   </a>
 
</div>

  )
}
