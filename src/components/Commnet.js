import React from 'react'

const Commnet = ({data}) => {
    const {name,comment,replies} = data;

    return (
    <div className='flex shadow-sm bg-gray-100 p-2 my-2 rounded-lg w-[760px]'>
        <img className='w-8 h-8' alt='user' src='https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png' />
        <div className='px-3'>
            <p className='font-bold'>Name : {name}</p>
            <p>Comment: {comment}</p>
        </div>
    </div>
  )
}

export default Commnet;