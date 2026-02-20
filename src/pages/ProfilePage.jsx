import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Icon from "../components/Icon";
import ThemeToggle from "../components/ThemeToggle";

const settingsItems = [
  {
    icon: "history",
    label: "Transaction History",
    subtitle: "View your latest purchases & points",
    path: null,
  },
  {
    icon: "payments",
    label: "Linked Payment Methods",
    subtitle: "Manage cards and digital wallets",
    path: null,
  },
  {
    icon: "settings",
    label: "App Settings",
    subtitle: "Notifications, Security, Language",
    path: "/settings",
  },
  {
    icon: "shield_person",
    label: "Privacy & Security",
    subtitle: "Manage your account security",
    path: null,
  },
];

export default function ProfilePage() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="flex min-h-dvh flex-col bg-slate-50 dark:bg-background-dark text-slate-900 dark:text-slate-100">
      {/* Header / Avatar Section */}
      <header className="bg-white dark:bg-background-dark border-b border-slate-200 dark:border-slate-800 pt-14 pb-8 px-6">
        {/* Top bar with theme toggle */}
        <div className="flex justify-end mb-4">
          <ThemeToggle className="text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800" />
        </div>

        <div className="flex flex-col items-center text-center">
          {/* Avatar */}
          <div className="relative mb-4">
            <div className="w-24 h-24 rounded-full border-4 border-white dark:border-gold shadow-md bg-primary flex items-center justify-center text-white text-[32px] font-bold uppercase overflow-hidden">
              {user?.initials || "??"}
            </div>
            <div className="absolute bottom-0 right-0 bg-primary dark:bg-gold text-white dark:text-background-dark p-1.5 rounded-full border-2 border-white dark:border-background-dark">
              <Icon name="edit" className="text-[16px] block" />
            </div>
          </div>

          {/* Name */}
          <h1 className="text-2xl font-extrabold tracking-tight">
            {user?.fullName || "Guest User"}
          </h1>

          {/* SMAC Badge */}
          <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 bg-smac-gold/10 border border-smac-gold/20 rounded-full">
            <Icon
              name="workspace_premium"
              filled
              className="text-[14px] text-smac-gold"
            />
            <span className="text-[10px] font-bold text-smac-gold uppercase tracking-widest">
              Verified SMAC Gold Member
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto no-scrollbar pb-28 pt-6">
        {/* Points Card */}
        <section className="px-6 -mt-6 relative z-10">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-bl-full -mr-8 -mt-8 opacity-50" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-smac-gold/10 rounded-tr-full -ml-6 -mb-6 opacity-30" />
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">
                    Current Points
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-white tracking-tight">
                      8,500
                    </span>
                    <span className="text-smac-gold font-bold">PTS</span>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-2 rounded-lg">
                  <Icon name="contactless" className="text-white" />
                </div>
              </div>
              <div className="flex gap-3">
                <Link
                  to="/smac-points"
                  className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-primary/20 text-sm text-center"
                >
                  Manage Points
                </Link>
                <button className="px-4 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all border border-white/10">
                  <Icon name="qr_code_2" className="block" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Balance & Vouchers */}
        <section className="px-6 mt-6">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white dark:bg-surface-dark p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-primary/20 flex items-center justify-center text-primary">
                <Icon name="account_balance_wallet" className="text-[20px]" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase">
                  Balance
                </p>
                <p className="text-sm font-bold">₱2,450.00</p>
              </div>
            </div>
            <div className="bg-white dark:bg-surface-dark p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-50 dark:bg-orange-500/20 flex items-center justify-center text-orange-500">
                <Icon name="confirmation_number" className="text-[20px]" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase">
                  Vouchers
                </p>
                <p className="text-sm font-bold">12 Active</p>
              </div>
            </div>
          </div>
        </section>

        {/* Account Settings */}
        <section className="px-6 mt-8 space-y-2">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1 mb-3">
            Account Settings
          </h3>
          <div className="bg-white dark:bg-surface-dark/50 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
            {settingsItems.map((item, i) => (
              <button
                key={item.label}
                onClick={() => item.path && navigate(item.path)}
                className={`w-full flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-surface-dark transition-colors group ${
                  i < settingsItems.length - 1
                    ? "border-b border-slate-100 dark:border-slate-800"
                    : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    <Icon name={item.icon} />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold leading-tight">
                      {item.label}
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-500">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <Icon name="chevron_right" className="text-slate-300 dark:text-slate-600" />
              </button>
            ))}
          </div>

          {/* Link SMAC (if not yet linked — always show for demo) */}
          <Link
            to="/link-smac"
            className="w-full mt-2 p-4 flex items-center justify-between bg-primary/5 dark:bg-primary/10 rounded-2xl border border-primary/20 hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors group"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Icon name="credit_card" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-primary leading-tight">
                  Link Another Card
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Add more SMAC cards to your account
                </p>
              </div>
            </div>
            <Icon name="chevron_right" className="text-primary/50" />
          </Link>

          {/* Sign Out */}
          <button
            onClick={handleLogout}
            className="w-full mt-4 p-4 flex items-center justify-center gap-2 text-red-500 font-bold text-sm bg-red-50 dark:bg-red-500/5 rounded-2xl border border-red-100 dark:border-red-500/10 hover:bg-red-100 dark:hover:bg-red-500/10 transition-colors"
          >
            <Icon name="logout" className="text-[20px]" />
            Sign Out
          </button>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 z-30 w-full max-w-[390px] border-t border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/95 backdrop-blur-xl py-3 px-6 pb-8 flex justify-between items-end">
        <Link to="/home" className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors w-1/4">
          <Icon name="home" />
          <span className="text-[10px] font-medium">Home</span>
        </Link>
        <Link to="/map" className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors w-1/4">
          <Icon name="map" />
          <span className="text-[10px] font-medium">Map</span>
        </Link>
        <Link to="/promos" className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors w-1/4">
          <Icon name="storefront" />
          <span className="text-[10px] font-medium">Directory</span>
        </Link>
        <Link to="/profile" className="flex flex-col items-center gap-1 text-primary w-1/4">
          <Icon name="person" filled />
          <span className="text-[10px] font-bold">Account</span>
        </Link>
      </nav>
    </div>
  );
}
