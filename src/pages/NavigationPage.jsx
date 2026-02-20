import { Link } from "react-router-dom";
import Icon from "../components/Icon";

const steps = [
  {
    icon: "arrow_upward",
    title: "Walk straight 50m",
    subtitle: "Past H&M on your left",
    distance: "50m",
    active: true,
    landmark: null,
  },
  {
    icon: "turn_right",
    title: "Turn right",
    subtitle: null,
    distance: "20m",
    active: false,
    landmark: "At Jollibee",
  },
  {
    icon: "escalator",
    title: "Take escalator",
    subtitle: "Go up to 3rd Floor",
    distance: "80m",
    active: false,
    landmark: null,
  },
  {
    icon: "location_on",
    title: "Arrive at Uniqlo",
    subtitle: "Destination is on the right",
    distance: null,
    active: false,
    landmark: null,
  },
];

export default function NavigationPage() {
  return (
    <div className="flex h-dvh w-full flex-col overflow-hidden bg-background-dark text-slate-100">
      {/* Map Area (Top 55%) */}
      <div className="relative h-[55%] w-full overflow-hidden bg-[#0b1219]">
        {/* Map grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Map background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBtYnoShzNwYxhOYm86R10rmp8DY8e3BbH1G33XdR5ePuZ_UaMPt389NgLY2UOagGostfR9War7YZjQlZIM5A4b-3TmOBl8klQg-P3kO3UqDeLZFfQdCn5IcSZSLlkmOk6te5GR7b2W4QN8xS_Fj1InphZdTfSQAZRI1xdFiz7sfzsiAALhNOESFzDjLt7re20UVKL6yTQDLValea4kD9lHK4Gl_5lHfo1dC_PeBPauEF-gUmQ4ArX9Kafde00KD4yKeY2U9bSJG4rw')",
          }}
        />

        {/* SVG Navigation Path */}
        <svg
          className="pointer-events-none absolute inset-0 z-10 h-full w-full"
          style={{
            filter: "drop-shadow(0px 0px 4px rgba(13, 127, 242, 0.6))",
          }}
        >
          <path
            d="M 180 450 L 180 300 Q 180 250 230 250 L 280 250 Q 330 250 330 200 L 330 150"
            fill="none"
            stroke="#0d7ff2"
            strokeWidth="6"
            strokeDasharray="10 4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 180 450 L 180 300 Q 180 250 230 250 L 280 250 Q 330 250 330 200 L 330 150"
            fill="none"
            stroke="#0d7ff2"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.4"
          />
        </svg>

        {/* Current Location Marker */}
        <div className="absolute bottom-[20%] left-[calc(50%-40px)] z-20 -translate-x-1/2 translate-y-1/2">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-full border-4 border-[#0d7ff2] bg-white shadow-lg">
            <div className="pulse-ring" />
            <Icon
              name="navigation"
              className="text-[16px] font-bold text-[#0d7ff2]"
            />
          </div>
        </div>

        {/* Destination Pin */}
        <div className="absolute right-[10%] top-[18%] z-20 flex -translate-x-1/2 -translate-y-full flex-col items-center">
          <div className="mb-1 whitespace-nowrap rounded-lg bg-primary px-3 py-1.5 text-xs font-bold text-white shadow-lg">
            Uniqlo
          </div>
          <Icon
            name="location_on"
            filled
            className="text-4xl text-primary drop-shadow-lg"
          />
        </div>

        {/* Map Controls */}
        <div className="absolute left-4 top-14 z-30">
          <Link
            to="/map"
            className="flex items-center justify-center rounded-full border border-white/10 bg-surface-dark/90 p-3 text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-surface-dark"
          >
            <Icon name="arrow_back" />
          </Link>
        </div>
        <div className="absolute right-4 top-14 z-30 flex flex-col gap-3">
          <button className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-surface-dark/90 text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-surface-dark">
            <Icon name="volume_up" />
          </button>
          <button className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-surface-dark/90 text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-surface-dark">
            <Icon name="layers" />
          </button>
        </div>
        <div className="absolute bottom-6 right-4 z-30">
          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary shadow-lg transition-colors hover:bg-slate-100">
            <Icon name="my_location" />
          </button>
        </div>
      </div>

      {/* Instruction Sheet */}
      <div className="relative z-40 -mt-6 flex flex-1 flex-col rounded-t-xl border-t border-white/5 bg-surface-dark shadow-[0_-4px_20px_rgba(0,0,0,0.4)]">
        {/* Drag Handle */}
        <div className="flex w-full items-center justify-center pb-1 pt-3">
          <div className="h-1.5 w-12 rounded-full bg-slate-600" />
        </div>

        {/* Route Header */}
        <div className="border-b border-white/5 px-6 py-4">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="mb-1 text-2xl font-bold text-white">
                3 min{" "}
                <span className="text-lg font-normal text-slate-400">
                  &bull; 150m
                </span>
              </h2>
              <p className="text-sm font-medium text-slate-400">
                Fastest route to{" "}
                <span className="text-primary">Uniqlo</span>
              </p>
            </div>
            <div className="rounded-lg bg-primary/20 p-2">
              <Icon name="directions_walk" className="text-primary" />
            </div>
          </div>
        </div>

        {/* Steps List */}
        <div className="no-scrollbar flex-1 overflow-y-auto px-4 pb-24 pt-2">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group relative flex items-start gap-4 px-2 py-4"
            >
              {/* Timeline line */}
              {i < steps.length - 1 && (
                <div className="absolute bottom-[-16px] left-[29px] top-12 w-0.5 bg-white/10" />
              )}
              <div className="relative z-10 shrink-0">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${
                    step.active
                      ? "bg-primary shadow-[0_0_20px_rgba(13,127,242,0.5)]"
                      : "border border-white/10 bg-surface-dark"
                  }`}
                >
                  <Icon name={step.icon} className="text-xl text-white" />
                </div>
              </div>
              <div className="flex-1 pt-1">
                <div className="flex items-start justify-between">
                  <h3
                    className={`leading-tight ${
                      step.active
                        ? "text-lg font-bold text-white"
                        : "text-base font-medium text-slate-200"
                    }`}
                  >
                    {step.title}
                  </h3>
                  {step.distance && (
                    <span
                      className={`text-sm font-${step.active ? "bold" : "medium"} ${
                        step.active ? "text-primary" : "text-slate-500"
                      }`}
                    >
                      {step.distance}
                    </span>
                  )}
                </div>
                {step.subtitle && (
                  <p className="mt-1 text-sm text-slate-400">
                    {step.subtitle}
                  </p>
                )}
                {step.landmark && (
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex items-center gap-1 rounded bg-white/10 px-2 py-1 text-xs font-medium text-slate-300">
                      <Icon name="storefront" className="text-[14px]" />
                      {step.landmark}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Exit Button */}
        <div className="absolute bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-background-dark via-background-dark to-transparent p-6 pt-4">
          <Link
            to="/map"
            className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-[#ef4444] font-bold text-white shadow-lg transition-all hover:bg-red-600 active:scale-[0.98]"
          >
            <Icon name="close" />
            Exit Navigation
          </Link>
          <div className="h-4 w-full" />
        </div>
      </div>
    </div>
  );
}
