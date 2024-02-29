import React from 'react'

const CardStat = ({ name }) => {
  return (
    <div className='flex flex-col gap-1 border border-black p-1 shadow-lg rounded-lg w-16'>
      <div>
        <p className='text-sm text-left'>{name}</p>
      </div>
      <div>
        <h3 className='text-center'>1</h3>
      </div>
    </div>
  )
}

export default CardStat
