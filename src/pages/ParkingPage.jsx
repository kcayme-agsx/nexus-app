import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import ThemeToggle from "../components/ThemeToggle";

const parkingLevels = [
  {
    level: "P3",
    count: "234",
    label: "Slots Available",
    status: "available",
    icon: "check_circle",
    color: "emerald",
    fill: "30%",
  },
  {
    level: "P4",
    count: "12",
    label: "Filling Fast",
    status: "warning",
    icon: "warning",
    color: "amber",
    fill: "90%",
  },
  {
    level: "P2",
    count: "FULL",
    label: "Waitlist Only",
    status: "full",
    icon: "block",
    color: "red",
    fill: "100%",
  },
];

export default function ParkingPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-white dark:bg-background-dark text-slate-900 dark:text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 px-4 py-3 backdrop-blur-md">
        <Link
          to="/"
          className="-ml-2 rounded-full p-2 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <Icon name="arrow_back" className="text-slate-900 dark:text-white" />
        </Link>
        <h1 className="flex-1 text-center text-lg font-bold">
          Smart Parking
        </h1>
        <ThemeToggle className="text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800" />
      </header>

      {/* Main Content */}
      <main className="flex-1 space-y-8 overflow-y-auto px-4 py-6 pb-24">
        {/* Live Status */}
        <section>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold">Live Status</h2>
            <span className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              Updated 1m ago
            </span>
          </div>
          <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2">
            {parkingLevels.map((p) => (
              <div
                key={p.level}
                className={`flex w-[160px] shrink-0 snap-center flex-col gap-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-surface-dark p-5 shadow-sm ${
                  p.status === "full" ? "opacity-60 grayscale" : ""
                } ${p.status === "warning" ? "opacity-80" : ""}`}
              >
                <div className="flex items-start justify-between">
                  <span className="text-2xl font-bold">{p.level}</span>
                  <div
                    className={`rounded-full p-1.5 ${
                      p.color === "emerald"
                        ? "bg-emerald-500/20 text-emerald-400"
                        : p.color === "amber"
                          ? "bg-amber-500/20 text-amber-400"
                          : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    <Icon name={p.icon} className="text-[20px]" />
                  </div>
                </div>
                <div>
                  <p className="text-3xl font-bold tracking-tight">{p.count}</p>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {p.label}
                  </p>
                </div>
                <div className="mt-auto h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                  <div
                    className={`h-full rounded-full ${
                      p.color === "emerald"
                        ? "bg-emerald-500"
                        : p.color === "amber"
                          ? "bg-amber-500"
                          : "bg-red-500"
                    }`}
                    style={{ width: p.fill }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Active Parking Session */}
        <section className="relative">
          <div className="absolute -m-4 inset-0 z-0 rounded-3xl bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="relative z-10 rounded-2xl border border-primary/20 bg-white dark:bg-surface-dark p-6 shadow-lg shadow-primary/5">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary/20 p-2.5 text-primary">
                  <Icon name="directions_car" />
                </div>
                <div>
                  <h3 className="text-lg font-bold leading-tight">
                    Your Vehicle
                  </h3>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Parked 2h 15m ago
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Est. Fee
                </p>
                <p className="text-xl font-bold text-primary">₱110</p>
              </div>
            </div>

            {/* Location Grid */}
            <div className="mb-6 grid grid-cols-3 gap-3">
              {[
                { label: "Floor", value: "P2" },
                { label: "Zone", value: "B" },
                { label: "Slot", value: "47" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-background-dark p-3 text-center"
                >
                  <p className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {item.label}
                  </p>
                  <p className="text-2xl font-extrabold text-slate-900 dark:text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Photo */}
            <div className="group relative mb-6 h-32 w-full cursor-pointer overflow-hidden rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-200 dark:bg-slate-700">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40 transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDOsdnCJP4EVm-wSrQJy2j6w6jpwrMF479P3klxu4lvZf6421c9sr9TJCh66UE9QkPPPD7qr7P4kRC_b2KnOIOTAD2ZACqjkIu_8GmnBnFcyYHB-Lfvf9XvXHCxLfybk9JSj4-xositeTdtgtwi6dIBXfjOJFfCXv-qwktyoUf2y_TKzaMBShqHPA-7Jd-RjSEJLGC4PzY-NCCFwf-3s5ECgkl-JInMH8P-dppMzheZbggMr_9s-9jOepD9XpKqJqh2wUU8wcskWl6Z')",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <button className="flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-4 py-2 text-sm font-bold text-white backdrop-blur-md transition-colors hover:bg-white/30">
                  <Icon name="visibility" className="text-[18px]" />
                  View Photo
                </button>
              </div>
            </div>

            {/* Navigate Button */}
            <Link
              to="/navigation"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 font-bold text-white shadow-lg shadow-blue-500/30 transition-all hover:bg-blue-600 active:scale-95"
            >
              <Icon name="near_me" />
              Navigate to Car
            </Link>
          </div>
        </section>

        {/* Update Location */}
        <section className="px-2">
          <div className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-white/5 p-6 text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700">
              <Icon name="edit_location" className="text-slate-500 dark:text-slate-400" />
            </div>
            <h3 className="mb-1 text-base font-bold">
              Parked somewhere else?
            </h3>
            <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">
              Update your location to find your car easily later.
            </p>
            <button className="rounded-full border border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-800 px-6 py-2.5 text-sm font-bold text-slate-900 dark:text-white transition-colors hover:bg-slate-200 dark:hover:bg-slate-700">
              Update Location
            </button>
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full max-w-[390px] border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark px-6 pb-[env(safe-area-inset-bottom,20px)] pt-2">
        <div className="flex items-end justify-between pb-4">
          <Link to="/" className="group flex flex-col items-center gap-1 text-slate-400 dark:text-slate-400 transition-colors hover:text-primary dark:hover:text-white">
            <Icon name="home" className="text-[24px] transition-transform group-hover:-translate-y-1" />
            <span className="text-[10px] font-medium">Home</span>
          </Link>
          <Link to="/promos" className="group flex flex-col items-center gap-1 text-slate-400 dark:text-slate-400 transition-colors hover:text-primary dark:hover:text-white">
            <Icon name="shopping_bag" className="text-[24px] transition-transform group-hover:-translate-y-1" />
            <span className="text-[10px] font-medium">Shop</span>
          </Link>
          <Link to="/parking" className="relative -top-4 flex flex-col items-center gap-1 text-primary">
            <div className="transform rounded-full border-4 border-white dark:border-background-dark bg-primary p-3 text-white shadow-lg shadow-primary/40 transition-transform hover:scale-110">
              <Icon name="local_parking" className="text-[28px]" />
            </div>
            <span className="text-[10px] font-bold text-primary">Parking</span>
          </Link>
          <Link to="/promos" className="group flex flex-col items-center gap-1 text-slate-400 dark:text-slate-400 transition-colors hover:text-primary dark:hover:text-white">
            <Icon name="restaurant" className="text-[24px] transition-transform group-hover:-translate-y-1" />
            <span className="text-[10px] font-medium">Dining</span>
          </Link>
          <Link to="/" className="group flex flex-col items-center gap-1 text-slate-400 dark:text-slate-400 transition-colors hover:text-primary dark:hover:text-white">
            <Icon name="person" className="text-[24px] transition-transform group-hover:-translate-y-1" />
            <span className="text-[10px] font-medium">Profile</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
