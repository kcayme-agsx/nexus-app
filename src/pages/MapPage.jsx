import { Link } from "react-router-dom";
import Icon from "../components/Icon";

const floors = ["5", "4", "3", "2", "G"];
const activeFloor = "3";

export default function MapPage() {
  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-background-dark text-slate-100">
      {/* Map Area */}
      <main className="relative w-full flex-1 overflow-hidden bg-[#1a2632]">
        {/* Map Background */}
        <div className="absolute inset-0 h-full w-full overflow-hidden bg-[#111820]">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(#4a5568 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Map Container */}
          <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2">
            {/* Hallways */}
            <div className="absolute left-[100px] top-[200px] h-[100px] w-[600px] rounded-lg bg-[#2a3642]" />
            <div className="absolute left-[350px] top-[300px] h-[300px] w-[100px] rounded-lg bg-[#2a3642]" />
            <div className="absolute left-[100px] top-[500px] h-[100px] w-[600px] rounded-lg bg-[#2a3642]" />

            {/* Uniqlo (Active) */}
            <div className="absolute left-[100px] top-[60px] flex h-[130px] w-[200px] cursor-pointer items-center justify-center rounded-lg border-2 border-primary bg-[#22303c] shadow-[0_0_20px_rgba(13,127,242,0.3)] transition-colors hover:bg-[#2c3e4f]">
              <span className="text-lg font-semibold tracking-wide text-white">
                UNIQLO
              </span>
            </div>
            {/* H&M */}
            <div className="absolute left-[310px] top-[60px] flex h-[130px] w-[180px] items-center justify-center rounded-lg border border-transparent bg-[#1e2936] transition-colors hover:border-slate-600">
              <span className="font-medium text-slate-400">H&M</span>
            </div>
            {/* Samsung */}
            <div className="absolute left-[500px] top-[60px] flex h-[130px] w-[150px] items-center justify-center rounded-lg border border-transparent bg-[#1e2936] transition-colors hover:border-slate-600">
              <span className="font-medium text-slate-400">Samsung</span>
            </div>
            {/* Food Court */}
            <div className="absolute left-[100px] top-[610px] flex h-[140px] w-[340px] items-center justify-center rounded-lg border border-transparent bg-[#1e2936] transition-colors hover:border-slate-600">
              <div className="flex flex-col items-center gap-1">
                <Icon name="restaurant" className="text-slate-500" />
                <span className="font-medium text-slate-400">Food Court</span>
              </div>
            </div>
            {/* Cinema */}
            <div className="absolute left-[450px] top-[610px] flex h-[140px] w-[200px] items-center justify-center rounded-lg border border-transparent bg-[#1e2936] transition-colors hover:border-slate-600">
              <div className="flex flex-col items-center gap-1">
                <Icon name="movie" className="text-slate-500" />
                <span className="font-medium text-slate-400">Cinema</span>
              </div>
            </div>

            {/* POI Icons */}
            <div className="absolute left-[460px] top-[320px] flex flex-col items-center gap-1">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2a3642] text-slate-400">
                <Icon name="wc" className="text-[18px]" />
              </div>
            </div>
            <div className="absolute left-[310px] top-[320px] flex flex-col items-center gap-1">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2a3642] text-slate-400">
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
        <div className="absolute left-0 right-0 top-0 z-30 bg-gradient-to-b from-background-dark/90 to-transparent px-4 pb-2 pt-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 flex-1 items-center rounded-full border border-slate-700/50 bg-[#22303c]/90 px-4 shadow-lg backdrop-blur-md">
              <Icon name="search" className="mr-2 text-slate-400" />
              <input
                type="text"
                placeholder="Search stores, dining, or facilities..."
                className="w-full border-none bg-transparent text-sm font-medium text-slate-200 placeholder-slate-500 focus:ring-0"
              />
              <button className="rounded-full p-1 text-slate-400 hover:bg-slate-700/50">
                <Icon name="mic" className="text-[20px]" />
              </button>
            </div>
            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700/50 bg-[#22303c]/90 text-slate-400 shadow-lg backdrop-blur-md transition-colors hover:bg-slate-700/50 hover:text-white">
              <Icon name="tune" />
            </button>
          </div>
        </div>

        {/* Floor Selector */}
        <div className="absolute right-4 top-1/2 z-30 flex -translate-y-1/2 flex-col gap-2">
          <div className="flex flex-col gap-1 rounded-full border border-slate-700/50 bg-[#22303c]/80 p-1.5 shadow-lg backdrop-blur-md">
            {floors.map((floor) => (
              <button
                key={floor}
                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                  floor === activeFloor
                    ? "bg-primary text-white shadow-md shadow-blue-500/30"
                    : "text-slate-400 hover:bg-slate-700/50"
                }`}
              >
                {floor}
              </button>
            ))}
          </div>
        </div>

        {/* Map Controls */}
        <div className="absolute bottom-56 right-4 z-30 flex flex-col gap-3">
          <button className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700/50 bg-[#22303c]/90 text-primary shadow-lg backdrop-blur-md transition-colors hover:bg-slate-700/50">
            <Icon name="my_location" />
          </button>
          <div className="flex flex-col overflow-hidden rounded-full border border-slate-700/50 bg-[#22303c]/90 shadow-lg backdrop-blur-md">
            <button className="flex h-12 w-12 items-center justify-center border-b border-slate-700/50 text-slate-200 transition-colors hover:bg-slate-700/50">
              <Icon name="add" />
            </button>
            <button className="flex h-12 w-12 items-center justify-center text-slate-200 transition-colors hover:bg-slate-700/50">
              <Icon name="remove" />
            </button>
          </div>
        </div>

        {/* Store Info Card */}
        <div className="absolute bottom-4 left-4 right-4 z-40">
          <div className="relative overflow-hidden rounded-3xl border border-slate-700/50 bg-[#1e2936] p-5 shadow-2xl">
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
            <div className="flex items-start justify-between">
              <div className="flex gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white p-1">
                  <span className="text-center text-xs font-bold leading-tight text-red-600">
                    UNI
                    <br />
                    QLO
                  </span>
                </div>
                <div>
                  <h2 className="text-xl font-bold leading-tight text-white">
                    Uniqlo
                  </h2>
                  <p className="mt-1 text-sm text-slate-400">
                    Level 3, Mega Fashion Hall
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-xs font-medium text-green-400">
                      Open
                    </span>
                    <span className="text-xs text-slate-500">&bull;</span>
                    <span className="text-xs text-slate-400">
                      Closes at 10:00 PM
                    </span>
                  </div>
                </div>
              </div>
              <button className="p-1 text-slate-400 hover:text-white">
                <Icon name="close" />
              </button>
            </div>
            <div className="mt-5 flex gap-3">
              <Link
                to="/navigation"
                className="flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-primary font-semibold text-white shadow-lg shadow-blue-500/20 transition-colors hover:bg-blue-600"
              >
                <Icon name="directions" className="text-[20px]" />
                Get Directions
              </Link>
              <button className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-600 text-slate-300 transition-colors hover:bg-slate-700 hover:text-white">
                <Icon name="share" className="text-[20px]" />
              </button>
              <button className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-600 text-slate-300 transition-colors hover:bg-slate-700 hover:text-white">
                <Icon name="favorite" className="text-[20px]" />
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <div className="z-50 border-t border-[#223649] bg-[#182634] px-4 pb-6 pt-2">
        <div className="mx-auto flex max-w-md items-center justify-between">
          <Link to="/" className="group flex flex-1 flex-col items-center justify-center gap-1">
            <div className="flex h-8 items-center justify-center text-[#90adcb] transition-colors group-hover:text-white">
              <Icon name="home" />
            </div>
            <p className="text-[10px] font-medium leading-normal tracking-wide text-[#90adcb] transition-colors group-hover:text-white">
              Home
            </p>
          </Link>
          <Link to="/map" className="group flex flex-1 flex-col items-center justify-center gap-1">
            <div className="relative flex h-8 items-center justify-center text-primary">
              <Icon name="map" filled />
              <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full border-2 border-[#182634] bg-red-500" />
            </div>
            <p className="text-[10px] font-medium leading-normal tracking-wide text-primary">
              Map
            </p>
          </Link>
          <Link to="/promos" className="group flex flex-1 flex-col items-center justify-center gap-1">
            <div className="flex h-8 items-center justify-center text-[#90adcb] transition-colors group-hover:text-white">
              <Icon name="local_offer" />
            </div>
            <p className="text-[10px] font-medium leading-normal tracking-wide text-[#90adcb] transition-colors group-hover:text-white">
              Promos
            </p>
          </Link>
          <Link to="/" className="group flex flex-1 flex-col items-center justify-center gap-1">
            <div className="flex h-8 items-center justify-center text-[#90adcb] transition-colors group-hover:text-white">
              <Icon name="person" />
            </div>
            <p className="text-[10px] font-medium leading-normal tracking-wide text-[#90adcb] transition-colors group-hover:text-white">
              Profile
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
