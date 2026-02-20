import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import ThemeToggle from "../components/ThemeToggle";

const myTicket = {
  movie: "Dune: Part Three",
  genre: "Sci-Fi / Adventure",
  cinema: "SM Cinema 5",
  date: "Today, Feb 20",
  time: "7:30 PM",
  seats: "H12, H13",
  ticketNo: "SM-2026-0220-1845",
  poster: "https://image.tmdb.org/t/p/w780/ylkdrn23p3gQcHx7ukIfuy2CkTE.jpg",
};

const nowShowing = [
  {
    id: 1,
    title: "Dune: Part Three",
    genre: "Sci-Fi",
    duration: "2h 45m",
    rating: "PG-13",
    times: ["1:00 PM", "4:15 PM", "7:30 PM", "10:00 PM"],
    poster: "https://image.tmdb.org/t/p/w780/ylkdrn23p3gQcHx7ukIfuy2CkTE.jpg",
  },
  {
    id: 2,
    title: "Inside Out 3",
    genre: "Animation",
    duration: "1h 50m",
    rating: "G",
    times: ["11:00 AM", "1:30 PM", "3:45 PM", "6:00 PM"],
    poster: "https://image.tmdb.org/t/p/w780/p5ozvmdgsmbWe0H8Xk7Rc8SCwAB.jpg",
  },
  {
    id: 3,
    title: "The Batman II",
    genre: "Action",
    duration: "2h 30m",
    rating: "PG-13",
    times: ["12:30 PM", "3:30 PM", "6:30 PM", "9:30 PM"],
    poster: "https://image.tmdb.org/t/p/w780/rvtdN5XkWAfGX6xDuPL6yYS2seK.jpg",
  },
];

const tabs = ["My Tickets", "Now Showing"];

