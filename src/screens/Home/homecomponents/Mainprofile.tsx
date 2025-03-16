import img1 from "../../../public/p1.png"
import img2 from "../../../public/p2.png"
import img3 from "../../../public/p3.png"


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
    

    



   return(
    <div>
        <div className='flex items-center mt-10'>
        <div>
        <img src="/public/frame.png" className='w-40 h-40 border-2 border-gray-150 ml-72 mt-1 cursor-pointer rounded-full' />
        </div>

       <div className='flex flex-col'>
        <div className='ml-25 flex items-center'>
            <div className='text-2xl flex items-center justify-center'>
            mkbhd
            <div><img src="/public/verified.png" className="w-5 h-5 ml-1"/></div>
            </div>
            <div className=" w-28 h-7.5 items-center justify-center flex rounded-lg bg-gray-300 font-medium ml-5 cursor-pointer">
             Following
             <div className="ml-2"><img src='/public/Vector.png'/></div>
            </div>
            <div className=" w-25 h-7.5 items-center justify-center flex rounded-lg bg-gray-300 font-medium ml-8 cursor-pointer">
             Message
            </div>
            <div className="h-7.5 flex items-center justify-center w-7 ml-6 bg-gray-300 rounded-md cursor-pointer">
                <img src='/public/add.png'/>
            </div>
            <div className='ml-6 cursor-pointer'>
            <img src='/public/menu.png'/>
            </div>
        </div>
        <div className='ml-25 mt-10 flex'>
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
        <div className='ml-25 mt-10'>
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
        <div className='ml-25 mt-6.25 flex'>
         <div className='text-gray-400 text-sm'>Followed by</div>
         <div className='ml-1 text-sm'>kurzgesagt</div>
        </div>
        </div>
        </div>
        <div className='ml-60 mt-3 flex'>
            <div>
                <img src='/public/camera.png' className='w-17.5 h-17.5 rounded-full'/>
            </div>
            <div className='ml-20'>
                <img src='/public/fresbie.png' className='w-17.5 h-17.5 rounded-full'/>
            </div>
        </div>
        <div>
        <hr className='border border-gray-300 border-opacity-20  mt-2 ml-60'/>
        </div>
        <div className='flex mt-3 ml-96'>
            <div className="items-center flex ml-25">
                <img src='/public/post.png' className="w-4 h-4" />
            
            <div className="ml-2 font-medium">
            POSTS</div>
            </div>
            <div className='ml-12.5 items-center flex'>
                <img src='/public/reel.png' className='w-7.5 h-7.5'/>
            
            <div className="font-medium">
            REELS
            </div>
            </div>
            <div className='ml-12.5 items-center flex'>
                <img src='/public/tagged.png' className='w-4 h-4'/>
            
            <div className="ml-2 font-medium">
            TAGGED</div>
            </div>
        </div>
        <div className="flex ml-60 mt-3 flex-wrap w-max">
       {data.map((item)=>(
        <div>
            <img src={item.image}  className=' w-65 m-1 ' />
        </div>
       ))}
        </div>
        
    </div>
   )
}