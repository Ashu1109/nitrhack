import React from 'react';


const ProgressBar = ({ percentage, title }) => {
    return (
        <div className="relative pt-1 w-[70vw]">
            <div className="flex mb-2 items-center justify-between">
                <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                        {`${title}`}
                    </span>
                </div>
                <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-teal-600">
                        {percentage}%
                    </span>
                </div>
            </div>
            <div className="flex h-10 mb-4 overflow-hidden text-xs bg-black rounded-xl">
                <div
                    style={{ width: `${percentage}%` }}
                    className="flex flex-col justify-center bg-teal-500 text-white shadow-none whitespace-nowrap"
                ></div>
            </div>
        </div>
    );
};


export default ProgressBar;