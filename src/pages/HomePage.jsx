import { Link } from "react-router-dom";
import Icon from "../components/Icon";

const deals = [
  {
    brand: "Zara",
    brandColor: "text-slate-900",
    badge: "LIMITED TIME",
    title: "50% Off",
    subtitle: "Summer Collection 2024",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD5odBEPoYkHYL6ExkTarwAgXWhNZfJewjoGPmDJPBa1NxZNfmz-PE_AuETL63zo8uxU6Ju2Ihl9lR8nAz8RPWh2bfW600Z0HrLH5yAvY_C4H0ToNeJT9kk5mYkylLpGlGNeqFe1lNotxAL4zDyC-xrAQufyKfs4WVqiYPNeohHkW79k08ACkAAaFVgYuAclXK9iHrZWNudcrqG2-dzp3xm_b7XUG2C4eScNM_7xS6nM3M3-tUkZMr4zNKW1tFeXHNCTsxUgBIEDwnk",
  },
  {
    brand: "Uniqlo",
    brandColor: "text-red-600",
    badge: "SERVICE",
    title: "Free Alterations",
    subtitle: "On all jeans purchases > \u20B11500",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDvmwZ2XMB9JVF6OBqPWfgn-Q89o5JnnF8Z775PAq84s5IwP76umt2WqezvtW-beqzAb9MoFBzfYqnMwOdBGwXkFRTAIXLOskc7yDv-FVZAOJKwiPu1-SbG1mnDcHzisc4ryGukd_EB7cmKKdIi9Ng0yFyzcCAEi4f28zL2bvSZeUAsVjKO549_LvM-Cad5pm-uVBYQHZ3mmHBXIHFDk4NEhEEaRAhUcFskyHnOBEffI5Qd4CpV4sCW5bwKebHyG4h0A83iHwV8n9p-",
  },
  {
    brand: "Starbucks",
    brandColor: "text-green-700",
    badge: "PROMO",
    title: "Buy 1 Get 1",
    subtitle: "On all frappes every Tuesday",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAVtetHeswtkDBz2SaDAo10JL2_7wwR0fNVgLB8b0rJjDoOcVBZbQeLvTRfpSNgvvPkLpbNBkCnfwTbz_wyTgNDIC_I7WfHrLtgHE4Mz6YBPpk-gKUBXlHczDtWFNLJ9zVskg_a0L_evJvnFhS3OmpAFgUFv7F42wzMpfwd2BYw6fvR7xs_SvteXkD6f1kS9OKRUeMDC2Bn1gzq-4eHXwiIiFA43LgHnSsoZcvlW6wkFjyAjPEeRC71HO1ZnSDJaG9cjHMc-Puxz0Ie",
  },
];

const categories = [
  { icon: "restaurant", label: "Food" },
  { icon: "checkroom", label: "Fashion" },
  { icon: "movie", label: "Cinema" },
  { icon: "more_horiz", label: "More" },
];

