import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { featuresData, howItWorksData, testimonialsData } from "@/data/landing";
import HeroSection from "@/components/hero";
import Link from "next/link";
import { Slack, MoveUpRight } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section
        id="features"
        className="relative py-20 md:py-32 px-4 bg-white dark:bg-black text-black dark:text-white overflow-hidden transition-colors"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white via-zinc-100/40 to-white dark:from-black dark:via-zinc-900/40 dark:to-black pointer-events-none" />

        <div className="relative container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 gradient-title">
            Powerful Features
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 md:mb-16 text-base md:text-lg">
            Everything you need to track, optimize and grow your financial life
            — powered by intelligent automation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-black/10 to-black/0 dark:from-white/10 dark:to-white/0 hover:from-black/20 dark:hover:from-white/20 transition-all duration-500"
              >
                <div className="h-full bg-zinc-100/70 dark:bg-zinc-900/70 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-black/5 dark:border-white/5 group-hover:border-black/20 dark:group-hover:border-white/20 transition-all duration-500">
                  <div className="mb-5 text-black dark:text-white group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>

                  <h3 className="text-xl md:text-2xl font-semibold mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-20 md:py-32 bg-white dark:bg-black text-black dark:text-white overflow-hidden transition-colors">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-zinc-100/40 to-white dark:from-black dark:via-zinc-900/40 dark:to-black pointer-events-none" />

        <div className="relative container mx-auto px-4 text-center">
          <h2 className="flex flex-wrap items-center justify-center gap-3 text-3xl sm:text-4xl md:text-6xl font-bold mb-6 gradient-title">
            How
            <Slack size={40} className="text-black dark:text-white sm:size-[50px]" />
            BudgetPilot Works
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-14 md:mb-20 text-base md:text-lg">
            Get started in minutes and let intelligent automation manage your
            financial journey.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {howItWorksData.map((step, index) => (
              <div
                key={index}
                className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-black/10 to-black/0 dark:from-white/10 dark:to-white/0 hover:from-black/20 dark:hover:from-white/20 transition-all duration-500"
              >
                <div className="bg-zinc-100/70 dark:bg-zinc-900/70 backdrop-blur-xl rounded-2xl p-8 md:p-10 border border-black/5 dark:border-white/5 group-hover:border-black/20 dark:group-hover:border-white/20 transition-all duration-500 h-full">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    Step {index + 1}
                  </div>

                  <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>

                  <h3 className="text-xl md:text-2xl font-semibold mb-4">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="relative py-20 md:py-32 bg-white dark:bg-black text-black dark:text-white overflow-hidden transition-colors"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white via-zinc-100/40 to-white dark:from-black dark:via-zinc-900/40 dark:to-black pointer-events-none" />

        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 gradient-title">
            Loved by Smart Money Managers
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-14 md:mb-20 text-base md:text-lg">
            Thousands of users trust BudgetPilot to simplify their financial
            life.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-black/10 to-black/0 dark:from-white/10 dark:to-white/0 hover:from-black/20 dark:hover:from-white/20 transition-all duration-500"
              >
                <div className="bg-zinc-100/70 dark:bg-zinc-900/70 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-black/5 dark:border-white/5 group-hover:border-black/20 dark:group-hover:border-white/20 transition-all duration-500 h-full flex flex-col justify-between">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg mb-6">
                    “{testimonial.quote}”
                  </p>

                  <div className="flex items-center gap-4 mt-auto">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full border border-black/10 dark:border-white/10"
                    />

                    <div className="text-left">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-36 bg-white dark:bg-black text-black dark:text-white overflow-hidden transition-colors">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-zinc-100/40 to-white dark:from-black dark:via-zinc-900/40 dark:to-black pointer-events-none" />

        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 gradient-title">
            Take Control of Your Finances Today
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 md:mb-12 text-base md:text-lg">
            Join thousands of users using BudgetPilot to track spending,
            automate budgeting, and achieve financial goals faster.
          </p>

          <div className="flex justify-center">
          <Link href="/dashboard">
            <Button
              size="lg"
              className="px-10 sm:px-16 md:px-20 py-6 md:py-9 text-lg md:text-2xl font-bold 
              bg-zinc-800 hover:bg-zinc-700 
              dark:bg-zinc-800 dark:hover:bg-zinc-700 
              text-white rounded-xl transition-all duration-300 shadow-lg 
              flex items-center gap-4 group [&_svg]:!w-8 [&_svg]:!h-8 md:[&_svg]:!w-10 md:[&_svg]:!h-10"
            >
              Get Started
              <MoveUpRight className="flex items-center justify-center w-8 h-8 border px-2 rounded-full" />
            </Button>
          </Link>
        </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
