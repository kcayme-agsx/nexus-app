import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import ThemeToggle from "../components/ThemeToggle";
import StoreDetailsModal from "../components/StoreDetailsModal";
import { stores } from "../data/stores";

const floors = ["5", "4", "3", "2", "G"];

const floorLayouts = {
  G: {
    label: "Ground Floor",
    hallways: [
      { left: 100, top: 220, width: 550, height: 120 },
      { left: 300, top: 340, width: 100, height: 200 },
      { left: 100, top: 540, width: 550, height: 80 },
    ],
    stores: [
      { id: "guest-services", name: "Guest Services", left: 100, top: 60, width: 250, height: 150, highlighted: true, icon: "info" },
      { id: "starbucks", name: "Starbucks", left: 360, top: 60, width: 170, height: 150 },
      { id: "watsons", name: "Watsons", left: 540, top: 60, width: 160, height: 150 },
      { id: "bpi", name: "BPI", left: 100, top: 630, width: 240, height: 130, icon: "account_balance" },
      { id: "parking", name: "Parking", left: 410, top: 630, width: 240, height: 130, icon: "local_parking" },
    ],
    pois: [
      { icon: "atm", left: 460, top: 400 },
      { icon: "info", left: 340, top: 400 },
      { icon: "escalator", left: 170, top: 400 },
    ],
  },
  2: {
    label: "Fashion Hall",
    hallways: [
      { left: 100, top: 200, width: 600, height: 80 },
      { left: 100, top: 280, width: 80, height: 230 },
      { left: 100, top: 510, width: 600, height: 80 },
      { left: 620, top: 280, width: 80, height: 230 },
    ],
    stores: [
      { id: "hm", name: "H&M", left: 100, top: 60, width: 220, height: 130, highlighted: true },
      { id: "zara", name: "Zara", left: 330, top: 60, width: 180, height: 130 },
      { id: "nike", name: "Nike", left: 520, top: 60, width: 180, height: 130 },
      { id: "forever21", name: "Forever 21", left: 190, top: 300, width: 160, height: 200 },
      { id: "cotton-on", name: "Cotton On", left: 450, top: 300, width: 160, height: 200 },
    ],
    pois: [
      { icon: "wc", left: 370, top: 370 },
      { icon: "escalator", left: 660, top: 370 },
    ],
  },
  3: {
    label: "Main Wing",
    hallways: [
      { left: 100, top: 200, width: 600, height: 100 },
      { left: 350, top: 300, width: 100, height: 300 },
      { left: 100, top: 500, width: 600, height: 100 },
    ],
    stores: [
      { id: "uniqlo", name: "UNIQLO", left: 100, top: 60, width: 200, height: 130, highlighted: true, serif: true },
      { id: "hm", name: "H&M", left: 310, top: 60, width: 180, height: 130 },
      { id: "samsung", name: "Samsung", left: 500, top: 60, width: 150, height: 130 },
      { id: "food court", name: "Food Court", left: 100, top: 610, width: 340, height: 140, icon: "restaurant" },
      { id: "cinema", name: "Cinema", left: 450, top: 610, width: 200, height: 140, icon: "movie" },
    ],
    pois: [
      { icon: "wc", left: 460, top: 320 },
      { icon: "elevator", left: 310, top: 320 },
    ],
    userLocation: { left: 390, top: 400 },
    path: "M 402 400 L 402 250 L 200 250 L 200 200",
    pathEnd: { cx: 200, cy: 200 },
  },
  4: {
    label: "Cyberzone",
    hallways: [
      { left: 100, top: 180, width: 550, height: 80 },
      { left: 300, top: 260, width: 100, height: 280 },
      { left: 100, top: 540, width: 550, height: 80 },
    ],
    stores: [
      { id: "samsung", name: "Samsung", left: 100, top: 50, width: 190, height: 120 },
      { id: "apple", name: "Apple", left: 300, top: 50, width: 200, height: 120, highlighted: true },
      { id: "sony", name: "Sony", left: 510, top: 50, width: 140, height: 120 },
      { id: "miniso", name: "Miniso", left: 100, top: 630, width: 220, height: 130 },
      { id: "power-mac", name: "Power Mac", left: 430, top: 630, width: 220, height: 130 },
    ],
    pois: [
      { icon: "elevator", left: 340, top: 380 },
      { icon: "wc", left: 200, top: 380 },
    ],
  },
  5: {
    label: "Entertainment",
    hallways: [
      { left: 150, top: 240, width: 500, height: 100 },
      { left: 350, top: 340, width: 100, height: 200 },
      { left: 150, top: 540, width: 500, height: 80 },
    ],
    stores: [
      { id: "timezone", name: "Timezone", left: 100, top: 50, width: 260, height: 180, highlighted: true, icon: "sports_esports" },
      { id: "fitness-first", name: "Fitness First", left: 380, top: 50, width: 270, height: 180, icon: "fitness_center" },
      { id: "national-bookstore", name: "National Bookstore", left: 100, top: 630, width: 280, height: 130, icon: "menu_book" },
      { id: "spa", name: "Spa & Wellness", left: 400, top: 630, width: 250, height: 130, icon: "spa" },
    ],
    pois: [
      { icon: "emergency", left: 500, top: 400 },
      { icon: "wc", left: 200, top: 400 },
    ],
  },
};

