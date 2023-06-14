import { useState, useEffect } from "react";
import axios from "axios";
import ViewMessage from "./ViewMessage";
import CustomButton from "../CustomBtn";

interface Report {
  _id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  message: string;
}

function MessageCenter() {
  const [reports, setReports] = useState<Report[]>([]);
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);

  // Fetch Data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://tobi-contract-form.onrender.com/api/v1/message"
      );
      setReports(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };


  const openModal = (report: Report) => {
    setSelectedReport(report);
  };

  const closeModal = () => {
    setSelectedReport(null);
  };

  const getTruncatedText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  };

  return (
    <div className="bg-white shadow-md py-10 rounded-b-md px-6 w-[100vw]">
      <table className="table-auto w-full">
        <thead>
          <tr className="text-left h-[60px]">
            <th className="w-[15%] text-[12px]">First Name</th>
            <th className="w-[15%] text-[12px]">Last Name</th>
            <th className="w-[15%] text-[12px]">Email</th>
            <th className="w-[15%] text-[12px]">Phone No</th>
            <th className="w-[20%] text-[12px]">Message</th>
            <th className="text-end pr-6 w-[20%] text-[12px]">Action</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((item, index) => (
            <tr
              key={item._id}
              className={`${
                index % 2 === 0 ? "bg-[#E8E8E8]" : ""
              } h-[60px]`}
            >
              <td className="w-[15%] font-bold text-[12px] text-[#222222]">
                {item?.firstName}
              </td>
              <td className="w-[15%] text-[12px]">{item?.lastName}</td>
              <td className="text-[12px] w-[15%] text-[#8A8A8A]">
                {/* {item?.email} */}
                {getTruncatedText(item?.email, 20)}
              </td>
              <td className="text-[12px] w-[15%] text-[#8A8A8A]">
                {item?.phone}
              </td>
              <td className="text-[12px] w-[20%] text-[#8A8A8A]">
                {getTruncatedText(item?.message, 30)}
              </td>
              <td className="w-[20%] text-end pr-4">
                <CustomButton
                  text="View Report"
                  width="90px"
                  fontSize="12px"
                  onClick={() => openModal(item)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedReport && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <ViewMessage report={selectedReport} onClose={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
}

export default MessageCenter;
