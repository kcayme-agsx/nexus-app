import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { useAuth } from '../contexts/AuthContext';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Persist registered user data
    register({
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      password: formData.password
    });
    // Navigate directly to home instead of verify-email
    navigate('/home');
  };

  const calculateStrength = (pass) => {
    let score = 0;
    if (!pass) return 0;
    if (pass.length > 5) score++;
    if (pass.length >= 8) score++;
    if (/[A-Z]/.test(pass) && /[a-z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[^A-Za-z0-9]/.test(pass)) score++;
    return Math.min(4, score);
  };

  const strength = calculateStrength(formData.password);
  const strengthLabels = ['Very Weak', 'Weak', 'Moderate', 'Strong', 'Very Strong'];
  const strengthColors = ['bg-gray-100', 'bg-red-400', 'bg-orange-400', 'bg-blue-400', 'bg-green-500'];
  const textColor = strength === 0 ? 'text-gray-400' : strength <= 2 ? 'text-orange-500' : 'text-primary';

  return (
    <div className="min-h-screen bg-white px-6 pt-12 pb-8 flex flex-col max-w-md mx-auto">
      <div className="mb-8">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-700 hover:bg-gray-100 rounded-full transition-all">
          <span className="material-symbols-outlined text-[24px]">chevron_left</span>
        </button>
        <h1 className="text-[20px] font-bold text-gray-900 mt-4">Create Account</h1>
      </div>

      <div className="mb-8">
        <h2 className="text-[28px] font-extrabold text-[#0D141C] leading-tight">Join SM Malls</h2>
        <p className="text-gray-500 text-sm mt-2 leading-relaxed">
          Create an account to enjoy exclusive rewards and smarter shopping experiences.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <Input
          label="Full Name"
          name="fullName"
          placeholder="Juan Dela Cruz"
          icon="person"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
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
          label="Phone Number"
          name="phone"
          placeholder="0917 XXX XXXX"
          icon="call"
          optional
          value={formData.phone}
          onChange={handleChange}
        />
        <div className="flex flex-col gap-2">
          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Min. 8 characters"
            icon="lock"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {/* Functional Password Strength Indicator */}
          <div className="flex flex-col gap-1.5 px-1 mt-1">
            <div className="flex gap-1.5">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                    i <= strength ? strengthColors[strength] : 'bg-gray-100'
                  }`}
                />
              ))}
            </div>
            <p className="text-[10px] text-gray-500 font-medium tracking-wide transition-all">
              Strength: <span className={`font-bold ${textColor}`}>{strengthLabels[strength]}</span>
            </p>
          </div>
        </div>
        <Input
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          placeholder="Repeat your password"
          icon="lock"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <div className="flex items-start gap-3 mt-1 cursor-pointer">
          <div className="relative flex items-center h-5">
            <input
              id="agreeToTerms"
              name="agreeToTerms"
              type="checkbox"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="w-4 h-4 text-blue-600 bg-gray-50 border-gray-200 rounded focus:ring-blue-500"
            />
          </div>
          <label htmlFor="agreeToTerms" className="text-xs text-gray-600 leading-normal">
            I agree to the <span className="text-blue-600 font-semibold underline">Terms of Service</span> and <span className="text-blue-600 font-semibold underline">Privacy Policy</span>
          </label>
        </div>

        <Button type="submit" className="mt-4">
          Create Account
        </Button>
      </form>

      <div className="mt-8 flex items-center gap-4">
        <div className="h-px flex-1 bg-gray-100" />
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">OR</span>
        <div className="h-px flex-1 bg-gray-100" />
      </div>

      <div className="mt-8 space-y-6">
        <Button variant="outline" className="flex items-center justify-center gap-3">
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335"/>
          </svg>
          Sign up with Google
        </Button>

        <p className="text-center text-xs text-gray-500">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 font-bold underline">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