export default function MapPage() {
  const [activeFloor, setActiveFloor] = useState("3");
  const [selectedStore, setSelectedStore] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const layout = floorLayouts[activeFloor];

  const handleStoreClick = (storeId) => {
    const store = stores.find((s) => s.id === storeId);
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
            {layout.hallways.map((h, i) => (
              <div
                key={`h-${i}`}
                className="absolute rounded-lg bg-slate-200 dark:bg-[#2a3642]"
                style={{ left: h.left, top: h.top, width: h.width, height: h.height }}
              />
            ))}

            {/* Stores */}
            {layout.stores.map((store) => (
              <div
                key={store.id}
                onClick={() => handleStoreClick(store.id)}
                className={`absolute flex cursor-pointer items-center justify-center rounded-lg transition-all hover:scale-[1.02] active:scale-[0.98] ${
                  store.highlighted
                    ? "border-2 border-primary bg-primary/10 dark:bg-[#22303c] shadow-[0_0_20px_rgba(13,127,242,0.15)] dark:shadow-[0_0_20px_rgba(13,127,242,0.3)] hover:bg-primary/15 dark:hover:bg-[#2c3e4f]"
                    : store.icon
                      ? "border border-transparent bg-white/60 dark:bg-surface-dark"
                      : "border border-transparent bg-white dark:bg-surface-dark shadow-sm dark:shadow-none hover:border-slate-300 dark:hover:border-slate-600"
                }`}
                style={{ left: store.left, top: store.top, width: store.width, height: store.height }}
              >
                {store.icon ? (
                  <div className="flex flex-col items-center gap-1">
                    <Icon
                      name={store.icon}
                      className={store.highlighted ? "text-primary dark:text-white" : "text-slate-400 dark:text-slate-500"}
                    />
                    <span className={`text-sm font-medium ${store.highlighted ? "text-primary dark:text-white" : "text-slate-500 dark:text-slate-400"}`}>
                      {store.name}
                    </span>
                  </div>
                ) : (
                  <span
                    className={`font-medium ${
                      store.highlighted
                        ? `text-lg tracking-wide text-primary dark:text-white font-semibold ${store.serif ? "font-serif italic" : ""}`
                        : "text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    {store.name}
                  </span>
                )}
              </div>
            ))}

            {/* POI Icons */}
            {layout.pois.map((poi, i) => (
              <div
                key={`poi-${i}`}
                className="absolute flex flex-col items-center gap-1"
                style={{ left: poi.left, top: poi.top }}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 dark:bg-[#2a3642] text-slate-500 dark:text-slate-400">
                  <Icon name={poi.icon} className="text-[18px]" />
                </div>
              </div>
            ))}

            {/* User Location */}
            {layout.userLocation && (
              <div
                className="absolute z-20 flex h-6 w-6 items-center justify-center"
                style={{ left: layout.userLocation.left, top: layout.userLocation.top }}
              >
                <div className="pulse-ring" />
                <div className="relative z-10 h-3 w-3 rounded-full border-2 border-white bg-primary shadow-[0_0_10px_#0d7ff2]" />
              </div>
            )}

            {/* Path Line */}
            {layout.path && (
              <svg
                className="pointer-events-none absolute inset-0 z-10"
                width="800"
                height="800"
              >
                <path
                  d={layout.path}
                  fill="none"
                  stroke="#0d7ff2"
                  strokeWidth="3"
                  strokeDasharray="6 4"
                  strokeLinecap="round"
                />
                {layout.pathEnd && (
                  <circle cx={layout.pathEnd.cx} cy={layout.pathEnd.cy} r="4" fill="#0d7ff2" />
                )}
              </svg>
            )}
          </div>
        </div>

        {/* Search Bar */}
        <div className="absolute left-0 right-0 top-0 z-30 bg-linear-to-b from-slate-100/90 dark:from-background-dark/90 to-transparent px-4 pb-2 pt-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 flex-1 items-center rounded-full border border-slate-200 dark:border-slate-700/50 bg-white/90 dark:bg-[#22303c]/90 px-4 shadow-lg backdrop-blur-md">
              <Icon
                name="search"
                className="mr-2 text-slate-500 dark:text-slate-400"
              />
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
                onClick={() => setActiveFloor(floor)}
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

        {/* Floor Label */}
        <div className="absolute bottom-28 left-4 z-30">
          <div className="rounded-full border border-slate-200 dark:border-slate-700/50 bg-white/80 dark:bg-[#22303c]/80 px-4 py-2 shadow-lg backdrop-blur-md">
            <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
              {activeFloor === "G" ? "Ground Floor" : `Level ${activeFloor}`}
            </p>
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">{layout.label}</p>
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
          <Link
            to="/home"
            className="group flex flex-1 flex-col items-center justify-center gap-1"
          >
            <div className="flex h-8 items-center justify-center text-slate-400 dark:text-text-secondary transition-colors group-hover:text-primary dark:group-hover:text-white">
              <Icon name="home" />
            </div>
            <p className="text-[10px] font-medium leading-normal tracking-wide text-slate-400 dark:text-text-secondary transition-colors group-hover:text-primary dark:group-hover:text-white">
              Home
            </p>
          </Link>
          <Link
            to="/map"
            className="group flex flex-1 flex-col items-center justify-center gap-1"
          >
            <div className="relative flex h-8 items-center justify-center text-primary">
              <Icon name="map" filled />
              <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full border-2 border-white dark:border-[#182634] bg-red-500" />
            </div>
            <p className="text-[10px] font-medium leading-normal tracking-wide text-primary">
              Map
            </p>
          </Link>
          <Link
            to="/promos"
            className="group flex flex-1 flex-col items-center justify-center gap-1"
          >
            <div className="flex h-8 items-center justify-center text-slate-400 dark:text-text-secondary transition-colors group-hover:text-primary dark:group-hover:text-white">
              <Icon name="local_offer" />
            </div>
            <p className="text-[10px] font-medium leading-normal tracking-wide text-slate-400 dark:text-text-secondary transition-colors group-hover:text-primary dark:group-hover:text-white">
              Promos
            </p>
          </Link>
          <Link
            to="/profile"
            className="group flex flex-1 flex-col items-center justify-center gap-1"
          >
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
