import { Link } from "react-router-dom";
import Icon from "../components/Icon";

const benefits = [
  {
    icon: "account_balance_wallet",
    title: "Track Points Balance",
    description: "Monitor your points and rewards in real-time.",
  },
  {
    icon: "bolt",
    title: "Faster Checkout",
    description: "Just show your digital card to earn and pay.",
  },
  {
    icon: "stars",
    title: "Exclusive Offers",
    description: "Access members-only discounts and early sales.",
  },
];

export default function LinkSmacPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-white dark:bg-background-dark">
      {/* Header */}
      <header className="px-6 pb-4 pt-14 flex items-center">
        <Link
          to="/profile"
          className="rounded-full p-2 -ml-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <Icon name="arrow_back_ios_new" className="text-slate-600 dark:text-slate-200" />
        </Link>
        <div className="flex-1 text-center pr-8">
          <h1 className="text-sm font-bold uppercase tracking-widest text-slate-400">
            Step 2 of 3
          </h1>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 px-8 pt-4 pb-12 flex flex-col">
        {/* Logo + Title */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl flex items-center justify-center shadow-lg mb-6">
            <span className="text-white font-extrabold text-3xl tracking-tighter">
              SMAC
            </span>
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white text-center">
            Link Your SMAC
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-center mt-2 text-sm">
            Enter your 16-digit card number to start earning points with every
            purchase.
          </p>
        </div>

        {/* Card Input */}
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase ml-1">
              Card Number
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Icon
                  name="credit_card"
                  className="text-slate-400 group-focus-within:text-primary transition-colors"
                />
              </div>
              <input
                type="text"
                maxLength={19}
                placeholder="6011 0000 0000 0000"
                className="block w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-surface-dark border-none ring-1 ring-slate-200 dark:ring-slate-700 rounded-xl text-lg font-semibold tracking-widest text-slate-900 dark:text-white placeholder:text-slate-300 dark:placeholder:text-slate-600 focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-surface-highlight transition-all outline-none"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-slate-100 dark:border-slate-800" />
            <span className="flex-shrink mx-4 text-xs font-bold text-slate-400 uppercase">
              Or
            </span>
            <div className="flex-grow border-t border-slate-100 dark:border-slate-800" />
          </div>

          {/* Scan Barcode */}
          <button className="w-full flex items-center justify-center gap-3 py-4 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-300 font-bold hover:bg-slate-50 dark:hover:bg-surface-dark hover:border-primary/30 transition-all active:scale-[0.98]">
            <Icon name="qr_code_scanner" />
            Scan Card Barcode
          </button>
        </div>

        {/* Benefits */}
        <div className="mt-12 space-y-5 bg-slate-50 dark:bg-surface-dark p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
          <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">
            Why link your card?
          </h4>
          {benefits.map((b) => (
            <div key={b.title} className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-primary/20 flex items-center justify-center shrink-0">
                <Icon name={b.icon} className="text-primary text-sm" />
              </div>
              <div>
                <p className="font-bold text-sm text-slate-800 dark:text-white">
                  {b.title}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {b.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-auto pt-10 flex flex-col gap-3">
          <Link
            to="/profile"
            className="w-full bg-primary py-4 rounded-xl text-white font-bold text-lg shadow-lg shadow-primary/25 active:scale-[0.98] transition-all text-center"
          >
            Link Now
          </Link>
          <Link
            to="/profile"
            className="w-full py-4 text-slate-400 font-bold text-sm hover:text-slate-600 dark:hover:text-slate-300 transition-colors text-center"
          >
            Skip for Now
          </Link>
        </div>
      </main>
    </div>
  );
}
