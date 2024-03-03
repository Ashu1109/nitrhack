"use client"
import React, { useEffect, useState } from 'react';
import ProgressBar from './bar';

const Result = () => {
    const [assessmentResults, setAssessmentResults] = useState({
      anxiety: 0,
      depression: 0,
      adhd: 0,
      // Add more categories as needed
    });

    useEffect(() => {
        // Retrieve assessment results from local storage

        const data1 = JSON.parse(localStorage.getItem('anxiety'));
        const data2 = JSON.parse(localStorage.getItem('depression'));
        const data3 = JSON.parse(localStorage.getItem('adhd'));
        const data4 = JSON.parse(localStorage.getItem('doctor'));

        setAnxiety(data1);
        setDepression(data2);
        setAdhd(data3);
        setDoctor(data4);
        setLoad(1)


    }, [load]);
    // Update state with the retrieved results
    // if (storedResults) {
    // setAssessmentResults({
    //     anxiety:
    //         Number(
    //             JSON.parse(JSON.stringify(storedResults))
    //                 .split(",")[10]
    //                 .split(":")[1]
    //         ) || 0,
    //     depression:
    //         Number(
    //             JSON.parse(JSON.stringify(storedResults))
    //                 .split(",")[9]
    //                 .split(":")[1]
    //         ) || 0,
    //     adhd:
    //         Number(
    //             JSON.parse(JSON.stringify(storedResults))
    //                 .split(",")[11]
    //                 .split(":")[1]
    //         ) || 0,
    // });
    // console.log(JSON.parse(JSON.stringify(storedResults)).split(","));
    // }

    // }, []);


    return (
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center justify-center w-[70vw] h-[70vh]">
          <h1 className="text-4xl font-semibold mb-6">Assessment Report</h1>

          <div className="flex flex-col justify-center items-center">
            {/* Progress Bar 1 */}
            <ProgressBar
              title="Anxiety"
              percentage={assessmentResults.anxiety}
              color="bg-blue-500"
            />

            {/* Progress Bar 2 */}
            <ProgressBar
              title="Depression"
              percentage={assessmentResults.depression}
              color="bg-green-500"
            />


            {/* Progress Bar 3 */}
            <ProgressBar
              title="ADHD"
              percentage={assessmentResults.adhd}
              color="bg-orange-500"
            />

            {/* Add more Progress Bars as needed */}
          </div>

                    {/* Add more Progress Bars as needed */}
                </div>
                {(parseInt(doctor) > 50) && <div className='text-teal-600 text-4xl mt-14 font-bold'>It is advised to visit a doctor asap.</div>}
            </div>

        </div>
      </div>
    );
}

export default Result;
