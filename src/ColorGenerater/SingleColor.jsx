import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { BsCopy } from "react-icons/bs";
import { IoCheckmarkDone } from "react-icons/io5";

const SingleColor = ({ rgb, hex, index }) => {
    const [copy, setCopy] = useState(false);

    useEffect(() => {
        let timeout = setTimeout(() => {
            setCopy(false);
        }, 1000);

        return () => {
            clearTimeout(timeout);
        };
    }, [copy]);

    return (
        <>
            <div 
                style={{ backgroundColor: `rgb(${rgb})` }} 
                className="p-20 relative rounded-lg shadow-lg"
            >
                <h5 className={`${index >= 10 ? 'text-white ' : ''} font-semibold text-2xl`}>
                    #{hex}
                </h5>

                {copy ? (
                    <IoCheckmarkDone 
                        className="absolute right-5 top-5"
                        color='white'
                        size={25}
                    />
                ) : (
                    <BsCopy 
                        onClick={() => {
                            setCopy(true);
                            navigator.clipboard.writeText(`#${hex}`);
                            toast.success('Copied to clipboard');
                        }}
                        className="absolute right-5 top-5"
                        color='white'
                        size={25}
                    />
                )}
            </div>
        </>
    );
};

export default SingleColor;
