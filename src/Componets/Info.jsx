import React from 'react'
// import wind from '../img/wind.png'

function Attributes({stats}) {
 console.log(stats.title)
  return (
   <>
  
    <div className=' text-slate-200  bg-[#3d5357] font-mono flex flex-col justify-start items-center rounded-2xl h-3/4 gap-2'>
      <h2 className=' text-center font-bold text-sm mt-5 gap-3'> {stats.title} <br /> < img src={stats.photo} alt="" /></h2>

      <div className='mt-2'>
      <span className=' text-slate-200 text-xl'> {stats.value}</span>
      <span className=' text-slate-200 text-xl'> {stats.unit}</span>
      </div>
     
      {/* {(stats.title) == "Humidity"? (
        <div className="w-full mt-4 bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
          <div
            className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
            style={{ width: `${stats.value}%` }}
          ></div>
        </div>
      ) : null} */}
{/*      
     {stats.direction?(<div className='mt-3'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-slate-200">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
  
</svg>
<span className=' px-1'> E </span>
      </div>):null} */}
    </div>
   
  

   </>
     


  )
}

export default Attributes
