import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, setPage } from "../redux/userSlice";
import { deleteUser } from "../redux/userSlice";
import EditUserModal from "../components/EditUserModal";


const UserList = () => {
  const dispatch = useDispatch();
  const { users, currentPage, totalPages, loading, error } = useSelector((state) => state.users);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchUsers(currentPage));
  }, [dispatch, currentPage]);

  const handlePageChange = (page) => {
    dispatch(setPage(page)); 
    dispatch(fetchUsers(page)); 
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">User Management</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search users..."
            className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <svg
            className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
  
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="grid grid-cols-12 gap-4 bg-gray-100 p-4 border-b border-gray-200">
          <div className="col-span-2 font-medium text-gray-600">User</div>
          <div className="col-span-4 font-medium text-gray-600">Email</div>
          <div className="col-span-3 font-medium text-gray-600">Status</div>
          <div className="col-span-3 font-medium text-gray-600 text-right">Actions</div>
        </div>
  
        {users.map((user) => (
          <div key={user.id} className="grid grid-cols-12 gap-4 items-center p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <div className="col-span-2 flex items-center">
              <img 
                src={user.avatar} 
                alt={user.first_name} 
                className="w-10 h-10 rounded-full object-cover mr-3"
              />
              <span className="font-medium text-gray-800">{user.first_name} {user.last_name}</span>
            </div>
            <div className="col-span-4 text-gray-600">{user.email}</div>
            <div className="col-span-3">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Active
              </span>
            </div>
            <div className="col-span-3 flex justify-end space-x-2">
              <button 
                onClick={() => handleEdit(user)}
                className="p-2 text-indigo-600 hover:text-indigo-900 hover:bg-indigo-50 rounded-lg transition-colors"
                title="Edit"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>
              <button 
                onClick={() => handleDelete(user.id)}
                className="p-2 text-red-600 hover:text-red-900 hover:bg-red-50 rounded-lg transition-colors"
                title="Delete"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
  
      <div className="flex items-center justify-between mt-6 px-4">
        <div className="text-sm text-gray-500">
          Showing page {currentPage} of {totalPages}
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md border ${currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
          >
            Previous
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md border ${currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  
    {isModalOpen && <EditUserModal user={selectedUser} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
  </div>
  );
};

export default UserList;
