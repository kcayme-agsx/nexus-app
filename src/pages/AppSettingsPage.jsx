import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const AppSettingsPage = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [prefs, setPrefs] = useState({
    fashion: true,
    beauty: true,
    dining: false,
    electronics: false,
    push: true,
    deals: true,
    parking: false
  });

  const toggle = (key) => setPrefs(p => ({ ...p, [key]: !p[key] }));

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-white max-w-md mx-auto flex flex-col pt-12 pb-10">
      <div className="px-6 flex items-center gap-4 mb-8">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-700 hover:bg-gray-100 rounded-full transition-all">
          <span className="material-symbols-outlined text-[24px]">chevron_left</span>
        </button>
        <h1 className="text-[20px] font-bold text-gray-900">App Settings</h1>
      </div>

      <div className="px-6 space-y-8">
        {/* Shopping Preferences */}
        <section>
          <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Shopping Preferences</h3>
          <div className="space-y-4">
            {[
              { id: 'fashion', label: 'Fashion', icon: 'checkroom', color: 'text-blue-500' },
              { id: 'beauty', label: 'Beauty & Wellness', icon: 'spa', color: 'text-blue-500' },
              { id: 'dining', label: 'Dining', icon: 'restaurant', color: 'text-blue-500' },
              { id: 'electronics', label: 'Electronics', icon: 'devices', color: 'text-blue-500' }
            ].map(item => (
              <div key={item.id} className="flex items-center justify-between py-1">
                <div className="flex items-center gap-3">
                  <span className={`material-symbols-outlined ${item.color} text-[20px]`}>{item.icon}</span>
                  <span className="text-sm font-semibold text-gray-700">{item.label}</span>
                </div>
                <button onClick={() => toggle(item.id)}>
                  <span className={`material-symbols-outlined text-[24px] ${prefs[item.id] ? 'text-blue-500' : 'text-gray-100'}`}>
                    {prefs[item.id] ? 'check_circle' : 'circle'}
                  </span>
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Notifications */}
        <section>
          <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Notifications</h3>
          <div className="space-y-6">
            {[
              { id: 'push', label: 'Push Notifications', icon: 'notifications' },
              { id: 'deals', label: 'Exclusive Deals', icon: 'sell' },
              { id: 'parking', label: 'Parking Alerts', icon: 'local_parking' }
            ].map(item => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-blue-500 text-[20px]">{item.icon}</span>
                  <span className="text-sm font-semibold text-gray-700">{item.label}</span>
                </div>
                <button
                  onClick={() => toggle(item.id)}
                  className={`w-11 h-6 rounded-full relative transition-colors ${prefs[item.id] ? 'bg-blue-500' : 'bg-gray-200'}`}
                >
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${prefs[item.id] ? 'left-6' : 'left-1'}`} />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Privacy */}
        <section>
          <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Privacy</h3>
          <div className="space-y-6">
            {[
              { label: 'Location Access', icon: 'location_on', value: 'ALWAYS' },
              { label: 'Data Usage Policy', icon: 'description' },
              { label: 'Account Security', icon: 'security' }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-blue-500 text-[20px]">{item.icon}</span>
                  <span className="text-sm font-semibold text-gray-700">{item.label}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-300">
                  {item.value && <span className="text-[10px] font-bold text-gray-400 mr-2">{item.value}</span>}
                  <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="pt-4">
          <button className="w-full py-4 bg-red-50 text-red-500 rounded-2xl font-bold text-sm tracking-wide hover:bg-red-100 transition-all active:scale-[0.99]" onClick={handleLogout}>
            Sign Out
          </button>
          <div className="text-center mt-6">
            <p className="text-[10px] text-gray-300 font-bold tracking-widest uppercase">Version 2.4.0 (Build 892)</p>
          </div>
        </div>
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
        <button onClick={() => navigate('/profile')} className="flex flex-col items-center gap-1 text-blue-500">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px] font-medium">Account</span>
        </button>
      </div>
    </div>
  );
};

export default AppSettingsPage;
