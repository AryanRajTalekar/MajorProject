"use client";

import Marquee from "react-fast-marquee";

export default function MarqueeText() {
  return (
    <Marquee
      speed={100}
      gradient={false}
      pauseOnHover={true}
      className="text-xl sm:text-2xl md:text-3xl font-semibold whitespace-nowrap text-gray-800 dark:text-white"
    >
      AI Powered Budget Tracking • Smart Insights • Real Time Analytics •
      Financial Automation • Expense Predictions • Budget Optimization •
      AI Powered Budget Tracking • Smart Insights • Real Time Analytics •
      Financial Automation • Expense Predictions • Budget Optimization •
    </Marquee>
  );
}
