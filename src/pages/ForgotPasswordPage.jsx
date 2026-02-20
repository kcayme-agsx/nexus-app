import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate navigation to verification or success
    alert('Reset link sent to ' + email);
  };

  return (
    <div className="min-h-screen bg-white px-6 pt-12 pb-8 flex flex-col max-w-md mx-auto">
      <div className="mb-8">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-700 hover:bg-gray-100 rounded-full transition-all">
          <span className="material-symbols-outlined text-[24px]">chevron_left</span>
        </button>
      </div>

      <div className="flex flex-col items-center mb-10 text-center">
        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
            <span className="material-symbols-outlined text-[#007AFF] text-[28px]">restore</span>
          </div>
        </div>
        <h2 className="text-[28px] font-extrabold text-[#0D141C] leading-tight">Reset Your Password</h2>
        <p className="text-gray-500 text-sm mt-4 px-4 leading-relaxed">
          Enter the email address associated with your account and we'll send you a link to reset your password.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <Input
          label="Email Address"
          placeholder="name@example.com"
          type="email"
          icon="mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div className="flex flex-col gap-6 items-center">
          <Button type="submit">
            Send Reset Link
          </Button>

          <button
            type="button"
            onClick={() => navigate('/login')}
            className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            Back to Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
