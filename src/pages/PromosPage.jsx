import { Link } from "react-router-dom";
import Icon from "../components/Icon";

const filters = ["All Deals", "Fashion", "Food & Dining", "Tech", "Entertainment"];

const promos = [
  {
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
  {
    brand: null,
    brandIcon: "laptop_mac",
    brandBg: "bg-black",
    brandName: "Power Mac Center",
    location: "Cyberzone \u2022 L4",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCr1I-Em6YzSV6ntLdt2OsKtnH08UVHGWivu_FBA7h5Q2TouZ9Czzr6xa7wTfOxa3WZ0Dy9UPh9djpG8OhxJP1pifTKko78KsbcLm1zliVtft9zPFObay1TM7_-Zv9UbQWHGBe2zB8dwZK5D5CZkPIZuOpFludN05TReyf3LEZ00yVb-RBvj1JC7MAJ0bMycA8QGZlcO-4aeKVxKG6tp4UNjxmlccaohLQz3abGhwbnSBJ3ILOMV5z0yYL4eCdRW70WsbHdcgzSKUDR",
    badge: "Exclusive",
    badgeStyle: "bg-primary text-white",
    title: "Student Discount: 10% OFF on iPads",
    description:
      "Back to school special! Present your valid student ID to avail the discount on selected iPad models.",
    validUntil: "Sept 15, 2023",
    favorited: false,
  },
];

export default function PromosPage() {
  return (
    <div className="flex min-h-dvh flex-col overflow-x-hidden bg-background-dark text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-surface-highlight bg-background-dark/90 px-4 py-3 backdrop-blur-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="mb-0.5 text-xs font-semibold uppercase tracking-wider text-primary">
              SM Megamall
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-white">
              Latest Deals
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-highlight text-white transition-colors hover:bg-slate-700">
              <Icon name="search" />
            </button>
            <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-surface-highlight text-white transition-colors hover:bg-slate-700">
              <Icon name="notifications" />
              <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full border-2 border-surface-highlight bg-red-500" />
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
                  : "border border-transparent bg-surface-highlight text-text-secondary hover:border-slate-600 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </header>

      {/* Promo Feed */}
      <main className="flex-1 space-y-6 px-4 py-6 pb-24">
        {promos.map((promo) => (
          <article
            key={promo.title}
            className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-surface-highlight bg-surface-dark shadow-sm transition-all hover:shadow-md"
          >
            {/* Card Header */}
            <div className="flex items-center justify-between p-4 pb-3">
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-surface-highlight text-white ${promo.brandBg}`}
                >
                  {promo.brandIcon ? (
                    <Icon name={promo.brandIcon} className="text-sm" />
                  ) : (
                    <span className="text-xs font-bold">
                      {promo.brand}
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="text-sm font-bold leading-tight text-white">
                    {promo.brandName || promo.brand}
                  </h3>
                  <p className="text-xs text-text-secondary">
                    {promo.location}
                  </p>
                </div>
              </div>
              <button className="flex h-10 w-10 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-surface-highlight hover:text-red-500">
                <Icon
                  name="favorite"
                  filled={promo.favorited}
                  className={promo.favorited ? "text-red-500" : ""}
                />
              </button>
            </div>

            {/* Hero Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-highlight">
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
              <h2 className="mb-2 text-2xl font-extrabold leading-tight text-white">
                {promo.title}
              </h2>
              <p className="mb-4 line-clamp-2 text-sm text-text-secondary">
                {promo.description}
              </p>
              <div className="flex items-center justify-between gap-3 border-t border-surface-highlight/50 pt-2">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Valid Until
                  </span>
                  <span className="text-sm font-semibold text-slate-200">
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

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 z-50 w-full max-w-[390px] border-t border-surface-highlight bg-surface-dark px-6 pb-6 pt-3 shadow-[0_-4px_20px_rgba(0,0,0,0.2)]">
        <div className="flex items-end justify-between">
          <Link to="/" className="group flex w-16 flex-col items-center gap-1">
            <Icon name="home" className="text-[24px] text-text-secondary transition-colors group-hover:text-white" />
            <span className="text-[10px] font-medium text-text-secondary transition-colors group-hover:text-white">Home</span>
          </Link>
          <Link to="/map" className="group flex w-16 flex-col items-center gap-1">
            <Icon name="map" className="text-[24px] text-text-secondary transition-colors group-hover:text-white" />
            <span className="text-[10px] font-medium text-text-secondary transition-colors group-hover:text-white">Map</span>
          </Link>
          <Link to="/promos" className="group -mt-4 flex w-16 flex-col items-center gap-1">
            <div className="mb-1 flex h-12 w-12 items-center justify-center rounded-full bg-primary shadow-lg shadow-primary/40 transition-transform group-active:scale-95">
              <Icon name="local_offer" className="text-[24px] text-white" />
            </div>
            <span className="text-[10px] font-bold text-white">Promos</span>
          </Link>
          <Link to="/" className="group flex w-16 flex-col items-center gap-1">
            <Icon name="confirmation_number" className="text-[24px] text-text-secondary transition-colors group-hover:text-white" />
            <span className="text-[10px] font-medium text-text-secondary transition-colors group-hover:text-white">Tickets</span>
          </Link>
          <Link to="/" className="group flex w-16 flex-col items-center gap-1">
            <Icon name="person" className="text-[24px] text-text-secondary transition-colors group-hover:text-white" />
            <span className="text-[10px] font-medium text-text-secondary transition-colors group-hover:text-white">Profile</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
