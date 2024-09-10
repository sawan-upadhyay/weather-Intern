import React, { useEffect, useState } from 'react';

const Homepage = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const text = 'Welcome to Our Weather App. Please Login to View';
        let index = 0;
        const interval = setInterval(() => {
            if (index <= text.length) {
                setMessage(text.slice(0, index));
                index++;
            } else {
                clearInterval(interval);
            }
        }, 100);
        
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className='flex flex-col gap-28 justify-center items-center h-screen' style={{ backgroundImage: 'linear-gradient(to right, #0f0c29, #302b63, #24243e)' }}>
             
                <div className='text-white text-center'>
                    <h1 className='bg-opacity-80 transition-colors text-amber-600 text-5xl font-bold'>{message}</h1>
                </div>
            </div>
        </>
    );
};

export default Homepage;

// import React from 'react'
// import Sunny from '../assets/Sunny.jpg'

// const Homepage = () => {
   

//   return (
//     <>
//     <div className='flex justify-center' >
//     {/* <div className=' text-center  text-slate-100 pt-10 text-2xl'>This is Our Weather Report Homapage. Please Login to View </div> */}
//    <img src={Sunny} alt='No Image' className='h-screen fixed w-full left-0 top-0 -z-[10] opacity-90 blur-sm'/>
//       <div className='w-full p-3 flex justify-center pt-28 items-center'>
//         <h1 className='font-bold tracking-wide text-3xl'>This is Our Weather Report Homapage. Please Login to View</h1>
//       </div>
//     </div>
//     </>
//   )
// }

// export default Homepage