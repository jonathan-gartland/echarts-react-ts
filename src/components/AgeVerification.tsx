import React, { useState, ReactNode } from 'react';

interface AgeVerificationProps {
  children: ReactNode;
}

const AgeVerification: React.FC<AgeVerificationProps> = ({ children }) => {
  const [isOver21, setIsOver21] = useState(false);

  const handleAgeVerification = (isOver21: boolean) => {
    setIsOver21(isOver21);
    // You might want to store this information in a cookie or local storage
  };

  return (
    <div className="" >
      {!isOver21 && (
        <div className=" flex flex-col items-center justify-center h-screen text-center" style={{ padding: 10}}>
          <h2 className="text-2xl font-bold mb-4">Age Verification</h2>
          <p className="mb-4">Are you 21 years of age or older?</p>
          <div className="flex space-x-4" style={{ position: 'relative'}}>
            <button className="px-4 py-2 bg-green-500 text-white rounded"
                    onClick={() => handleAgeVerification(true)}>Yes
            </button>
            <button className="px-4 py-2 bg-red-500 text-white rounded"
                    onClick={() => handleAgeVerification(false)}>No
            </button>
          </div>
        </div>
      )}
      {isOver21 && <>{children}</>}
    </div>
  );
};

export default AgeVerification;
