import { useState } from 'react';
import { SlHandbag } from "react-icons/sl";
import { FaPhone, FaUpload, FaFileInvoice, FaPen, FaCreditCard, FaTools, FaCheck, FaThumbsUp } from 'react-icons/fa';

const ProgressTracker = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
        { icon: <SlHandbag />, label: "200", percentage: "100%", days: "3 DAYS", description: "New" },
        { icon: <FaPhone />, label: "50", percentage: "70%", days: "12 DAYS", description: "Contact" },
        { icon: <FaUpload />, label: "30", percentage: "30%", days: "3 DAYS", description: "Upload Scope" },
        { icon: <FaFileInvoice />, label: "12", percentage: "40%", days: "3 DAYS", description: "Estimate" },
        { icon: <FaPen />, label: "15", percentage: "20%", days: "9 DAYS", description: "Sign Contract" },
        { icon: <FaCreditCard />, label: "2", percentage: "20%", days: "8 DAYS", description: "Payment" },
        { icon: <FaTools />, label: "8", percentage: "10%", days: "5 DAYS", description: "Installation" },
        { icon: <FaCheck />, label: "10", percentage: "10%", days: "8 DAYS", description: "Completed" },
        { icon: <FaThumbsUp />, label: "30", percentage: "10%", days: "8 DAYS", description: "Feedback" }
    ];

    return (
        <div className="container border-b-2">
            <div className="wrapper">
                {/* Labels for each step */}
                <div className="step-labels flex flex-row text-xs text-gray-700 justify-around  w-[93%] ml-[10%] mt-[2%] space-x-5">
                    {steps.map((step, index) => (
                        <p key={index} className={`p-2 ${currentStep === index ? 'font-bold text-blue-500' : ''}`}>
                            {step.description}
                        </p>
                    ))}
                </div>
                {/* Steps with icons and labels */}
                <div className="arrow-steps clearfix flex ml-[6%] mt-[-1%]">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`step p-5 ${currentStep === index ? 'current' : ''} ${currentStep > index ? 'done' : ''}`}
                        >
                            <span className=''>{step.icon} {step.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="step-labels flex flex-row text-gray-700 justify-around  w-[89%] ml-[5%] mt-[2%] space-x-5 border-2 border-red-500">
                    {steps.map((step, index) => (
                        <p key={index} className={`p-2 ${currentStep === index ? 'font-bold text-blue-500' : ''}`}>
                           <span className='text-black text-sm'> {step.percentage} </span> <span className='ml-0 text-gray-500 text-xs'> {step.days} </span>
                        </p>
                    ))}
                </div>

            {/* Footer - Active Leads and Completed */}
            <div className="footer flex justify-between items-center mt-[5%] mb-2">
                <span className="text-gray-500 text-xs ml-[6%]">120 Active Leads</span>
                <div className="flex items-center space-x-2 text-gray-500 text-xs font-bold mr-[4%]">
                    <FaCheck />
                    <span>COMPLETED (10)</span>
                </div>
            </div>
        </div>
    );
};

export default ProgressTracker;
