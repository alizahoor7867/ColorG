import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import SingleName from "./SingleName";

const Inputs = () => {
  const [name, setname] = useState("");
  const [error, seterror] = useState(false);
  const [data, setdata]=useState([]);
  const [update,setupdate]=useState(false);
  const [id,setid]=useState(null);

  const handledata = () => {
    if (!name && name==name) {

        seterror(true);
        toast.error('please enter value')
    } else {
      console.log(name);
      toast.success(' value add successful');
      setdata([...data,{name,id:Date.now()}]);

    }
    setname("");
  };
  const deleteitem = (id)=>{


    let newdata=data?.filter((item,index)=>{

      return item?.id !==id;

    });
    setdata(newdata);
  }
  const findval=(id)=>{
    setid(id);
    setupdate(true)
    const foundval=data?.find((item,index)=>{
      return item?.id==id;

    })
    console.log(foundval);
    setname(foundval.name); 

  };
  const updatedata = (id) => {
    setdata((prevvalues) =>
      prevvalues.map((item) =>
        item.id === id ? { ...item, name: name } : item
      )
    );
    setupdate(false);
    setname('');
  };
  





  // useEffect(()=>{
  //   if(name.length>0){
  //       seterror(false);
  //   }

  // },[name])


  return (
    <>
      <div className="container rounded-md mx-auto p-4 shadow-lg w-full md:w-[40%]  ">
        <h1 className="text-center text-2xl">controll Input</h1>
        <form action="">
          <label htmlFor="">NAME</label>
          <input
            value={name}
            onChange={(e) => setname(e.target.value)}
            type="text"
            placeholder="enter your name"
            className=" my-2 w-full p-3 rounded-md  outline-0 border border-gray-300 focus:border-rose-600 "
          />
          {/* {error && <p className="font-semibold text-red-500"> please enter a value</p>} */}
          <button 
            onClick={update? ()=>updatedata(id):handledata}
            type="button"
            className={`  ${update?'bg-blue-500 p-2 hover:bg-yellow-400':'bg-red-700 p-2 '} hover:bg-red-900 font-semibold text-white w-full rounded-full`}
          >
            {update?'update data':'Add data'}
          </button>
        </form>
      </div>
      <div className="container grid grid-cols-4 gap-4 p-4 mx-auto">
        {data?.map((item,index)=>{

          return <SingleName  findval={findval} deleteitem={deleteitem} key={index} {...item} />

        })}

      </div>
    </>
  );
};

export default Inputs;
