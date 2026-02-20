import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProfilePage = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const menuItems = [
    { icon: 'bookmark', label: 'Saved Promotions', color: 'text-blue-500' },
    { icon: 'history', label: 'Parking History', color: 'text-orange-500' },
    { icon: 'settings', label: 'App Settings', color: 'text-purple-500', path: '/settings' },
    { icon: 'help', label: 'Help & FAQ', color: 'text-green-500' },
  ];

  return (
    <div className="min-h-screen bg-white max-w-md mx-auto flex flex-col pt-12">
      <div className="px-6 flex justify-between items-center mb-10">
        <h1 className="text-[20px] font-bold text-gray-900">Profile</h1>
        <button className="p-2 -mr-2 text-gray-700 hover:bg-gray-100 rounded-full transition-all" onClick={() => navigate('/settings')}>
          <span className="material-symbols-outlined text-[24px]">settings</span>
        </button>
      </div>

      <div className="flex flex-col items-center mb-12">
        <div className="relative mb-4">
          <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center text-white text-[32px] font-bold shadow-xl shadow-blue-500/20 uppercase">
            {user?.initials || '??'}
          </div>
          <button className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full border border-gray-100 shadow-md flex items-center justify-center">
            <span className="material-symbols-outlined text-[18px] text-gray-600">photo_camera</span>
          </button>
        </div>
        <h2 className="text-[20px] font-bold text-gray-900">{user?.fullName || 'Guest User'}</h2>
        <p className="text-gray-400 text-xs mt-1">{user?.email || 'No email'}</p>
        <p className="text-gray-400 text-xs">{user?.phone || 'No phone'}</p>

        <button className="mt-6 px-6 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs font-bold text-gray-700 hover:bg-gray-100 transition-all">
          Edit Profile
        </button>
      </div>

      <div className="px-6 flex-1">
        <div className="space-y-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => item.path && navigate(item.path)}
              className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-all group active:scale-[0.99]"
            >
              <span className={`material-symbols-outlined ${item.color} text-[24px]`}>{item.icon}</span>
              <span className="flex-1 text-left text-sm font-semibold text-gray-700">{item.label}</span>
              <span className="material-symbols-outlined text-gray-300 group-hover:text-gray-400 transition-colors">chevron_right</span>
            </button>
          ))}
        </div>

        <button
          onClick={handleLogout}
          className="w-full mt-8 p-4 bg-orange-50 rounded-2xl flex items-center gap-4 text-orange-600 hover:bg-orange-100 transition-all active:scale-[0.99]"
        >
          <span className="material-symbols-outlined text-[24px]">logout</span>
          <span className="text-sm font-bold">Log Out</span>
        </button>
      </div>

      <div className="mt-auto px-6 py-6 border-t border-gray-50 flex justify-between items-center bg-white sticky bottom-0">
        <button onClick={() => navigate('/home')} className="flex flex-col items-center gap-1 text-gray-300">
          <span className="material-symbols-outlined">home</span>
          <span className="text-[10px] font-medium">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-300">
          <span className="material-symbols-outlined">map</span>
          <span className="text-[10px] font-medium">Map</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-300">
          <span className="material-symbols-outlined">explore</span>
          <span className="text-[10px] font-medium">Directory</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-blue-500">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px] font-medium">Account</span>
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
