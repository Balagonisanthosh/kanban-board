import React from 'react'

const Stepping = ({stepCount}) => {
  return (
    <div className='flex gap-30'>
      <h1 className={`w-[40px] h-7 rounded-2xl flex text-center justify-center font-bold ${stepCount==0 ? "bg-amber-400" :"bg-white"}`}>1</h1>
      <h1 className={`w-[40px] h-7 rounded-xl flex text-center justify-center font-bold  ${stepCount==1 ? "bg-amber-400" :"bg-white"}`}>2</h1>
      <h1 className={`w-[40px] h-7 rounded-xl flex text-center justify-center font-bold ${stepCount==2 ? "bg-amber-400" :"bg-white"}`}>3</h1>
      
    </div>
  )
}

export default Stepping;