export default function TicketsPage() {
  const [activeTab, setActiveTab] = useState("My Tickets");

  return (
    <div className="flex min-h-dvh flex-col overflow-x-hidden bg-white dark:bg-background-dark text-slate-900 dark:text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-slate-200 dark:border-surface-highlight bg-white/90 dark:bg-background-dark/90 px-4 py-3 backdrop-blur-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="mb-0.5 text-xs font-semibold uppercase tracking-wider text-primary">
              SM Cinema
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Cinema Tickets
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle className="text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700" />
            <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-surface-highlight text-slate-700 dark:text-white transition-colors hover:bg-slate-200 dark:hover:bg-slate-700">
              <Icon name="notifications" />
              <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full border-2 border-slate-100 dark:border-surface-highlight bg-red-500" />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-4 flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                tab === activeTab
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "border border-slate-200 dark:border-transparent bg-slate-100 dark:bg-surface-highlight text-slate-500 dark:text-text-secondary hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 px-4 py-6 pb-24">
        {activeTab === "My Tickets" ? (
          <div className="space-y-6">
            {/* Active Ticket */}
            <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-surface-highlight bg-white dark:bg-surface-dark shadow-sm">
              {/* Ticket Header */}
              <div className="relative h-44 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${myTicket.poster}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-4">
                  <div className="mb-1 flex items-center gap-2">
                    <span className="rounded-full bg-green-500 px-2.5 py-0.5 text-[10px] font-bold uppercase text-white">
                      Active
                    </span>
                    <span className="text-xs font-medium text-slate-300">{myTicket.genre}</span>
                  </div>
                  <h2 className="text-xl font-bold text-white">{myTicket.movie}</h2>
                </div>
              </div>

              {/* Dashed separator */}
              <div className="relative flex items-center px-0">
                <div className="h-5 w-5 -translate-x-1/2 rounded-full bg-slate-100 dark:bg-background-dark" />
                <div className="flex-1 border-t-2 border-dashed border-slate-200 dark:border-surface-highlight" />
                <div className="h-5 w-5 translate-x-1/2 rounded-full bg-slate-100 dark:bg-background-dark" />
              </div>

              {/* Ticket Details */}
              <div className="space-y-4 p-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-text-secondary">
                      Date
                    </p>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">{myTicket.date}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-text-secondary">
                      Time
                    </p>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">{myTicket.time}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-text-secondary">
                      Cinema
                    </p>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">{myTicket.cinema}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-text-secondary">
                      Seats
                    </p>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">{myTicket.seats}</p>
                  </div>
                </div>

                {/* QR Code Placeholder */}
                <div className="flex flex-col items-center gap-2 rounded-2xl bg-slate-50 dark:bg-surface-highlight p-4">
                  <div className="flex h-32 w-32 items-center justify-center rounded-xl bg-white dark:bg-background-dark">
                    <Icon name="qr_code_2" className="text-[80px] text-slate-800 dark:text-slate-200" />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {myTicket.ticketNo}
                  </p>
                </div>

                <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 font-bold text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 active:scale-[0.98]">
                  <Icon name="qr_code_scanner" className="text-[20px]" />
                  Show at Entrance
                </button>
              </div>
            </div>

            {/* Past Tickets */}
            <div>
              <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-text-secondary">
                Past Tickets
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-4 rounded-2xl border border-slate-100 dark:border-surface-highlight bg-white dark:bg-surface-dark p-4 opacity-60">
                  <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-slate-100 dark:bg-surface-highlight">
                    <img src="https://image.tmdb.org/t/p/w200/bRBeSHfGHwkEpImlhxPmOcUsaeg.jpg" alt="Avatar" className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-slate-900 dark:text-white">Avatar 4</p>
                    <p className="text-xs text-slate-500 dark:text-text-secondary">Feb 14, 2026 &middot; 3:00 PM &middot; Cinema 3</p>
                  </div>
                  <span className="rounded-full bg-slate-100 dark:bg-surface-highlight px-2.5 py-1 text-[10px] font-bold text-slate-400">
                    Used
                  </span>
                </div>
                <div className="flex items-center gap-4 rounded-2xl border border-slate-100 dark:border-surface-highlight bg-white dark:bg-surface-dark p-4 opacity-60">
                  <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-slate-100 dark:bg-surface-highlight">
                    <img src="https://image.tmdb.org/t/p/w200/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg" alt="Spider-Man" className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-slate-900 dark:text-white">Spider-Man: Beyond</p>
                    <p className="text-xs text-slate-500 dark:text-text-secondary">Feb 8, 2026 &middot; 6:45 PM &middot; IMAX</p>
                  </div>
                  <span className="rounded-full bg-slate-100 dark:bg-surface-highlight px-2.5 py-1 text-[10px] font-bold text-slate-400">
                    Used
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Now Showing Tab */
          <div className="space-y-5">
            {nowShowing.map((movie) => (
              <div
                key={movie.id}
                className="overflow-hidden rounded-3xl border border-slate-200 dark:border-surface-highlight bg-white dark:bg-surface-dark shadow-sm"
              >
                {/* Movie Poster */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${movie.poster}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-slate-800 backdrop-blur">
                    {movie.rating}
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-4">
                    <h3 className="text-lg font-bold text-white">{movie.title}</h3>
                    <div className="mt-1 flex items-center gap-2 text-xs text-slate-300">
                      <span>{movie.genre}</span>
                      <span>&middot;</span>
                      <span>{movie.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Showtimes */}
                <div className="p-4">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-text-secondary">
                    Showtimes Today
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {movie.times.map((time) => (
                      <button
                        key={time}
                        className="rounded-full border border-slate-200 dark:border-surface-highlight bg-slate-50 dark:bg-surface-highlight px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 transition-colors hover:border-primary hover:bg-primary/5 hover:text-primary dark:hover:border-primary dark:hover:text-primary"
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 z-50 w-full max-w-[390px] border-t border-slate-200 dark:border-surface-highlight bg-white dark:bg-surface-dark px-6 pb-6 pt-3">
        <div className="flex items-end justify-between">
          <Link to="/home" className="group flex w-1/5 flex-col items-center gap-1">
            <Icon name="home" className="text-[24px] text-slate-400 dark:text-text-secondary transition-colors group-hover:text-primary" />
            <span className="text-[10px] font-medium text-slate-400 dark:text-text-secondary transition-colors group-hover:text-primary">Home</span>
          </Link>
          <Link to="/map" className="group flex w-1/5 flex-col items-center gap-1">
            <Icon name="map" className="text-[24px] text-slate-400 dark:text-text-secondary transition-colors group-hover:text-primary" />
            <span className="text-[10px] font-medium text-slate-400 dark:text-text-secondary transition-colors group-hover:text-primary">Map</span>
          </Link>
          <Link to="/promos" className="group flex w-1/5 flex-col items-center gap-1">
            <Icon name="local_offer" className="text-[24px] text-slate-400 dark:text-text-secondary transition-colors group-hover:text-primary" />
            <span className="text-[10px] font-medium text-slate-400 dark:text-text-secondary transition-colors group-hover:text-primary">Promos</span>
          </Link>
          <Link to="/tickets" className="flex w-1/5 flex-col items-center gap-1">
            <Icon name="confirmation_number" filled className="text-[24px] text-primary" />
            <span className="text-[10px] font-bold text-primary">Tickets</span>
          </Link>
          <Link to="/profile" className="group flex w-1/5 flex-col items-center gap-1">
            <Icon name="person" className="text-[24px] text-slate-400 dark:text-text-secondary transition-colors group-hover:text-primary" />
            <span className="text-[10px] font-medium text-slate-400 dark:text-text-secondary transition-colors group-hover:text-primary">Profile</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
