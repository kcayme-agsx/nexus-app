import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';

const VerifyEmail = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white px-6 pt-12 pb-8 flex flex-col max-w-md mx-auto">
      <div className="mb-8">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-700 hover:bg-gray-100 rounded-full transition-all">
          <span className="material-symbols-outlined text-[24px]">chevron_left</span>
        </button>
      </div>

      <div className="flex flex-col items-center mb-10 text-center flex-1">
        <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-8 relative">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
            <span className="material-symbols-outlined text-[#007AFF] text-[36px]">mail</span>
          </div>
          <div className="absolute top-0 right-0 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center shadow-sm">
            <span className="material-symbols-outlined text-white text-[18px] font-bold">check</span>
          </div>
        </div>

        <h2 className="text-[28px] font-extrabold text-[#0D141C] leading-tight">Check your email!</h2>
        <p className="text-gray-500 text-sm mt-4 px-6 leading-relaxed">
          We've sent a verification link to<br />
          <span className="font-bold text-gray-900">user@example.com</span><br />
          Please click the link to secure your account.
        </p>

        <div className="w-full mt-10 space-y-6">
          <Button onClick={() => window.open('mailto:', '_blank')}>
            Open Email App
          </Button>

          <div className="text-center">
            <p className="text-xs text-gray-400">Didn't receive the email?</p>
            <button className="text-blue-600 text-xs font-bold underline mt-1">Resend Verification Email</button>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-gray-100" />
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">OR</span>
          <div className="h-px flex-1 bg-gray-100" />
        </div>

        <Button variant="outline" className="flex items-center justify-center gap-3" onClick={() => navigate('/home')}>
          Continue as Guest
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </Button>
      </div>
    </div>
  );
};

export default VerifyEmail;
