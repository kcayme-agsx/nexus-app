import { Link } from "react-router-dom";
import Icon from "../components/Icon";

const activityBars = [
  { type: "earned", height: "40%" },
  { type: "redeemed", height: "20%" },
  { type: "earned", height: "70%" },
  { type: "earned", height: "55%" },
  { type: "redeemed", height: "30%" },
  { type: "earned", height: "90%" },
  { type: "earned", height: "45%" },
];

const tierPerks = [
  { icon: "local_cafe" },
  { icon: "local_parking" },
  { icon: "airplane_ticket" },
];

export default function SmacPointsPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-white dark:bg-background-dark text-slate-900 dark:text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md pt-14 pb-4 px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              to="/profile"
              className="p-2 -ml-2 rounded-full hover:bg-slate-100 dark:hover:bg-surface-dark transition-colors"
            >
              <Icon name="arrow_back_ios_new" className="text-slate-600 dark:text-slate-200" />
            </Link>
            <h1 className="text-xl font-bold tracking-tight">SMAC Points</h1>
          </div>
          <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-surface-dark transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
            <Icon name="history" className="text-slate-600 dark:text-slate-200" />
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 overflow-y-auto no-scrollbar space-y-6 pt-6 pb-24">
        {/* Balance Card */}
        <section className="px-6">
          <div className="relative overflow-hidden rounded-2xl bg-primary/5 dark:bg-gradient-to-br dark:from-primary/20 dark:to-primary/5 p-6 border border-primary/20 dark:border-primary/30">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-primary/10 dark:bg-primary/20 p-2 rounded-lg">
                <Icon name="wallet" className="text-primary" />
              </div>
              <span className="text-xs font-bold text-primary px-3 py-1 bg-primary/10 rounded-full border border-primary/20 uppercase tracking-widest">
                Active
              </span>
            </div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Available Balance
            </p>
            <div className="flex items-baseline gap-2 mt-1">
              <h2 className="text-4xl font-extrabold tracking-tight">8,500</h2>
              <span className="text-lg font-bold text-primary">pts</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
              ≈ ₱850.00 Philippine Pesos
            </p>
            <div className="mt-6 flex gap-3">
              <button className="flex-1 bg-primary text-white font-bold py-3 rounded-xl shadow-lg shadow-primary/20 active:scale-95 transition-all text-sm flex items-center justify-center gap-2">
                <Icon name="qr_code_2" className="text-sm" />
                Use Points
              </button>
              <button className="flex-1 bg-slate-100 dark:bg-surface-dark border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold py-3 rounded-xl active:scale-95 transition-all text-sm">
                Transfer
              </button>
            </div>
          </div>
        </section>

        {/* Expiring Warning */}
        <section className="px-6">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-900/40">
            <div className="bg-amber-100 dark:bg-amber-500/20 p-2 rounded-full">
              <Icon name="warning" className="text-amber-500 text-xl" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-amber-800 dark:text-amber-200">
                1,200 pts expiring soon
              </p>
              <p className="text-xs text-amber-600 dark:text-amber-200/60">
                Expires on Mar 31, 2024
              </p>
            </div>
            <button className="text-xs font-bold text-amber-600 dark:text-amber-500 hover:underline">
              Redeem Now
            </button>
          </div>
        </section>

        {/* Activity Chart */}
        <section className="px-6">
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-surface-dark border border-slate-200 dark:border-slate-800">
            <h3 className="text-sm font-bold mb-6">
              Points Activity (Last 30 Days)
            </h3>
            <div className="flex items-end justify-between h-32 gap-2 mb-4">
              {activityBars.map((bar, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t-lg ${
                    bar.type === "earned"
                      ? "bg-primary/30 dark:bg-primary/20"
                      : "bg-red-400/30 dark:bg-red-500/20"
                  }`}
                  style={{ height: bar.height }}
                />
              ))}
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-primary/60" />
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Earned (4,200)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400/50 dark:bg-red-500/40" />
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Redeemed (1,800)
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Tier Progress */}
        <section className="px-6">
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-surface-dark border border-slate-200 dark:border-slate-800 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold/10 blur-[80px]" />
            <div className="flex justify-between items-center mb-6 relative z-10">
              <div>
                <p className="text-[10px] font-bold text-gold uppercase tracking-widest mb-1">
                  Current Tier
                </p>
                <h3 className="text-2xl font-black flex items-center gap-2">
                  Gold Member
                  <Icon
                    name="workspace_premium"
                    filled
                    className="text-gold text-xl"
                  />
                </h3>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">
                  Next Tier
                </p>
                <p className="text-sm font-bold text-slate-600 dark:text-slate-300">
                  Platinum
                </p>
              </div>
            </div>
            <div className="space-y-3 relative z-10">
              <div className="h-2.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-gold to-yellow-600 rounded-full w-[72%]" />
              </div>
              <div className="flex justify-between items-center text-xs font-medium">
                <span className="text-slate-500 dark:text-slate-400">
                  1,500 pts to Platinum
                </span>
                <span className="text-slate-600 dark:text-slate-300">72%</span>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between relative z-10">
              <div className="flex -space-x-2">
                {tierPerks.map((perk) => (
                  <div
                    key={perk.icon}
                    className="w-8 h-8 rounded-full border-2 border-slate-50 dark:border-surface-dark bg-slate-100 dark:bg-slate-800 flex items-center justify-center"
                  >
                    <Icon name={perk.icon} className="text-sm text-gold" />
                  </div>
                ))}
              </div>
              <button className="text-sm font-bold text-primary flex items-center gap-1">
                Tier Benefits
                <Icon name="chevron_right" className="text-sm" />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 z-30 w-full max-w-[390px] border-t border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/95 backdrop-blur-md py-3 px-6 pb-6 flex justify-between items-end">
        <Link to="/home" className="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500 hover:text-primary transition-colors w-1/4">
          <Icon name="home" />
          <span className="text-[10px] font-medium">Home</span>
        </Link>
        <Link to="/map" className="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500 hover:text-primary transition-colors w-1/4">
          <Icon name="map" />
          <span className="text-[10px] font-medium">Map</span>
        </Link>
        <Link to="/smac-points" className="flex flex-col items-center gap-1 text-primary w-1/4">
          <Icon name="wallet" filled />
          <span className="text-[10px] font-bold">SMAC</span>
        </Link>
        <Link to="/profile" className="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500 hover:text-primary transition-colors w-1/4">
          <Icon name="person" />
          <span className="text-[10px] font-medium">Account</span>
        </Link>
      </nav>
    </div>
  );
}
