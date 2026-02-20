import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';

const StoreDetailsModal = ({ store, isOpen, onClose }) => {
  if (!isOpen || !store) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 transition-opacity duration-300">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-md bg-white dark:bg-background-dark rounded-t-[2rem] sm:rounded-[2rem] shadow-2xl overflow-hidden animate-in slide-in-from-bottom duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 z-10 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          <Icon name="close" className="text-[20px]" />
        </button>

        <div className="p-8">
          {/* Header with Logo */}
          <div className="flex items-center gap-5 mb-8">
            <div className="h-20 w-20 shrink-0 rounded-2xl bg-white p-2 shadow-inner flex items-center justify-center border border-slate-100 dark:border-slate-800">
              <img src={store.logo} alt={store.name} className="max-h-full max-w-full object-contain" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                {store.name}
              </h2>
              <span className="inline-block mt-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">
                {store.category}
              </span>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Location</span>
              <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 dark:text-slate-200">
                <Icon name="location_on" className="text-[18px] text-primary" />
                <span>Level {store.floor}, {store.zone}</span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Operating Hours</span>
              <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 dark:text-slate-200">
                <Icon name="schedule" className="text-[18px] text-orange-500" />
                <span>{store.hours}</span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</span>
              <div className="flex items-center gap-1.5">
                <span className={`h-2.5 w-2.5 rounded-full ${store.status === 'Open' ? 'bg-green-500 pulse-ring' : 'bg-red-500'}`} />
                <span className={`text-sm font-bold ${store.status === 'Open' ? 'text-green-500' : 'text-red-500'}`}>
                  {store.status}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Contact</span>
              <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 dark:text-slate-200">
                <Icon name="call" className="text-[18px] text-blue-500" />
                <span>{store.contact}</span>
              </div>
            </div>
          </div>

          {/* Distance Info */}
          <div className="mb-8 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center text-primary shadow-sm">
                <Icon name="directions_walk" />
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Distance from you</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">{store.distance}</p>
              </div>
            </div>
            <span className="text-xs font-bold text-primary">Est. 2 mins walk</span>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3">
            <Link
              to="/navigation"
              className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-primary font-bold text-white shadow-lg shadow-primary/30 transition-all hover:bg-blue-600 active:scale-[0.98]"
            >
              <Icon name="near_me" />
              Get Directions
            </Link>
            {store.hasPromos && (
              <Link
                to="/promos"
                className="flex h-14 w-full items-center justify-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all active:scale-[0.98]"
              >
                <Icon name="local_offer" className="text-orange-500" />
                View Promotions
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreDetailsModal;
