import img1 from "../../../public/p1.png"
import img2 from "../../../public/p2.png"
import img3 from "../../../public/p3.png"
import { MdOutlineGridOn } from "react-icons/md";
import { BiSolidMoviePlay } from "react-icons/bi";
import { BsPersonSquare } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdPersonAdd } from "react-icons/io";
import cross from "../../../src/assets/cross.svg"



const data=[
    {
        id:1,
        image:img1
    },
    {
        id:2,
        image:img2
    },
    {
        id:3,
        image:img3
    },
]


export default function Picture(){
    const [activeTab, setActiveTab] = useState('posts');
    const [active, setActive] = useState(false);
   const navigate = useNavigate();

    



   return(
    <div>
        <div className='flex mt-10'>
        <div className="xl:ml-72 md:-ml-12 xsm:-ml-35">
        <img src="/public/frame.png" className='xl:w-40 xl:h-40 md:w-40 border-2 border-gray-150  xl:mt-1 md:mt-8  xsm:w-20  cursor-pointer  rounded-full ' />
        </div>

       <div className='flex flex-col '>
        <div className='xl:ml-25 md:ml-6 xsm:ml-8 flex items-center'>
            <div className='text-2xl xsm:font-sans flex items-center justify-center'>
            mkbhd
            <div><img src="/public/verified.png" className="xl:w-5 xl:h-5 ml-1 md:w-3 xsm:w-4 "/></div>
            </div>
            <div className="xsm:hidden  xl:flex md:flex">
            <div className=" w-28 h-7.5 items-center justify-center flex rounded-lg bg-gray-200 font-medium ml-5 cursor-pointer" onClick={()=>navigate('/dialog')}>
             Following
             <div className="ml-2"><img src='/public/Vector.png'/></div>
            </div>
            <div className=" w-25 h-7.5 items-center justify-center flex rounded-lg bg-gray-200 font-medium ml-6 cursor-pointer" onClick={() => navigate("/messages")}>
             Message
            </div>
            <div className=" h-7.5 flex items-center justify-center w-7 ml-6 bg-gray-200 rounded-md cursor-pointer " onClick={()=>setActive(!active)}>
            {active?<IoMdPersonAdd />:<img src='/public/add.png'/>}
            </div>
            </div>
            <div className='ml-6 cursor-pointer'  onClick={() => navigate("/following")}>
            <img src='/public/menu.png'/>
            </div>
            </div>
        <div className=" xl:hidden  md:hidden xsm:flex items-center mt-3">
        <div className=" w-25 h-7.5 items-center justify-center flex rounded-lg bg-gray-200 text-sm  font-semibold ml-5 cursor-pointer" onClick={()=>navigate('/dialog')}>
             Following
             <div className="ml-2"><img src='/public/Vector.png'/></div>
            </div>
            <div className=" w-22 h-7.5 items-center justify-center flex rounded-lg bg-gray-200 text-sm  font-semibold  ml-3 cursor-pointer" onClick={() => navigate("/messages")}>
             Message
            </div>
            <div className=" h-7.5 flex items-center justify-center w-7 ml-3 bg-gray-200 rounded-md cursor-pointer">
                <img src='/public/add.png'/>
            </div>
        </div>    
        <div className='xl:ml-25 md:ml-5 mt-10 xsm:hidden  xl:flex md:flex'>
            <div className='flex items-center'>
                <div className='font-medium'>
                1861
                </div>
                <div className='ml-2 text-md'>
                    posts
                </div>
            </div>
            <div className='flex ml-20 items-center'>
                <div className='font-medium'>
                4M
                </div>
                <div  className='ml-2 text-md'>followers</div>
            </div>
            <div className='flex ml-20 items-center'>
                <div className='font-medium'>
                454
                </div>
                <div  className='ml-2 text-md'>following</div>
            </div>
        </div>
        {/* <div className="xl:flex xl:hidden md:flex md:hidden xsm:flex xsm:block mt-7 -ml-18">
        <div className='flex items-center'>
                <div className='font-medium'>
                1861
                </div>
                <div className='ml-2 text-md'>
                    posts
                </div>
            </div>
            <div className='flex xl:ml-20 md:ml-20 xsm:ml-8 items-center'>
                <div className='font-medium'>
                4M
                </div>
                <div  className='ml-2 text-md'>followers</div>
            </div>
            <div className='flex  xl:ml-20 md:ml-20 xsm:ml-8 items-center'>
                <div className='font-medium'>
                454
                </div>
                <div  className='ml-2 text-md'>following</div>
            </div>
        </div> */}
        <div className='xl:ml-25 md:ml-5 xsm:-ml-22 mt-10'>
           <div className='font-medium'>
            Marques Brownlee
           </div>
           <div>
            I promise I won't overdo the filters
           </div>
           <div className='text-blue-500 cursor-pointer'>
            mkbhd.com
           </div>
        </div>
        <div className='xl:ml-25 md:ml-5 xsm:-ml-22 mt-6.25 flex'>
         <div className='text-gray-400 text-sm'>Followed by</div>
         <div className='ml-1 text-sm'>kurzgesagt</div>
        </div>
        </div>
        </div>
        {active? <div>
        <div className="font-semibold ml-50 mt-5 text-lg">Suggested for you</div>
        <div className="flex">
        <div className="flex ml-50 mt-4">
            <div className="w-40 border border-gray-300 flex-col h-auto rounded-lg mb-4">
             <div className="flex justify-end mt-1 mr-2"><img src={cross}/></div>
             <div className="flex justify-center"><img src="/public/frame.png" className="w-18 rounded-full"/></div>
             <div className="font-semibold ml-13 mt-2 flex items-center">mkbhd <div className="ml-1"><img src="/public/verified.png" className="w-4"/></div></div>
             <div className="text-gray-600 ml-5 -mt-0.5 text-sm mb-12">Marques Brownlee</div>
             <div><hr/></div>
             <div className="flex  text-blue-600 font-semibold mt-3 mb-3 justify-center items-center" >Follow</div>
            </div>
        </div>
        <div className="flex ml-3 mt-4">
            <div className="w-40 border border-gray-300 flex-col h-auto rounded-lg mb-4">
             <div className="flex justify-end mt-1 mr-2"><img src={cross}/></div>
             <div className="flex justify-center"><img src="/bessie.svg" className="w-18 rounded-full"/></div>
             <div className="font-semibold ml-11 mt-2 flex items-center">Bessie245 <div className="ml-1"><img src="/public/verified.png" className="w-4"/></div></div>
             <div className="text-gray-600 ml- -mt-0.5 text-sm mb-12">Bessie Brownlee</div>
             <div><hr/></div>
             <div className="flex  text-blue-600 font-semibold mt-3 mb-3 justify-center items-center">Follow</div>
            </div>
        </div>
        <div className="flex ml-3 mt-4">
            <div className="w-40 border border-gray-300 flex-col h-auto rounded-lg mb-4">
             <div className="flex justify-end mt-1 mr-2"><img src={cross}/></div>
             <div className="flex justify-center"><img src="/davide.svg" className="w-18 rounded-full"/></div>
             <div className="font-semibold ml-11 mt-2 flex items-center">Davide321 <div className="ml-1"><img src="/public/verified.png" className="w-4"/></div></div>
             <div className="text-gray-600 ml-8 -mt-0.5 text-sm mb-12">Davide Brownlee</div>
             <div><hr/></div>
             <div className="flex  text-blue-600 font-semibold mt-3 mb-3 justify-center items-center">Follow</div>
            </div>
        </div>
        <div className="flex ml-3 mt-4">
            <div className="w-40 border border-gray-300 flex-col h-auto rounded-lg mb-4">
             <div className="flex justify-end mt-1 mr-2"><img src={cross}/></div>
             <div className="flex justify-center"><img src="/jenny.svg" className="w-18 rounded-full"/></div>
             <div className="font-semibold ml-12 mt-2 flex items-center">Jenny123 <div className="ml-1"><img src="/public/verified.png" className="w-4"/></div></div>
             <div className="text-gray-600 ml-8 -mt-0.5 text-sm mb-12">Jenny Brownlee</div>
             <div><hr/></div>
             <div className="flex  text-blue-600 font-semibold mt-3 mb-3 justify-center items-center">Follow</div>
            </div>
        </div>
        <div className="flex ml-3 mt-4">
            <div className="w-40 border border-gray-300 flex-col h-auto rounded-lg mb-4">
             <div className="flex justify-end mt-1 mr-2"><img src={cross}/></div>
             <div className="flex justify-center"><img src="/n1.svg" className="w-18 rounded-full"/></div>
             <div className="font-semibold ml-11 mt-2 flex items-center">Nuke876 <div className="ml-1"><img src="/public/verified.png" className="w-4"/></div></div>
             <div className="text-gray-600 ml-8 -mt-0.5 text-sm mb-12">Nuke Brownlee</div>
             <div><hr/></div>
             <div className="flex  text-blue-600 font-semibold mt-3 mb-3 justify-center items-center">Follow</div>
            </div>
        </div>
        </div>
        </div>:<></>}
        
        <div className='xl:ml-60 md:ml-30 xl:mt-3 md:mt-5 xsm:mt-5 xsm:-ml-35 flex'>
            <div>
                <img src='/public/camera.png' className='xl:w-17.5 xl:h-17.5 md:w-15 xsm:w-14 rounded-full'/>
            </div>
            <div className='md:ml-20 xl:ml-20 xsm:ml-10'>
                <img src='/public/fresbie.png' className='xl:w-17.5 xl:h-17.5 md:w-15 xsm:w-14 rounded-full'/>
            </div>
        </div>
        <div>
        <hr className='mt-2 xl:ml-60 md:ml-2 xsm:-ml-40 xsm:w-[417px] xl:w-[790px] md:w-[560px]'/>
        <div className="xl:hidden  md:hidden xsm:flex justify-evenly xsm:-ml-40  ">
            <div className="flex-col">
                <div className="text-sm font-semibold mt-2">1851</div>
                <div className="text-sm text-slate-500 -ml-0.5">posts</div>
            </div>
            <div className="flex-col">
                <div className="text-sm font-semibold mt-2">4M</div>
                <div className="text-sm text-slate-500 -ml-3">followers</div>
            </div>
            <div className="flex-col">
                <div className="text-sm font-semibold mt-2">454</div>
                <div className="text-sm text-slate-500 -ml-3">following</div>
            </div>
        </div>
        <hr className="mt-2 xl:hidden md:hidden w-[417px] -ml-40"/>
        </div>
        <div className={`flex mt-3 xl:ml-80 md:ml-2 xsm:-ml-50 cursor-pointer text-gray-600 `}>
            <div className={`items-center flex ml-25 ${activeTab === 'posts' ? "text-black" : ""}`} onClick={() => setActiveTab('posts')}>
            <MdOutlineGridOn/>
            
            <div className={`ml-2 font-medium xl:block md:block xsm:hidden`}>
            POSTS</div>
            </div>
            <div className={`ml-30 items-center flex ${activeTab === 'reels' ? "text-black" : ""}`} onClick={() => setActiveTab('reels')}>
            <BiSolidMoviePlay />
            
            <div className={`font-medium ml-2 xl:block md:block xsm:hidden`}>
            REELS
            </div>
            </div>
            <div className={`ml-30 items-center flex ${activeTab === 'tagged' ? "text-black" : ""}`} onClick={() => setActiveTab('tagged')}>
            <BsPersonSquare />
            
            <div className={`ml-2 font-medium xl:block md:block xsm:hidden`}>
            TAGGED</div>
            </div>
        </div>
        <div className="flex xl:ml-60 md:ml-2 mt-3 flex-wrap w-max xsm:-ml-40">
       {data.map((item)=>(
        <div>
            <img src={item.image}  className=' xl:w-65 md:w-45 h-auto ml-1 xsm:w-32 ' />
        </div>
       ))}
        </div>
        
    </div>
   )
}