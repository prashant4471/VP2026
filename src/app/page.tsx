"use client";

import { useMemo, useState } from "react";

const loveNotes = [
  {
    title: "Sunrise energy",
    message: "You make every morning feel like the first sunrise of summer.",
  },
  {
    title: "Soft calm",
    message: "You are my favorite pause button when the world spins fast.",
  },
  {
    title: "Sweet chaos",
    message: "With you, even the mess feels magical.",
  },
  {
    title: "Glow",
    message: "You turn ordinary days into little festivals.",
  },
];

const timeline = [
  {
    date: "Our first hello",
    title: "The spark",
    detail: "That moment when everything felt lighter and brighter.",
  },
  {
    date: "The first adventure",
    title: "Made of laughter",
    detail: "We kept getting lost and somehow found everything.",
  },
  {
    date: "Our comfort rituals",
    title: "Us, at home",
    detail: "Cozy evenings, shared playlists, and stolen fries.",
  },
  {
    date: "Today",
    title: "Forever in motion",
    detail: "Still choosing each other, every single day.",
  },
];

const gallery = [
  "Cozy cafe",
  "Golden hour",
  "Late-night walk",
  "Tiny surprises",
  "Movie marathons",
  "Favorite selfies",
];

const promises = [
  "To hype you up on the hard days.",
  "To bring snacks, always.",
  "To dance in the kitchen with you.",
  "To be your calm and your chaos.",
];

