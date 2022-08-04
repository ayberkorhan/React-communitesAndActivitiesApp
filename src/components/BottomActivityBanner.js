import React from 'react'
import {useParams, useLocation } from "react-router-dom"
import {useEffect, useState} from 'react'
import axios from 'axios'
export default function BottomActivityBanner(props) {
    
    const [active, setActive] = useState([]);



    useEffect(() => {
        const fetchUserData = async () => {
    
        const activ =  await axios.get(`http://localhost:8080/api/v1/activity/creatorId/${props.community.id}`)
    
    
        setActive(activ.data);
    
        }
        fetchUserData();
    
      }, []);
      console.warn(active)
      return (
        <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
          <header className="px-5 py-4 border-b border-slate-100">
            <h2 className="font-semibold text-slate-800">OLUŞTURULAN ETKİNLİKLER</h2>
          </header>
          <div className="p-3">
    
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                {/* Table header */}
                <thead className="text-xs font-semibold uppercase text-slate-400 bg-slate-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">AD</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">AÇIKLAMA</div>
                    </th>
    
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">KONUM</div>
                    </th>

                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">TARIH</div>
                    </th>

                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">TOPLULUK ADI</div>
                    </th>

                    
                  
                  </tr>
                </thead>
                {/* Table body */}
                <tbody className="text-sm divide-y divide-slate-100">
                  {
                    active.map(active => {
                      return (
                        <tr key={active.communityId}>
                          <td className="p-2 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                              <img className="rounded-full" src={active.image} width="40" height="40" alt={active.activitiyId} />
                              </div>
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left">{active.activityName}</div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left font-medium text-green-500">{active.description}</div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left font-medium text-green-500">{active.location}</div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left font-medium text-green-500">{active.date}</div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left font-medium text-green-500">{active.community.communityName}</div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
    
                          
                          </td>
                          
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
    
            </div>
    
          </div>
        </div>
      )
}
