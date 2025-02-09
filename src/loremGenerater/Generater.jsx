import React, { useEffect, useState } from 'react';
import { lorem } from './lorem';

const Generater = () => {
  const [data, setData] = useState([]);
  const [number, setNumber] = useState();
  const [error,seterror]=useState(false);

  const handleSlice = () => {
    if(number<0 ||number> lorem.length){
        seterror(true);
        return;
    }
    let sliceNumber = lorem.slice(0, number);
    setData(sliceNumber);
    seterror(false);

  };
  
  useEffect(()=>{
    if(number<0 ||number> lorem.length){
        seterror(true);
        setData([]);
    }
    else
    {
        seterror(false)
    }

  },[number])
  return (
    <>
      <div className="container w-2/5 p-5 shadow-md bg-white-to-l from-red-600 to-blue-400 mx-auto">
        <form>
          <input
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            type="number"
            placeholder="Enter a number"
            className="w-full bg-gray-300 text-gray-500 p-3 rounded-full mt-2 border border-blue outline-0 focus:border-green-500"
          />
          {error &&
          <p className='text-red-600 font-bold'> 
          text shound be between 1 {lorem.length}
          </p>
          }
          <button
            type="button"
            onClick={handleSlice}
            className="mt-5 rounded-full w-full p-2 bg-yellow-500"
          >
            Generate
          </button>
        </form>
      </div>

      <div className="container mx-auto m-3 shadow-md">
        {data?.map((item, index) => {
          return (
            <p
            key={index}
            className="gap-3 shadow-md p-3 hover:shadow-lg my-2 border border-red-500 bg-gray-200 transition-all duration-500 ease-in-out transform hover:scale-105 hover:bg-gray-300"
          >
            {item}
          </p>
          
          );
        })}
      </div>
    </>
  );
};

export default Generater;
