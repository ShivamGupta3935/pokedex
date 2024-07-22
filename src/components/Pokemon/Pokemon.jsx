import React from 'react'

function Pokemon({name, image}) {
  return (
    <div className='flex  justify-evenly items-center  flex-col border border-zinc-200 rounded-xl hover:bg-slate-200'>
          <div className='p-0'>
              {name}
          </div>
         <div className=' p-4 mx-4  '> 
              <img className='max-w-50 max-h-40 ' src={image} alt="image" />
         </div>
      
        
    </div>
  )
}

export default Pokemon