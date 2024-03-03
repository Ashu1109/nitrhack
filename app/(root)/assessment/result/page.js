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
        const storedResults = JSON.parse(localStorage.getItem("testResult"));
        console.log("output:", storedResults);
        // Update state with the retrieved results
        if (storedResults) {
            setAssessmentResults({
              anxiety: storedResults.anxiety || 0,
              depression: storedResults.depression || 0,
              adhd: storedResults.adhd || 0,
              // Add more categories as needed
            });
            console.log(assessmentResults);
        }
        
    }, []);

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
        </div>
      </div>
    );
}

export default Result;
