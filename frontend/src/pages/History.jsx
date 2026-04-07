import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPaths";

const History = () => {
  const [sessions, setSessions] = useState([]);
  const navigate = useNavigate();

  const fetchHistory = async () => {
    try {
      const response = await axiosInstance.get(API_PATHS.SESSION.GET_ALL);
      setSessions(response.data.sessions || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const loadHistory = async () => {
      await fetchHistory();
    };

    loadHistory();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6">Previous History</h1>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-left">Role</th>
              <th className="p-3 text-left">Experience</th>
              <th className="p-3 text-left">Created At</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {sessions.map((item, index) => (
              <tr key={item._id || index} className="border-b">
                <td className="p-3">{item.role}</td>
                <td className="p-3">{item.experience}</td>
                <td className="p-3">{new Date(item.createdAt).toLocaleDateString()}</td>
                <td className="p-3">
                  <button
                    onClick={() => navigate(`/interview/${item._id}`)}
                    className="bg-blue-600 text-white px-3 py-1 rounded-lg"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;