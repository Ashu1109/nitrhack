"use client"
import React, { useEffect, useState } from 'react';
import ProgressBar from './bar';

const Result = () => {
    const [anxiety, setAnxiety] = useState(0);
    const [depression, setDepression] = useState(0);
    const [adhd, setAdhd] = useState(0);
    const [doctor, setDoctor] = useState(0);
    const [load, setLoad] = useState(0);

    useEffect(() => {
        // Retrieve assessment results from local storage
        const data1 = JSON.parse(localStorage.getItem('anxiety'));
        const data2 = JSON.parse(localStorage.getItem('depression'));
        const data3 = JSON.parse(localStorage.getItem('adhd'));
        const data4 = JSON.parse(localStorage.getItem('doctor'));
        // Update state with the retrieved results

            setAnxiety(data1);
            setDepression(data2);
            setAdhd(data3);
            setDoctor(data4);
            setLoad(1)


    }, [load]);

    return (
        <div className='flex justify-center items-center'>
            <div className="flex flex-col items-center justify-center w-[70vw] h-[70vh]">
                <h1 className="text-4xl font-semibold mb-6">Assessment Report</h1>
                {/* {console.log(assessmentResults.anxiety)}
                {console.log(assessmentResults)} */}
                <div className="flex flex-col justify-center items-center">
                    {/* Progress Bar 1 */}
                    <ProgressBar title="Anxiety" percentage={anxiety} color="bg-blue-500" />

                    {/* Progress Bar 2 */}
                    <ProgressBar title="Depression" percentage={depression} color="bg-green-500" />

                    {/* Progress Bar 3 */}
                    <ProgressBar title="ADHD" percentage={adhd} color="bg-orange-500" />

                    {/* Add more Progress Bars as needed */}
                </div>
                {(parseInt(doctor)>50) && <div className='text-teal-600 text-4xl mt-14 font-bold'>It is advised to visit a doctor asap.</div>}
            </div>
        </div>
    );
}

export default Result;
