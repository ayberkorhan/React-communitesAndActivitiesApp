import React from 'react'
import {Routes, Route , Link, NavLink} from "react-router-dom";

export default function Card({card:{communityId,description,communityName,image}}) {
  return (<>
  
<div class="h-[360px] w-[590px]  bg-center bg-no-repeat bg-cover" >
<a href={`communityprofile/${communityId}`}  class="block overflow-hidden rounded-2xl">
  <img class="object-cover w-full h-56" src={image} alt="" />

  <div class="p-4 bg-gray-900">
    <p class="text-xs text-gray-500">{communityName}</p>

    <h5 class="text-sm text-white">{description}</h5>

  </div>
</a>
</div>
  </>
  )
}
