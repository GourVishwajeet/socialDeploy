import { useState } from 'react';
import Screen2 from "./DisplayPage";
import { useNavigate } from 'react-router-dom';

const MyComponent = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(true);
  const navigate = useNavigate();


  return (
    <div className="relative h-screen w-screen">
      <div className={`fixed inset-0 z-40 transition-opacity duration-300 ${isDialogOpen ? 'bg-black bg-opacity-50 pointer-events-none' : ''}`}>
        <div className={`absolute inset-0 transition-filter duration-300 ${isDialogOpen ? 'filter brightness-50' : ''}`}> 
          <Screen2 />
        </div>
      </div>
      {isDialogOpen && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white  rounded shadow-lg z-50">
          <div className='w-[380px] h-auto flex-col '>
            <div className='m-3 font-semibold ml-[162px]  text-red-500 cursor-pointer'>Block</div>
            <hr />
            <div className='m-3 font-semibold ml-[155px]  text-red-500 cursor-pointer'>Restrict</div>
            <hr />
            <div className='m-3 font-semibold ml-[160px]  text-red-500 cursor-pointer'>Report</div>
            <hr />
            <div className='m-3  ml-[155px] cursor-pointer'>Share to...</div>
            <hr />
            <div className='m-3  ml-[120px] cursor-pointer'>About this account</div>
            <hr />
            <div className={`m-3  ml-[160px] cursor-pointer`} onClick={() => navigate("/screen2")}>Cancel</div>
            <hr />
          </div>
          
        </div>
      )}
      
    </div>
  );
};

export default MyComponent;