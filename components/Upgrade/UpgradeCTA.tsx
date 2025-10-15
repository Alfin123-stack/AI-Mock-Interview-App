"use client";

export function UpgradeCTA() {
  return (
    <section className="relative py-24 text-center">
      <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
        Ready to Unlock Pro Features?
      </h2>
      <p className="mt-4 text-neutral-600 dark:text-neutral-400">
        Choose the plan that fits your needs and start leveling up today.
      </p>
      <div className="mt-8 flex justify-center">
        <button className="rounded-xl bg-gradient-to-r from-violet-600 to-pink-500 px-8 py-3 font-semibold text-white shadow-md hover:opacity-90">
          Upgrade Now
        </button>
      </div>
    </section>
  );
}
