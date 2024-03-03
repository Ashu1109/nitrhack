"use client"
import Link from "next/link"

const AboutPage = () => {
  return (
    <div className="w-full mx-auto m-auto bg-blue-300 px-4 py-8">
      <div className=" w-full">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
        <p className="text-gray-600 mt-2">Empowering mental wellness for everyone</p>
      </div>
      <div className="mb-8">
                <h2 className="text-4xl font-bold text-gray-800">Introduction</h2>
                 <p className=" mt-2 font-semibold rounded-xl text-[#201658] bg-blue-400 p-3">Welcome to <span className=" font-extrabold">Hack4Health</span>, your companion for mental well-being. Our app is designed to provide support, resources, and tools to help you navigate the complexities of mental health.</p>             </div>
                 <div className="mb-8">
                <h2 className="text-4xl font-bold text-gray-800">Our Mission</h2>
                <p className=" rounded-xl  font-semibold text-[#201658] bg-blue-400 p-3 mt-2">At <span className=" font-extrabold">Hack4Health</span>, our mission is to promote mental wellness and empower individuals to take control of their mental health journey. We strive to create a safe and inclusive space where everyone feels heard, supported, and understood.</p>
            </div>

            <div className="mb-8">
                <h2 className="text-4xl font-bold text-gray-800">What We Offer</h2>
                <ul className=" rounded-xl font-semibold  text-[#201658] bg-blue-400 p-3 mt-2">
                    <li>Supportive Community</li>
                    <li>Resources and Information</li>
                    <li>Tools and Exercises</li>
                    <li>Professional Support</li>
                </ul>
            </div>

            <div className="mb-8">
                <h2 className="text-4xl font-bold text-gray-800">Our Values</h2>
                <ul className="rounded-xl font-semibold  text-[#201658] bg-blue-400 p-3 mt-2">
                    <li>Empathy</li>
                    <li>Inclusivity</li>
                    <li>Privacy and Confidentiality</li>
                </ul>
            </div>

            <div className="mb-8">
                <h2 className="text-4xl font-bold text-gray-800">Get Involved</h2>
                <ul className="rounded-xl font-semibold  text-[#201658] bg-blue-400 p-3 mt-2">
                    <li>Share Your Story</li>
                    <li>Provide Feedback</li>
                    <li>Spread the Word</li>
                </ul>
            </div>

            <div className="mb-8">
                <h2 className="text-4xl font-bold text-gray-800">Contact Us</h2>
                <p className="rounded-xl font-semibold  text-[#201658] bg-blue-400 p-3 mt-2">Have questions, concerns, or feedback? We're here to help! Reach out to our team at [Contact Email/Phone] for assistance.</p>
            </div>

            <div className="mb-8">
                <h2 className="text-4xl font-bold text-gray-800">Stay Connected</h2>
                <div className="rounded-xl font-semibold  text-[#201658] bg-blue-400 p-3">
                <p className=" mt-2">Follow us on social media to stay updated on the latest news, events, and resources:</p>
                <ul>
                    <li><a href="">Facebook</a></li>
                    <li><a href="">Twitter</a></li>
                    <li><a href="">Instagram</a></li>
                    <li><a href="">LinkedIn</a></li>
                </ul>
                </div>
            </div>

            <div className="mb-8">
                <h2 className="text-4xl font-bold text-gray-800" >Thank You</h2>
                <p className="rounded-xl font-semibold  text-[#201658] bg-blue-400 p-3 mt-2">Thank you for choosing [App Name] as your mental health companion. Together, we can break the stigma surrounding mental health and create a supportive community where everyone feels valued and understood.</p>
            </div>

            
      </div>
      </div>
    
  );
};

export default AboutPage;