export default function HomePage() {
  return (
    <div className="flex min-h-dvh flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-slate-100 bg-white/90 px-6 pb-4 pt-14 backdrop-blur-md">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Good Morning</p>
            <h1 className="text-xl font-bold tracking-tight text-slate-900">
              SM Megamall
            </h1>
          </div>
          <button className="relative rounded-full p-2 hover:bg-slate-100 transition-colors">
            <Icon name="notifications" className="text-slate-700" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full border border-white bg-red-500" />
          </button>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <Icon name="search" className="text-primary" />
          </div>
          <input
            type="text"
            placeholder="Find a store, restaurant, or service..."
            className="block w-full rounded-full border-none bg-slate-100 py-3.5 pl-12 pr-4 text-sm shadow-inner placeholder:text-slate-500 focus:ring-2 focus:ring-primary/50"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="no-scrollbar flex-1 space-y-8 overflow-y-auto overflow-x-hidden pb-24 pt-6">
        {/* Welcome & Parking */}
        <section className="space-y-6 px-6">
          <h2 className="text-3xl font-extrabold leading-tight text-slate-900">
            Welcome to <br />
            <span className="text-primary">SM Megamall</span>
          </h2>

          {/* Smart Parking Card */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
            <div className="absolute -mr-8 -mt-8 right-0 top-0 z-0 h-32 w-32 rounded-bl-full bg-primary/10" />
            <div className="relative z-10 flex flex-col gap-6 p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-3 text-primary">
                    <Icon name="local_parking" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Smart Parking
                    </h3>
                    <p className="text-xs font-medium text-slate-500">
                      Mega Tower - Basement 2
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                  Live
                </div>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-extrabold tracking-tighter text-slate-900">
                  847
                </span>
                <span className="text-base font-medium text-slate-500">
                  slots available
                </span>
              </div>
              <Link
                to="/parking"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 font-bold text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 active:scale-[0.98]"
              >
                <Icon name="directions_car" className="text-[20px]" />
                Find My Car
              </Link>
            </div>
          </div>
        </section>

        {/* Deals of the Day */}
        <section className="space-y-4">
          <div className="flex items-center justify-between px-6">
            <h3 className="text-lg font-bold text-slate-900">
              Deals of the Day
            </h3>
            <Link
              to="/promos"
              className="text-sm font-semibold text-primary hover:text-primary/80"
            >
              View all
            </Link>
          </div>
          <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4">
            {deals.map((deal) => (
              <div
                key={deal.brand}
                className="group relative h-[340px] w-[280px] shrink-0 cursor-pointer snap-center overflow-hidden rounded-2xl shadow-md"
              >
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider">
                  <span className={deal.brandColor}>{deal.brand}</span>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-5">
                  <span className="mb-2 inline-block rounded bg-primary px-2 py-1 text-xs font-bold text-white">
                    {deal.badge}
                  </span>
                  <h4 className="mb-1 text-2xl font-bold text-white">
                    {deal.title}
                  </h4>
                  <p className="text-sm font-medium text-slate-200">
                    {deal.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Explore Categories */}
        <section className="px-6 pb-6">
          <h3 className="mb-4 text-lg font-bold text-slate-900">Explore</h3>
          <div className="grid grid-cols-4 gap-4">
            {categories.map((cat) => (
              <div
                key={cat.label}
                className="group flex cursor-pointer flex-col items-center gap-2"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-primary transition-colors group-hover:bg-primary/10">
                  <Icon name={cat.icon} />
                </div>
                <span className="text-xs font-medium text-slate-600">
                  {cat.label}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Floating AI Button */}
      <Link
        to="/chat"
        className="group absolute bottom-24 right-6 z-20 flex items-center gap-2 rounded-full bg-primary p-4 text-white shadow-xl shadow-primary/40 transition-transform hover:scale-105 hover:bg-primary/90 active:scale-95"
      >
        <Icon
          name="smart_toy"
          className="text-[24px] group-hover:animate-bounce"
        />
        <span className="pr-1 font-bold">Chat with AI</span>
      </Link>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 z-30 flex w-full max-w-[390px] items-end justify-between border-t border-slate-100 bg-white/80 px-6 pb-6 pt-3 backdrop-blur-md">
        <Link to="/" className="flex w-1/4 flex-col items-center gap-1 text-primary">
          <Icon name="home" filled />
          <span className="text-[10px] font-bold">Home</span>
        </Link>
        <Link to="/map" className="flex w-1/4 flex-col items-center gap-1 text-slate-400 transition-colors hover:text-primary">
          <Icon name="map" />
          <span className="text-[10px] font-medium">Map</span>
        </Link>
        <Link to="/promos" className="flex w-1/4 flex-col items-center gap-1 text-slate-400 transition-colors hover:text-primary">
          <Icon name="storefront" />
          <span className="text-[10px] font-medium">Directory</span>
        </Link>
        <Link to="/parking" className="flex w-1/4 flex-col items-center gap-1 text-slate-400 transition-colors hover:text-primary">
          <Icon name="person" />
          <span className="text-[10px] font-medium">Account</span>
        </Link>
      </nav>
    </div>
  );
}
