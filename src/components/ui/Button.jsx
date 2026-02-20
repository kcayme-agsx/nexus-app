import React from 'react';

const Button = ({ children, variant = "primary", icon, fullWidth = true, className = "", ...props }) => {
  const baseStyles = "flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-bold text-sm transition-all active:scale-[0.98]";
  const variants = {
    primary: "bg-[#007AFF] text-white hover:bg-[#0066D6] shadow-lg shadow-blue-500/20",
    outline: "bg-white border-2 border-gray-100 text-gray-700 hover:border-gray-200",
    ghost: "bg-transparent text-[#007AFF] hover:bg-blue-50"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {icon && typeof icon === 'string' ? (
        <span className="material-symbols-outlined text-[22px]">{icon}</span>
      ) : icon}
      {children}
    </button>
  );
};

export default Button;
