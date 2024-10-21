import React from 'react'
import Commnet from './Commnet';

const CommentsList = ({comments}) => {
  return  comments.map((c, index)=>
    <div key={index}>
        <Commnet  data={c} />
        { c.replies && <div className='pl-5 border border-l-black ml-5'>
            <CommentsList comments={c.replies} />
        </div>}
    </div>
 );
}

export default CommentsList;
