import {useParams, useLocation } from "react-router-dom"
import ActivityProfile from "../components/ActivityProfile";
import BottomActivityBanner from "../components/BottomActivityBanner";
import BottomProfileBanner from "../components/BottomProfileBanner";
import Community from '../components/Community';
import On from "../components/On";
import Onbir from "../components/Onbir";
import ProfilBanner from "../components/ProfilBanner";

export default function Profile() {

   
    const params = useParams();
    console.log(params)
  return (
    <>
    <div className="bg-slate-100">
<ProfilBanner  community={params} ></ProfilBanner>  
<div className="grid grid-flow-col  sm:auto-cols-max justify-start sm:justify-end gap-2">

<div class="flex-auto flex space-x-4">
        <a href={`/communityadd/${params.id}`}>
        <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
          Topluluk Oluştur
        </button>
        </a>
        <a href="/">
        <button class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button" href="/">
          çıkış
        </button>
        </a>
      </div>             
              </div>
              <div><font class="text-slate-50"> .</font></div>

<div className="grid grid-cols-12 gap-6"> 

<On  community={params}></On> 
<ActivityProfile  community={params}  ></ActivityProfile>

</div>
<div><font class="text-slate-50"> .</font></div>

<BottomProfileBanner community={params} ></BottomProfileBanner>
<div><font class="text-slate-50"> .</font></div>

<BottomActivityBanner community={params} ></BottomActivityBanner>


</div>
</>
    
  )
}
