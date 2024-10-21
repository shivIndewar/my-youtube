import React from 'react'
import CommentsList from './CommentsList';

const Comments = () => {

    const commnets = [
        {
            name : "shivprasad",
            comment : "what a beautiful video",
            replies :[]
        },
        {
            name : "shilpa",
            comment : "what a beautiful video",
            replies :[
                {
                    name : "shivprasad",
                    comment : "what a beautiful video",
                    replies :[]
                },
                {
                    name : "pradnya",
                    comment : "what a beautiful video",
                    replies :[]
                },
            ]
        },
        {
            name : "shivaji",
            comment : "what a beautiful video",
            replies :[
                {
                    name : "shivprasad",
                    comment : "what a beautiful video",
                    replies :[]
                },
                {
                    name : "shivprasad",
                    comment : "what a beautiful video",
                    replies :[]
                },
                {
                    name : "shivprasad",
                    comment : "what a beautiful video",
                    replies :[]
                },
            ]
        },
        {
            name : "Dhanashri",
            comment : "what a beautiful video",
            replies :[]
        },
        {
            name : "shivprasad",
            comment : "what a beautiful video",
            replies :[
                {
                    name : "shivprasad",
                    comment : "what a beautiful video",
                    replies :[]
                },
                {
                    name : "shivprasad",
                    comment : "what a beautiful video",
                    replies :[]
                },
            ]
        },
        {
            name : "shivprasad",
            comment : "what a beautiful video",
            replies :[
                {
                    name : "shivprasad",
                    comment : "what a beautiful video",
                    replies :[]
                },
                {
                    name : "shivprasad",
                    comment : "what a beautiful video",
                    replies :[]
                },
                {
                    name : "shivprasad",
                    comment : "what a beautiful video",
                    replies :[]
                },
                {
                    name : "shivprasad",
                    comment : "what a beautiful video",
                    replies :[]
                },
                {
                    name : "shivprasad",
                    comment : "what a beautiful video",
                    replies :[]
                },
            ]
        },
        {
            name : "shivprasad",
            comment : "what a beautiful video",
            replies :[
                {
                    name : "shivprasad",
                    comment : "what a beautiful video",
                    replies :[]
                },
                {
                    name : "shivprasad",
                    comment : "what a beautiful video",
                    replies :[]
                },
                {
                    name : "shivprasad",
                    comment : "what a beautiful video",
                    replies :[]
                },
                {
                    name : "shivprasad",
                    comment : "what a beautiful video",
                    replies :[]
                },
                {
                    name : "shivprasad",
                    comment : "what a beautiful video",
                    replies :[]
                },
                {
                    name : "shivprasad",
                    comment : "what a beautiful video",
                    replies :[]
                },
                {
                    name : "shivprasad",
                    comment : "what a beautiful video",
                    replies :[]
                },
            ]
        },

    ];

  return (
    <div className='m-5 p-2'>
        <h1 className='font-bold text-lg'>Comments</h1>
        <CommentsList comments={commnets} />
    </div>
  )
}

export default Comments;