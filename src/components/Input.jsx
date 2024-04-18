import React from 'react'

function Input({type='text', value, onChange, ...props}) {
  return (
    <input type={type} className='w-full bg-gray-100 px-4 py-2 rounded' value={value} onChange={onChange} {...props} />
  )
}

export default Input
