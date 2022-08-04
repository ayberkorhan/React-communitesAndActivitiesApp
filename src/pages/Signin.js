import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function Signin() {

    const[password,setPassword]=useState("")
    const[userName,setUserName]=useState("")

    function signin(){
        let account={userName,password}
          axios.post('http://localhost:8080/accountCheck', account)
          .then(response => (response.data)? localStorage.setItem('accountId', `${response.data.accountId}`) & alert("giris yapıldı"): alert(`hatalı parola veya sifre`)
          );


       }
  return (
      <>
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign In</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="userName" className="sr-only">
                 userName
              </label>
              <input
                id="userName"
                name="userName"
                type="userName"
                autoComplete="userName"
                required
                className="appearance-none rounded-none relative block
                w-full px-3 py-2 border border-gray-300
                placeholder-gray-500 text-gray-900 rounded-t-md
                focus:outline-none focus:ring-indigo-500
                focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="userName"
                value={userName}
                onChange={(e)=>setUserName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                email
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block
                w-full px-3 py-2 border border-gray-300
                placeholder-gray-500 text-gray-900 rounded-b-md
                focus:outline-none focus:ring-indigo-500
                focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            

        
        
          </div>
         

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
              </label>
            </div>

          
          </div>

          <div>
            <a
              className="group relative w-full flex justify-center
              py-2 px-4 border border-transparent text-sm font-medium
              rounded-md text-white bg-indigo-600 hover:bg-indigo-700
              focus:outline-none focus:ring-2 focus:ring-offset-2
              focus:ring-indigo-500"
              onClick={signin}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
             
              </span>
              Sign In
            </a>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}
