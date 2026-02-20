import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import ThemeToggle from "../components/ThemeToggle";
import StoreDetailsModal from "../components/StoreDetailsModal";
import { stores } from "../data/stores";

const filters = ["All Deals", "Fashion", "Food & Dining", "Tech", "Entertainment"];

const promosData = [
  {
    storeId: 'hm',
    brand: "H&M",
    brandBg: "bg-red-600",
    location: "Fashion Hall \u2022 L2",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD3LMVlA5BQ7EttRARNDcNlaCA4EUBvPf6dooX4BTAd1uZzHCkdWj53sGZZqNo8Juounpm-UXeJUB704cTR38aWwESFBd52rVQ78zNSdjyWVmSbPXgt8rwq1VyXg46W1aPhZ8uTnkTSPggvBKYLPPVAszJv5jm2vrz_6dQBgM8Uym2tQG6Vs9G-YoQ8mB-4H5GNLTchkuQ1W1wHhJu12UkjNh56jm_jQCCt9TODZSFyIkaQpRfZCBNzMMUUHmGIsuuAdVL1uU6tbu44",
    badge: "Expires in 2 days",
    badgeStyle: "bg-white/95 text-slate-900",
    title: "Summer Sale: Up to 50% OFF",
    description:
      "Get ready for the heat with our biggest summer collection sale. Valid on selected items only until supplies last.",
    validUntil: "Aug 30, 2023",
    favorited: true,
  },
  {
    storeId: 'dtf',
    brand: "DTF",
    brandBg: "bg-slate-800",
    location: "Mega Fashion Hall \u2022 L1",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDaNpGsMTpdSa_5osuorZp2znGAcf7To5K7ADGmsNMn5Tr9lU6A2JGRTNG5nA7ZA5Cv1lXdumLgnzkP-oC2vb1MeUkq8xk8YC28EIvp_G479SykLWTbRIJH5I6v4HIFWDfZ2Gz96cTkhH90h-wiZast_0AEbNPdshbysvx5oEh0fH8omQCGIoIixOXLZuX_GjatkYODdo1uHpcHA8Sp3x68qjgEGhSSm1XXv7oTcAe7S_yoZ1HnURI6y1hN3z_uBwaj8iAD9yRwJ8Op",
    badge: null,
    title: "Free XLB with \u20B11,500 Purchase",
    description:
      "Celebrate the weekend with a basket of our world-famous pork Xiao Long Bao on us! Minimum spend required.",
    validUntil: "Sept 05, 2023",
    favorited: false,
  },
];

