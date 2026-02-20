export default function App() {
  return (
    <div className="flex min-h-dvh flex-col bg-white">
      {/* Status bar spacer */}
      <div className="h-[var(--safe-top)]" />

      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-gray-100 bg-white/80 px-4 py-3 backdrop-blur-md">
        <h1 className="text-lg font-semibold">Nexus</h1>
      </header>

      {/* Main content */}
      <main className="flex flex-1 flex-col items-center justify-center gap-4 p-6">
        <div className="rounded-2xl bg-gray-50 p-6 text-center">
          <p className="text-2xl">📱</p>
          <h2 className="mt-2 text-lg font-medium text-gray-900">
            Ready to prototype
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Mobile-first layout &middot; 390px max-width on desktop
          </p>
        </div>
      </main>

      {/* Bottom tab bar example */}
      <nav className="sticky bottom-0 flex items-center justify-around border-t border-gray-100 bg-white/80 px-4 pb-[max(0.5rem,var(--safe-bottom))] pt-2 backdrop-blur-md">
        {["Home", "Search", "Profile"].map((tab) => (
          <button
            key={tab}
            className="flex flex-col items-center gap-0.5 text-xs text-gray-400 transition-colors hover:text-gray-900"
          >
            <span className="text-lg">
              {tab === "Home" ? "🏠" : tab === "Search" ? "🔍" : "👤"}
            </span>
            {tab}
          </button>
        ))}
      </nav>
    </div>
  );
}
