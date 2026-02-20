import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import ThemeToggle from "../components/ThemeToggle";
import StoreDetailsModal from "../components/StoreDetailsModal";
import { stores } from "../data/stores";

const floors = ["5", "4", "3", "2", "G"];
const activeFloor = "3";

export default function MapPage() {
  const [selectedStore, setSelectedStore] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleStoreClick = (storeId) => {
    const store = stores.find(s => s.id === storeId);
    if (store) {
      setSelectedStore(store);
      setIsModalOpen(true);
    }
  };

  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-white dark:bg-background-dark text-slate-900 dark:text-slate-100">
      {/* Map Area */}
      <main className="relative w-full flex-1 overflow-hidden bg-slate-100 dark:bg-[#1a2632]">
        {/* Map Background */}
        <div className="absolute inset-0 h-full w-full overflow-hidden bg-slate-50 dark:bg-[#111820]">
          <div
            className="absolute inset-0 opacity-20 dark:opacity-10"
            style={{
              backgroundImage: "radial-gradient(#94a3b8 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Map Container */}
          <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2">
            {/* Hallways */}
            <div className="absolute left-[100px] top-[200px] h-[100px] w-[600px] rounded-lg bg-slate-200 dark:bg-[#2a3642]" />
            <div className="absolute left-[350px] top-[300px] h-[300px] w-[100px] rounded-lg bg-slate-200 dark:bg-[#2a3642]" />
            <div className="absolute left-[100px] top-[500px] h-[100px] w-[600px] rounded-lg bg-slate-200 dark:bg-[#2a3642]" />

            {/* Uniqlo (Active) */}
            <div
              onClick={() => handleStoreClick('uniqlo')}
              className="absolute left-[100px] top-[60px] flex h-[130px] w-[200px] cursor-pointer items-center justify-center rounded-lg border-2 border-primary bg-primary/10 dark:bg-[#22303c] shadow-[0_0_20px_rgba(13,127,242,0.15)] dark:shadow-[0_0_20px_rgba(13,127,242,0.3)] transition-all hover:bg-primary/15 dark:hover:bg-[#2c3e4f] hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="text-lg font-semibold tracking-wide text-primary dark:text-white font-serif italic">
                UNIQLO
              </span>
            </div>
            {/* H&M */}
            <div
              onClick={() => handleStoreClick('hm')}
              className="absolute left-[310px] top-[60px] flex h-[130px] w-[180px] cursor-pointer items-center justify-center rounded-lg border border-transparent bg-white dark:bg-surface-dark shadow-sm dark:shadow-none transition-all hover:border-slate-300 dark:hover:border-slate-600 hover:scale-[1.02]"
            >
              <span className="font-medium text-slate-500 dark:text-slate-400">H&M</span>
            </div>
            {/* Samsung */}
            <div
              onClick={() => handleStoreClick('samsung')}
              className="absolute left-[500px] top-[60px] flex h-[130px] w-[150px] cursor-pointer items-center justify-center rounded-lg border border-transparent bg-white dark:bg-surface-dark shadow-sm dark:shadow-none transition-all hover:border-slate-300 dark:hover:border-slate-600 hover:scale-[1.02]"
            >
              <span className="font-medium text-slate-500 dark:text-slate-400">Samsung</span>
            </div>
            {/* Food Court */}
            <div className="absolute left-[100px] top-[610px] flex h-[140px] w-[340px] items-center justify-center rounded-lg border border-transparent bg-white dark:bg-surface-dark shadow-sm dark:shadow-none transition-colors hover:border-slate-300 dark:hover:border-slate-600">
              <div className="flex flex-col items-center gap-1">
                <Icon name="restaurant" className="text-slate-400 dark:text-slate-500" />
                <span className="font-medium text-slate-500 dark:text-slate-400">Food Court</span>
              </div>
            </div>
            {/* Cinema */}
            <div className="absolute left-[450px] top-[610px] flex h-[140px] w-[200px] items-center justify-center rounded-lg border border-transparent bg-white dark:bg-surface-dark shadow-sm dark:shadow-none transition-colors hover:border-slate-300 dark:hover:border-slate-600">
              <div className="flex flex-col items-center gap-1">
                <Icon name="movie" className="text-slate-400 dark:text-slate-500" />
                <span className="font-medium text-slate-500 dark:text-slate-400">Cinema</span>
              </div>
            </div>

            {/* POI Icons */}
            <div className="absolute left-[460px] top-[320px] flex flex-col items-center gap-1">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 dark:bg-[#2a3642] text-slate-500 dark:text-slate-400">
                <Icon name="wc" className="text-[18px]" />
              </div>
            </div>
            <div className="absolute left-[310px] top-[320px] flex flex-col items-center gap-1">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 dark:bg-[#2a3642] text-slate-500 dark:text-slate-400">
                <Icon name="elevator" className="text-[18px]" />
              </div>
            </div>

            {/* User Location */}
            <div className="absolute left-[390px] top-[400px] z-20 flex h-6 w-6 items-center justify-center">
              <div className="pulse-ring" />
              <div className="relative z-10 h-3 w-3 rounded-full border-2 border-white bg-primary shadow-[0_0_10px_#0d7ff2]" />
            </div>

            {/* Path Line */}
            <svg className="pointer-events-none absolute inset-0 z-10" width="800" height="800">
              <path
                d="M 402 400 L 402 250 L 200 250 L 200 200"
                fill="none"
                stroke="#0d7ff2"
                strokeWidth="3"
                strokeDasharray="6 4"
                strokeLinecap="round"
              />
              <circle cx="200" cy="200" r="4" fill="#0d7ff2" />
            </svg>
          </div>
        </div>

        {/* Search Bar */}
        <div className="absolute left-0 right-0 top-0 z-30 bg-linear-to-b from-slate-100/90 dark:from-background-dark/90 to-transparent px-4 pb-2 pt-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 flex-1 items-center rounded-full border border-slate-200 dark:border-slate-700/50 bg-white/90 dark:bg-[#22303c]/90 px-4 shadow-lg backdrop-blur-md">
              <Icon name="search" className="mr-2 text-slate-500 dark:text-slate-400" />
              <input
                type="text"
                placeholder="Search stores, dining, or facilities..."
                className="w-full border-none bg-transparent text-sm font-medium text-slate-900 dark:text-slate-200 placeholder-slate-500 focus:ring-0"
              />
              <button className="rounded-full p-1 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700/50">
                <Icon name="mic" className="text-[20px]" />
              </button>
            </div>
            <ThemeToggle className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700/50 bg-white/90 dark:bg-[#22303c]/90 text-slate-600 dark:text-slate-400 shadow-lg backdrop-blur-md transition-colors hover:bg-slate-100 dark:hover:bg-slate-700/50" />
            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700/50 bg-white/90 dark:bg-[#22303c]/90 text-slate-600 dark:text-slate-400 shadow-lg backdrop-blur-md transition-colors hover:bg-slate-100 dark:hover:bg-slate-700/50 hover:text-slate-900 dark:hover:text-white">
              <Icon name="tune" />
            </button>
          </div>
        </div>

        {/* Floor Selector */}
        <div className="absolute right-4 top-1/2 z-30 flex -translate-y-1/2 flex-col gap-2">
          <div className="flex flex-col gap-1 rounded-full border border-slate-200 dark:border-slate-700/50 bg-white/80 dark:bg-[#22303c]/80 p-1.5 shadow-lg backdrop-blur-md">
            {floors.map((floor) => (
              <button
                key={floor}
                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                  floor === activeFloor
                    ? "bg-primary text-white shadow-md shadow-blue-500/30"
                    : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700/50"
                }`}
              >
                {floor}
              </button>
            ))}
          </div>
        </div>

        {/* Map Controls */}
        <div className="absolute bottom-28 right-4 z-30 flex flex-col gap-3">
          <button className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700/50 bg-white/90 dark:bg-[#22303c]/90 text-primary shadow-lg backdrop-blur-md transition-colors hover:bg-slate-100 dark:hover:bg-slate-700/50">
            <Icon name="my_location" />
          </button>
          <div className="flex flex-col overflow-hidden rounded-full border border-slate-200 dark:border-slate-700/50 bg-white/90 dark:bg-[#22303c]/90 shadow-lg backdrop-blur-md">
            <button className="flex h-12 w-12 items-center justify-center border-b border-slate-200 dark:border-slate-700/50 text-slate-700 dark:text-slate-200 transition-colors hover:bg-slate-100 dark:hover:bg-slate-700/50">
              <Icon name="add" />
            </button>
            <button className="flex h-12 w-12 items-center justify-center text-slate-700 dark:text-slate-200 transition-colors hover:bg-slate-100 dark:hover:bg-slate-700/50">
              <Icon name="remove" />
            </button>
          </div>
        </div>
      </main>

      {/* Store Details Modal */}
      <StoreDetailsModal
        store={selectedStore}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Bottom Navigation */}
      <div className="z-50 border-t border-slate-200 dark:border-surface-highlight bg-white dark:bg-[#182634] px-4 pb-6 pt-2">
        <div className="mx-auto flex max-w-md items-center justify-between">
          <Link to="/home" className="group flex flex-1 flex-col items-center justify-center gap-1">
            <div className="flex h-8 items-center justify-center text-slate-400 dark:text-text-secondary transition-colors group-hover:text-primary dark:group-hover:text-white">
              <Icon name="home" />
            </div>
            <p className="text-[10px] font-medium leading-normal tracking-wide text-slate-400 dark:text-text-secondary transition-colors group-hover:text-primary dark:group-hover:text-white">
              Home
            </p>
          </Link>
          <Link to="/map" className="group flex flex-1 flex-col items-center justify-center gap-1">
            <div className="relative flex h-8 items-center justify-center text-primary">
              <Icon name="map" filled />
              <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full border-2 border-white dark:border-[#182634] bg-red-500" />
            </div>
            <p className="text-[10px] font-medium leading-normal tracking-wide text-primary">
              Map
            </p>
          </Link>
          <Link to="/promos" className="group flex flex-1 flex-col items-center justify-center gap-1">
            <div className="flex h-8 items-center justify-center text-slate-400 dark:text-text-secondary transition-colors group-hover:text-primary dark:group-hover:text-white">
              <Icon name="local_offer" />
            </div>
            <p className="text-[10px] font-medium leading-normal tracking-wide text-slate-400 dark:text-text-secondary transition-colors group-hover:text-primary dark:group-hover:text-white">
              Promos
            </p>
          </Link>
          <Link to="/profile" className="group flex flex-1 flex-col items-center justify-center gap-1">
            <div className="flex h-8 items-center justify-center text-slate-400 dark:text-text-secondary transition-colors group-hover:text-primary dark:group-hover:text-white">
              <Icon name="person" />
            </div>
            <p className="text-[10px] font-medium leading-normal tracking-wide text-slate-400 dark:text-text-secondary transition-colors group-hover:text-primary dark:group-hover:text-white">
              Profile
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
