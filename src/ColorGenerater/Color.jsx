import React, { useEffect, useState } from "react";
import Values from "values.js";
import { IoMdWarning } from "react-icons/io";
import SingleColor from "./SingleColor";

const color = () => {
  const [color, setcolor] = useState("");
  const [error, seterror] = useState(false);
  const [list, setlist] = useState([]);

  const gencolor = () => {
    try {
      let colorval = new Values(color).all(10);
      setlist(colorval);
      console.log(colorval);
      seterror(false);
    } catch (error) {
      seterror(true);
    };

//     useEffect(() => {
// //         try {
// //             let colorval = new Values(color).all(10);
// //             setlist(colorval);
// //             console.log(colorval);
// //             seterror(false);
// //           } catch (error) {
// //             seterror(true);
// //           }
// //     },[color]);


useEffect(()=>{
    let colorval = new Values("blue").all(10);
    setlist(colorval);
},[]);
   };
  return (
    <>
      <div className="p-[0.1rem] bg-gradient-to-l from-indigo-500 to-purple-600 w-[90%] lg:w-3/5 sm:4/5 xl:w-2/5 my-5 mx-auto rounded-md">
        <div className="container bg-white rounded-md | p-5 shadow-lg ">
          <form
            onSubmit={(e) => e.preventDefault()}
            onKeyDown={(e) => e.key === "Enter" && gencolor()}
          >
            <div className="relative">
              <input
                value={color}
                onChange={(e) => setcolor(e.target.value)}
                type="text"
                placeholder="e.g blue"
                className={`w-full bg-gray-300 text-gray-500 p-3 rounded-full mt-2 border border-blue outline-0 focus:border-green-500
                   ${error && `border border-red-700`} `}
              />
              {error && (
                <IoMdWarning
                  className="absolute right-3 justify-center items-center mx-auto  top-[50%] -translate-y-[50%]"
                  size={20}
                  color="red"
                />
              )}
            </div>

            <button
              onClick={gencolor}
              type="button"
              className="mt-5 rounded-full w-full p-2 bg-yellow-500"
            >
              GenerateColor
            </button>
          </form>
        </div>
      </div>

      <div className="contaier grid mx-auto my-3 gap-4 grid-cols-2 sm:grid-cols-3 xl:grid-cols-4">
        {list?.map((item, index) => {
          return <SingleColor index={index} hex={item.hex} key={index} {...item} />;
        })}
      </div>
    </>
  );
};

export default color;