export default function Home() {
  const [showSurprise, setShowSurprise] = useState(false);
  const [showGate, setShowGate] = useState(true);
  const [celebrate, setCelebrate] = useState(false);
  const [runawayStyle, setRunawayStyle] = useState({ top: 58, left: 62 });
  const [runawayLabel, setRunawayLabel] = useState("Catch me if you can");
  const [securityUnlocked, setSecurityUnlocked] = useState(false);
  const [securityCode, setSecurityCode] = useState("");
  const [securityError, setSecurityError] = useState("");
  const accessCode = "0214";

  const dodgeLabels = useMemo(
    () => [
      "Too slow 😜",
      "Not today, cupid",
      "Nope, try again",
      "Catch me if you can",
      "Almost!",
      "Missed me 💨",
    ],
    []
  );

  const moveRunaway = () => {
    const nextTop = 20 + Math.random() * 55;
    const nextLeft = 10 + Math.random() * 70;
    setRunawayStyle({ top: nextTop, left: nextLeft });
    setRunawayLabel(
      dodgeLabels[Math.floor(Math.random() * dodgeLabels.length)]
    );
  };

  const handleAccept = () => {
    setShowGate(false);
    setCelebrate(true);
    setTimeout(() => setCelebrate(false), 9000);
  };

  const handleSecuritySubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (securityCode.trim() === accessCode) {
      setSecurityUnlocked(true);
      setSecurityError("");
    } else {
      setSecurityError("Oops, that code isn't right. Try again.");
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 12 }).map((_, index) => (
          <span
            key={`heart-${index}`}
            className="floating-heart"
            style={{
              left: `${5 + index * 7}%`,
              top: `${10 + (index % 6) * 12}%`,
              animationDelay: `${index * 0.7}s`,
              transform: `rotate(45deg) scale(${0.7 + index * 0.03})`,
            }}
          />
        ))}
      </div>

      <header className="relative z-10">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 text-sm font-medium uppercase tracking-[0.2em] text-rose-700">
          <span className="text-lg font-semibold tracking-[0.3em] text-rose-600">
            Love Note
          </span>
          <div className="hidden gap-6 text-xs text-rose-500 sm:flex">
            <a href="#notes" className="hover:text-rose-700">
              Notes
            </a>
            <a href="#timeline" className="hover:text-rose-700">
              Timeline
            </a>
            <a href="#gallery" className="hover:text-rose-700">
              Gallery
            </a>
            <a href="#promise" className="hover:text-rose-700">
              Promise
            </a>
          </div>
        </nav>
      </header>

      <main className={`relative z-10 ${securityUnlocked ? "" : "blur-sm"}`}>
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-10 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-col gap-6">
              <p className="text-xs uppercase tracking-[0.35em] text-rose-400">
                February 14th
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-rose-800 sm:text-5xl">
                A little universe of us, wrapped in Valentine magic.
              </h1>
              <p className="text-lg leading-relaxed text-rose-700/80">
                I built this one-page love story to remind you of every sparkle, every
                laugh, and every dream we keep building together.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setShowSurprise(true)}
                  className="rounded-full bg-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-rose-500"
                >
                  Open your surprise
                </button>
                <a
                  href="#notes"
                  className="rounded-full border border-rose-300 px-6 py-3 text-sm font-semibold text-rose-600 transition hover:border-rose-400"
                >
                  Scroll the love
                </a>
              </div>
            </div>

            <div className="glass-card romantic-glow flex flex-col justify-between rounded-3xl p-8 text-rose-700">
              <p className="text-sm uppercase tracking-[0.3em] text-rose-400">
                Tonight's vibe
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-rose-800">
                Candlelight, slow dancing, and a playlist made of our moments.
              </h2>
              <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em]">
                <span className="rounded-full bg-rose-200/70 px-3 py-1 text-rose-700">
                  Warm glow
                </span>
                <span className="rounded-full bg-rose-200/70 px-3 py-1 text-rose-700">
                  Soft jazz
                </span>
                <span className="rounded-full bg-rose-200/70 px-3 py-1 text-rose-700">
                  Midnight dessert
                </span>
              </div>
              <p className="mt-6 text-sm text-rose-600/90">
                PS: There is a kiss waiting on the last card.
              </p>
            </div>
          </div>
        </section>

        <section id="notes" className="mx-auto w-full max-w-6xl px-6 py-12">
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.3em] text-rose-400">
              Love notes
            </p>
            <h2 className="text-3xl font-semibold text-rose-800">
              Tiny letters from my heart
            </h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {loveNotes.map((note) => (
              <article
                key={note.title}
                className="glass-card rounded-2xl p-6 text-rose-700 transition hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold text-rose-800">
                  {note.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-rose-700/80">
                  {note.message}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="timeline" className="mx-auto w-full max-w-6xl px-6 py-12">
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.3em] text-rose-400">
              Timeline
            </p>
            <h2 className="text-3xl font-semibold text-rose-800">
              Our favorite milestones
            </h2>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {timeline.map((item) => (
              <article
                key={item.title}
                className="glass-card rounded-2xl p-6 text-rose-700"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-rose-400">
                  {item.date}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-rose-800">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-rose-700/80">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="gallery" className="mx-auto w-full max-w-6xl px-6 py-12">
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.3em] text-rose-400">
              Gallery
            </p>
            <h2 className="text-3xl font-semibold text-rose-800">
              Scenes I want on repeat
            </h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((title, index) => (
              <div
                key={title}
                className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-rose-200 via-rose-100 to-amber-100 p-6 text-rose-800"
              >
                <div className="text-4xl">
                  {index % 2 === 0 ? "💌" : "📷"}
                </div>
                <p className="mt-6 text-lg font-semibold">{title}</p>
                <p className="mt-2 text-sm text-rose-700/80">
                  Replace with your favorite photos.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="promise" className="mx-auto w-full max-w-6xl px-6 py-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="glass-card rounded-3xl p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-rose-400">
                A love letter
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-rose-800">
                You are my favorite place to be.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-rose-700/80">
                Thank you for the kindness, the patience, and the way you make
                everything feel like home. I love you today, tomorrow, and in all
                the little in-between moments.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-rose-500">
                <span className="rounded-full bg-rose-100 px-3 py-1">Forever</span>
                <span className="rounded-full bg-rose-100 px-3 py-1">Always</span>
                <span className="rounded-full bg-rose-100 px-3 py-1">Only you</span>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-rose-400">
                My promises
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-rose-800">
                The little things I vow to keep doing.
              </h2>
              <ul className="mt-6 space-y-4 text-sm text-rose-700/80">
                {promises.map((promise) => (
                  <li key={promise} className="flex items-start gap-3">
                    <span className="mt-1 text-lg">💗</span>
                    <span>{promise}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto w-full max-w-6xl px-6 pb-12 text-center text-xs uppercase tracking-[0.3em] text-rose-400">
        Made with all my love
      </footer>

      {showSurprise ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-rose-950/40 px-6 backdrop-blur">
          <div className="glass-card romantic-glow w-full max-w-lg rounded-3xl p-8 text-center text-rose-800">
            <p className="text-xs uppercase tracking-[0.3em] text-rose-400">
              Surprise unlocked
            </p>
            <h2 className="mt-4 text-2xl font-semibold">Dinner is on me.</h2>
            <p className="mt-3 text-sm leading-relaxed text-rose-700/80">
              Dress comfy, bring your smile, and be ready for a night of cozy
              surprises. Your kiss voucher is valid for unlimited use.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => setShowSurprise(false)}
                className="rounded-full border border-rose-300 px-5 py-2 text-sm font-semibold text-rose-600"
              >
                Close
              </button>
              <button
                type="button"
                className="rounded-full bg-rose-600 px-5 py-2 text-sm font-semibold text-white"
              >
                Claim the kiss
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {showGate && securityUnlocked ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-rose-950/40 px-6 backdrop-blur">
          <div className="relative w-full max-w-xl overflow-hidden rounded-[32px] bg-gradient-to-br from-rose-100 via-rose-50 to-amber-50 p-8 text-center shadow-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-rose-400">
              A tiny quest
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-rose-800">
              Will you be my Valentine?
            </h2>
            <p className="mt-3 text-sm text-rose-600/90">
              Choose your destiny. The right answer unlocks the magic.
            </p>

            <div className="relative mt-8 h-32">
              <button
                type="button"
                onClick={handleAccept}
                className="absolute left-8 top-1/2 -translate-y-1/2 rounded-full bg-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-rose-500"
              >
                Be mine ✨
              </button>

              <button
                type="button"
                onMouseEnter={moveRunaway}
                onFocus={moveRunaway}
                onTouchStart={moveRunaway}
                className="absolute rounded-full border border-rose-300 bg-white/80 px-6 py-3 text-xs font-semibold text-rose-500 shadow transition"
                style={{
                  top: `${runawayStyle.top}%`,
                  left: `${runawayStyle.left}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {runawayLabel}
              </button>
            </div>

          </div>
        </div>
      ) : null}

      {celebrate ? (
        <div className="celebration-layer pointer-events-none">
          {Array.from({ length: 18 }).map((_, index) => (
            <span
              key={`burst-${index}`}
              className="burst-heart"
              style={{
                left: `${(index % 6) * 16 + 8}%`,
                top: `${Math.floor(index / 6) * 25 + 10}%`,
                animationDelay: `${index * 0.15}s`,
              }}
            />
          ))}
          <div className="celebration-message">
            <h3>Okay, wow — you just made me the luckiest human 💘</h3>
            <p>
              Consider this our official love quest unlocked. I’m all in for
              every giggle, every adventure, and every kiss.
            </p>
          </div>
        </div>
      ) : null}

      {!securityUnlocked ? (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-rose-950/50 px-6 backdrop-blur">
          <form
            onSubmit={handleSecuritySubmit}
            className="glass-card romantic-glow w-full max-w-md rounded-3xl p-8 text-center"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-rose-400">
              Private access
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-rose-800">
              Enter our secret code
            </h2>
            <p className="mt-3 text-sm text-rose-600/90">
              This love story is just for us.
            </p>
            <input
              type="password"
              value={securityCode}
              onChange={(event) => setSecurityCode(event.target.value)}
              placeholder="••••"
              className="mt-6 w-full rounded-full border border-rose-200 bg-white/80 px-5 py-3 text-center text-sm text-rose-700 outline-none focus:border-rose-400"
            />
            {securityError ? (
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-rose-500">
                {securityError}
              </p>
            ) : null}
            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-rose-500"
            >
              Unlock the love
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
}
