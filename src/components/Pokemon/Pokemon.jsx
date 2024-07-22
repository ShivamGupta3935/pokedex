import React from 'react'

function Pokemon({name, image}) {
  return (
    <div className='flex  justify-evenly items-center  flex-col '>
          <div className='p-0'>
              {name}
          </div>
         <div className='hover:bg-orange-100 p-6 mx-4  '> 
              <img className='max-w-50 max-h-40 ' src={image} alt="image" />
         </div>
      
        
    </div>
  )
}

export default Pokemon