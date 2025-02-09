import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { FaPencilAlt } from 'react-icons/fa';

const SingleName = ({ name ,id,deleteitem,findval }) => {
  return (
    <>
      <div className="p-4 shadow-md rounded-md cursor-pointer ">
        <div className="flex items-center justify-between">
        <h1 className="font-bold inline-block bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent animate-fade-out">
  {name}
</h1>

          <div className='flex gap-4'>
          <FaPencilAlt  onClick={()=>findval(id)}className="text-red-500 cursor-pointer" />
          <FaTrash color='blue'  onClick={()=>deleteitem(id)}className="text-red-500 cursor-pointer" />
          </div>

        </div>
      </div>
    </>
  );
};

export default SingleName;
