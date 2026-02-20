import React from 'react';

const Input = ({ label, icon, type = "text", placeholder, value, onChange, optional, suffix, ...props }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <div className="flex justify-between items-center px-1">
        {label && <label className="text-sm font-semibold text-gray-700">{label}</label>}
        {optional && <span className="text-[10px] text-gray-400 font-medium tracking-wider uppercase">Optional</span>}
      </div>
      <div className="relative group">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
            <span className="material-symbols-outlined text-[20px]">{icon}</span>
          </div>
        )}
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full bg-gray-50 border border-gray-100 rounded-2xl py-3.5 ${icon ? 'pl-11' : 'px-5'} ${suffix || isPassword ? 'pr-11' : 'px-5'} text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all`}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">
              {showPassword ? 'visibility_off' : 'visibility'}
            </span>
          </button>
        )}
        {suffix && !isPassword && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
            {suffix}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
