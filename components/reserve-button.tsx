"use client";

export default function ReserveButton() {
  return (
    <button
      onClick={() => window.dispatchEvent(new Event('openBookingBot'))}
      className="flex items-center justify-center gap-3 bg-[#2c1f12] text-[#f5f0e8] font-bold text-base px-8 py-4 rounded-full shadow-[0_10px_30px_rgba(44,31,18,0.3)] hover:bg-[#5c6b3a] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      Reserve a Table
    </button>
  );
}
