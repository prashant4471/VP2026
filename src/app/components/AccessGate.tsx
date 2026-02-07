"use client";

import { useState } from "react";

type AccessGateProps = {
  accessCode: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  onUnlockChange?: (unlocked: boolean) => void;
};

export default function AccessGate({
  accessCode,
  title,
  subtitle,
  buttonLabel,
  onUnlockChange,
}: AccessGateProps) {
  const [unlocked, setUnlocked] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (code.trim() === accessCode) {
      setUnlocked(true);
      setError("");
      onUnlockChange?.(true);
    } else {
      setError("Oops, that code isn't right. Try again.");
    }
  };

  if (unlocked) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-rose-950/70 px-6 backdrop-blur">
      <form
        onSubmit={handleSubmit}
        className="glass-card romantic-glow w-full max-w-md rounded-3xl p-8 text-center"
      >
        <p className="text-xs uppercase tracking-[0.35em] text-rose-300">
          Private access
        </p>
        <h2 className="mt-4 text-2xl font-semibold text-rose-100">{title}</h2>
        <p className="mt-3 text-sm text-rose-200/90">{subtitle}</p>
        <input
          type="password"
          value={code}
          onChange={(event) => setCode(event.target.value)}
          placeholder="••••"
          className="mt-6 w-full rounded-full border border-rose-400/60 bg-white/10 px-5 py-3 text-center text-sm text-rose-100 outline-none focus:border-rose-300"
        />
        {error ? (
          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-rose-300">
            {error}
          </p>
        ) : null}
        <button
          type="submit"
          className="mt-6 w-full rounded-full bg-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-rose-500"
        >
          {buttonLabel}
        </button>
      </form>
    </div>
  );
}
