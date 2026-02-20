import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { useAuth } from '../contexts/AuthContext';

const LoginPage = () => {
  const navigate = useNavigate();
  const { user, login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [error, setError] = useState('');

  React.useEffect(() => {
    if (user) {
      navigate('/home');
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = login(formData.email, formData.password);
    if (result.success) {
      navigate('/home');
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="min-h-screen bg-white px-6 pt-12 pb-8 flex flex-col max-w-md mx-auto">
      <div className="mb-6">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-700 hover:bg-gray-100 rounded-full transition-all">
          <span className="material-symbols-outlined text-[24px]">chevron_left</span>
        </button>
      </div>

      <div className="flex flex-col items-center mb-10 text-center">
        <div className="w-16 h-16 bg-[#007AFF] rounded-full flex items-center justify-center mb-6 shadow-xl shadow-blue-500/20">
          <span className="material-symbols-outlined text-white text-[32px]">local_mall</span>
        </div>
        <h2 className="text-[28px] font-extrabold text-[#0D141C] leading-tight">Welcome Back</h2>
        <p className="text-gray-500 text-sm mt-2">Log in to your account to continue</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {error && (
          <div className="bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-xl text-xs font-semibold animate-shake">
            {error}
          </div>
        )}
        <Input
          label="Email Address"
          name="email"
          type="email"
          placeholder="name@example.com"
          icon="mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="••••••••"
          icon="lock"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center gap-2 cursor-pointer">
            <input
              id="rememberMe"
              name="rememberMe"
              type="checkbox"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="w-4 h-4 text-blue-600 bg-gray-50 border-gray-200 rounded focus:ring-blue-500"
            />
            <label htmlFor="rememberMe" className="text-xs text-gray-600 font-medium select-none">Remember me</label>
          </div>
          <Link to="/forgot-password" weights="bold" className="text-xs text-blue-600 font-bold">Forgot Password?</Link>
        </div>

        <Button type="submit" className="mt-4">
          Log In
        </Button>
      </form>

      <div className="mt-10 flex items-center gap-4">
        <div className="h-px flex-1 bg-gray-100" />
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">OR CONTINUE WITH</span>
        <div className="h-px flex-1 bg-gray-100" />
      </div>

      <div className="mt-10 space-y-6">
        <Button variant="outline" className="flex items-center justify-center gap-3">
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335"/>
          </svg>
          Google
        </Button>

        <p className="text-center text-xs text-gray-500">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-600 font-bold underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