export default function PromosPage() {
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
    <div className="flex min-h-dvh flex-col overflow-x-hidden bg-white dark:bg-background-dark text-slate-900 dark:text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-slate-200 dark:border-surface-highlight bg-white/90 dark:bg-background-dark/90 px-4 py-3 backdrop-blur-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="mb-0.5 text-xs font-semibold uppercase tracking-wider text-primary">
              SM Megamall
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Latest Deals
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle className="text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700" />
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-surface-highlight text-slate-700 dark:text-white transition-colors hover:bg-slate-200 dark:hover:bg-slate-700">
              <Icon name="search" />
            </button>
            <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-surface-highlight text-slate-700 dark:text-white transition-colors hover:bg-slate-200 dark:hover:bg-slate-700">
              <Icon name="notifications" />
              <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full border-2 border-slate-100 dark:border-surface-highlight bg-red-500" />
            </button>
          </div>
        </div>

        {/* Filter Chips */}
        <div className="no-scrollbar mt-4 flex gap-3 overflow-x-auto pb-2">
          {filters.map((filter, i) => (
            <button
              key={filter}
              className={`shrink-0 rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                i === 0
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "border border-slate-200 dark:border-transparent bg-slate-100 dark:bg-surface-highlight text-slate-500 dark:text-text-secondary hover:border-slate-300 dark:hover:border-slate-600 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </header>

      {/* Promo Feed */}
      <main className="flex-1 space-y-6 px-4 py-6 pb-24">
        {promosData.map((promo) => (
          <article
            key={promo.title}
            className="group relative flex flex-col overflow-hidden rounded-4xl border border-slate-200 dark:border-surface-highlight bg-white dark:bg-surface-dark shadow-sm transition-all hover:shadow-md"
          >
            {/* Card Header */}
            <div className="flex items-center justify-between p-4 pb-3">
              <div
                onClick={() => handleStoreClick(promo.storeId)}
                className="flex cursor-pointer items-center gap-3 active:scale-[0.98] transition-transform"
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-slate-200 dark:border-surface-highlight text-white ${promo.brandBg}`}
                >
                  <span className="text-xs font-bold">
                    {promo.brand}
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-bold leading-tight text-slate-900 dark:text-white">
                    {promo.brand}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-text-secondary">
                    {promo.location}
                  </p>
                </div>
              </div>
              <button className="flex h-10 w-10 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 dark:hover:bg-surface-highlight hover:text-red-500">
                <Icon
                  name="favorite"
                  filled={promo.favorited}
                  className={promo.favorited ? "text-red-500" : ""}
                />
              </button>
            </div>

            {/* Hero Image */}
            <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100 dark:bg-surface-highlight">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${promo.image}')` }}
              />
              {promo.badge && (
                <div
                  className={`absolute right-4 top-4 rounded-full px-3 py-1.5 text-xs font-bold shadow-lg backdrop-blur ${promo.badgeStyle}`}
                >
                  {promo.badge}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-5">
              <h2 className="mb-2 text-2xl font-extrabold leading-tight text-slate-900 dark:text-white">
                {promo.title}
              </h2>
              <p className="mb-4 line-clamp-2 text-sm text-slate-500 dark:text-text-secondary">
                {promo.description}
              </p>
              <div className="flex items-center justify-between gap-3 border-t border-slate-200 dark:border-surface-highlight/50 pt-2">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Valid Until
                  </span>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                    {promo.validUntil}
                  </span>
                </div>
                <button className="flex h-10 max-w-[160px] flex-1 items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-colors hover:bg-blue-600">
                  <Icon name="near_me" className="text-[18px]" />
                  Directions
                </button>
              </div>
            </div>
          </article>
        ))}

        <div className="flex items-center justify-center py-6 text-slate-600">
          <p className="text-sm font-medium">You've reached the end of the list</p>
        </div>
      </main>

      {/* Store Details Modal */}
      <StoreDetailsModal
        store={selectedStore}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 z-50 w-full max-w-[390px] border-t border-slate-200 dark:border-surface-highlight bg-white dark:bg-surface-dark px-6 pb-6 pt-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_-4px_20px_rgba(0,0,0,0.2)]">
        <div className="flex items-end justify-between">
          <Link to="/home" className="group flex w-16 flex-col items-center gap-1">
            <Icon name="home" className="text-[24px] text-slate-400 dark:text-text-secondary transition-colors group-hover:text-primary dark:group-hover:text-white" />
            <span className="text-[10px] font-medium text-slate-400 dark:text-text-secondary transition-colors group-hover:text-primary dark:group-hover:text-white">Home</span>
          </Link>
          <Link to="/map" className="group flex w-16 flex-col items-center gap-1">
            <Icon name="map" className="text-[24px] text-slate-400 dark:text-text-secondary transition-colors group-hover:text-primary dark:group-hover:text-white" />
            <span className="text-[10px] font-medium text-slate-400 dark:text-text-secondary transition-colors group-hover:text-primary dark:group-hover:text-white">Map</span>
          </Link>
          <Link to="/promos" className="flex w-16 flex-col items-center gap-1">
            <Icon name="local_offer" filled className="text-[24px] text-primary" />
            <span className="text-[10px] font-bold text-primary">Promos</span>
          </Link>
          <Link to="/tickets" className="group flex w-16 flex-col items-center gap-1">
            <Icon name="confirmation_number" className="text-[24px] text-slate-400 dark:text-text-secondary transition-colors group-hover:text-primary dark:group-hover:text-white" />
            <span className="text-[10px] font-medium text-slate-400 dark:text-text-secondary transition-colors group-hover:text-primary dark:group-hover:text-white">Tickets</span>
          </Link>
          <Link to="/profile" className="group flex w-16 flex-col items-center gap-1">
            <Icon name="person" className="text-[24px] text-slate-400 dark:text-text-secondary transition-colors group-hover:text-primary dark:group-hover:text-white" />
            <span className="text-[10px] font-medium text-slate-400 dark:text-text-secondary transition-colors group-hover:text-primary dark:group-hover:text-white">Profile</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
