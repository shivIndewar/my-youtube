import React from 'react'
import Button from './Button';

const ButtonList = () => {
    const list = ["All","Live", "Kapil Sharma", "Cricket", "News","Songs","Web series","Crime Petrol"];
  return (
    <div className='flex'>
        {
            list.map((b)=><Button key={b} name={b} />)
        }
       
      
    </div>
  )
}

export default ButtonList;