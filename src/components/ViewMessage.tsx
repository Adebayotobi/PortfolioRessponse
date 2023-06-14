import React from 'react';
import CustomButton from '../CustomBtn';

interface ViewMessageProps {
  report: {
    _id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    message: string;
  } | null;
  onClose: () => void;
}

const ViewMessage: React.FC<ViewMessageProps> = ({ report, onClose }) => {
  if (!report) {
    return null; 
  }

  return (
    <div className="flex flex-col justify-center w-[90vw] md:w-[60vw] lg:w-[40vw] z-50">
      <div className="flex items-end justify-end p-6">
        {/* <h2>
          Report - <span>{report._id}</span>
        </h2> */}
        <CustomButton text="Close" onClick={onClose} width='100px'/>
      </div>
      <div className="flex flex-col ">
        <div>
        <h2 className='text-[16px] font-bold'>First Name:</h2>
          <h2 className="mb-6 text-sm">{report.firstName}</h2>
        </div>
        <div>
        <h2 className='text-[16px] font-bold'>Last Name:</h2>
          <h2 className="mb-6 text-sm">{report.lastName}</h2>
        </div>
      </div>
      <div className="my-4 text-[12px]">
        <h2 className='text-[16px] font-bold'>Email:</h2>
        <p className='text-sm'>{report.email}</p>
      </div>
      <div className="my-4 text-[12px]">
        <h2 className='text-[16px] font-bold'>Phone Number:</h2>
        <p className='text-sm'>{report.phone}</p>
      </div>
      <div className="my-4 text-[12px]">
        <h2 className='text-[16px] font-bold'>Message:</h2>
        <p className='text-sm'>{report.message}</p>
      </div>
      <div className="flex justify-end">
        <CustomButton text="Okay" width="150px" onClick={onClose} />
      </div>
    </div>
  );
};

export default ViewMessage;
