import React from 'react'

export default function ActiveCard({activeCard:{image,description,activityName,date,activitiyId}}) {
  return (
    <div>
    <a
    href={`http://localhost:3000/activityprofile/${activitiyId}`} 
    class="block"
  >
    <div class="aspect-w-1 aspect-h-1">
      <img
        loading="lazy"
        alt="Simple Watch"
        class="object-cover rounded"
        src={image}
      />
    </div>

    <div class="mt-2">
      <h5 class="font-medium">
      {activityName}
      </h5>

      <p class="mt-1 text-sm text-gray-700">
      {description}
      </p>
    </div>
  </a>
  </div>  )
}
