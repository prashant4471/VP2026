"use client";

import { useEffect, useMemo, useState } from "react";
import AccessGate from "./components/AccessGate";

type DayContent = {
  name: string;
  emoji: string;
  headline: string;
  intro: string;
  vibe: string;
  dares: string[];
  spotlight: string;
  closing: string;
};

const dayCards = [
  {
    day: "7",
    title: "Rose Day",
    emoji: "🌹",
    tagline: "Petals, soft smiles, and a rose just for you.",
  },
  {
    day: "8",
    title: "Propose Day",
    emoji: "💍",
    tagline: "Bold words, happy nerves, and a love-filled yes.",
  },
  {
    day: "9",
    title: "Chocolate Day",
    emoji: "🍫",
    tagline: "Sweet treats and even sweeter moments together.",
  },
  {
    day: "10",
    title: "Teddy Day",
    emoji: "🧸",
    tagline: "Cozy hugs, plush dreams, and a soft little universe.",
  },
  {
    day: "11",
    title: "Promise Day",
    emoji: "🤞",
    tagline: "Pinky swears, forever energy, and golden promises.",
  },
  {
    day: "12",
    title: "Hug Day",
    emoji: "🤗",
    tagline: "Warm arms, safe hearts, and a hug that lasts all day.",
  },
  {
    day: "13",
    title: "Kiss Day",
    emoji: "💋",
    tagline: "Soft kisses, loud smiles, and a little mischief.",
  },
  {
    day: "14",
    title: "Valentine's Day",
    emoji: "💘",
    tagline: "The grand finale of love, all yours.",
  },
];

const dayContent: Record<string, DayContent> = {
  "7": {
    name: "Rose Day",
    emoji: "🌹",
    headline: "Happy Rose Day, beautiful.",
    intro:
      "A rose for your smile, a bloom for your grace — today I celebrate the magic that is you.\nYour laugh is the sunlight, your heart is the spring; with every petal, my love learns to sing.\nTake this wish, soft and true, wrapped in blush and morning dew — Happy Rose Day, my beautiful you.",
    vibe: "Velvet petals, candle glow, and a handwritten note tucked in your bag.",
    dares: [
      "Send me your prettiest smile right now.",
      "Tell me one rose-inspired wish you want to make together.",
      "Choose the song that should play when we meet next.",
    ],
    spotlight: "One rose, endless meaning — you are my favorite bloom.",
    closing: "Every petal carries my promise: it's always you.",
  },
  "8": {
    name: "Propose Day",
    emoji: "💍",
    headline: "A tiny promise, a giant yes in my heart.",
    intro: "Today is for bold words, happy nerves, and choosing each other again.",
    vibe: "Heartbeats synced, hands entwined, and a question with stars behind it.",
    dares: [
      "Whisper one dreamy plan for our future.",
      "Pick the name for our imaginary puppy.",
      "Tell me how you'd ask me to dance.",
    ],
    spotlight: "I'm proposing a lifetime of tiny adventures with you.",
    closing: "If forever had a face, it would look exactly like you.",
  },
  "9": {
    name: "Chocolate Day",
    emoji: "🍫",
    headline: "Sweet, rich, and irresistible — just like you.",
    intro: "Today is for sugar highs, shared bites, and sticky smiles.",
    vibe: "Cocoa kisses, cozy blankets, and a playlist of guilty pleasures.",
    dares: [
      "Send me your best 'caught stealing chocolate' pose.",
      "Confess your sweetest craving.",
      "Pick a dessert we should share tonight.",
    ],
    spotlight: "You are my favorite kind of sweet — the kind I can't stop savoring.",
    closing: "Save me a bite, but keep the kiss.",
  },
  "10": {
    name: "Teddy Day",
    emoji: "🧸",
    headline: "Soft hugs, warm hearts, and all things cozy.",
    intro: "Today is for comfort, cuddles, and giggles that feel like home.",
    vibe: "Blanket forts, plush hugs, and a movie queue that never ends.",
    dares: [
      "Give me your best teddy bear hug — even from afar.",
      "Tell me your go-to comfort snack.",
      "Pick a bedtime story to read together.",
    ],
    spotlight: "You're the cuddliest part of my day.",
    closing: "If I could, I'd hug you in every timezone.",
  },
  "11": {
    name: "Promise Day",
    emoji: "🤞",
    headline: "Little promises, big forever energy.",
    intro: "Today is for pinky swears, quiet devotion, and love that shows up.",
    vibe: "Soft light, slow breathing, and a list of promises worth keeping.",
    dares: [
      "Tell me the cutest promise you want from me.",
      "Pick a love habit to keep forever.",
      "Choose a promise word that feels like us.",
    ],
    spotlight: "I promise to love you in the loud and the quiet.",
    closing: "Every promise I make has your name on it.",
  },
  "12": {
    name: "Hug Day",
    emoji: "🤗",
    headline: "Wrap me up in your arms, even from miles away.",
    intro: "Today is for long embraces, safe places, and hearts beating close.",
    vibe: "Warm sweaters, slow dances, and the kind of hug that fixes everything.",
    dares: [
      "Describe your perfect hug in five words.",
      "Give me your coziest emoji combo.",
      "Tell me the moment you want a hug the most.",
    ],
    spotlight: "Your hugs are my favorite shelter.",
    closing: "Consider this a hug you can keep all day.",
  },
  "13": {
    name: "Kiss Day",
    emoji: "💋",
    headline: "A kiss for every thought of you.",
    intro: "Today is for stolen kisses, soft laughter, and sweet chaos.",
    vibe: "Lip gloss, candle glow, and the kind of grin that means trouble.",
    dares: [
      "Send me a kiss emoji trail.",
      "Tell me your favorite kiss memory.",
      "Pick the flavor of our next kiss.",
    ],
    spotlight: "Every kiss with you feels like a little celebration.",
    closing: "Saving a dozen kisses for you — no expiry date.",
  },
  "14": {
    name: "Valentine's Day",
    emoji: "💘",
    headline: "You are my once-in-a-lifetime kind of love.",
    intro: "Today is for the grandest confession: I choose you, always.",
    vibe: "Slow dancing, candlelight, and a heart full of fireworks.",
    dares: [
      "Tell me your favorite thing about today.",
      "Pick the dessert we should share.",
      "Choose the song for our forever dance.",
    ],
    spotlight: "You are my forever favorite answer.",
    closing: "Happy Valentine's Day, my love. I'm all yours.",
  },
};

const dayCodes: Record<string, string> = {
  "7": "0707",
  "8": "0808",
  "9": "0909",
  "10": "1010",
  "11": "1111",
  "12": "1212",
  "13": "1313",
  "14": "1414",
};

export default function Home() {
  const [appUnlocked, setAppUnlocked] = useState(false);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [dayUnlocked, setDayUnlocked] = useState(false);
  const [showQuest, setShowQuest] = useState(false);
  const [celebrate, setCelebrate] = useState(false);
  const [roseCelebrate, setRoseCelebrate] = useState(false);
  const [roseConfetti, setRoseConfetti] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);
  const [runawayStyle, setRunawayStyle] = useState({ top: 58, left: 62 });
  const [runawayLabel, setRunawayLabel] = useState("Catch me if you can");
  const [dayMessage, setDayMessage] = useState<string | null>(null);

  const spotlight = useMemo(
    () => ["Slow dancing", "Candle glow", "Playlist of us", "Love notes"],
    []
  );

  const dodgeLabels = useMemo(
    () => ["Too slow 😜", "Not today, cupid", "Nope, try again", "Missed me 💨"],
    []
  );

  useEffect(() => {
    if (!selectedDay) {
      setDayUnlocked(false);
      return;
    }
    setDayUnlocked(false);
    setShowQuest(false);
  }, [selectedDay]);

  useEffect(() => {
    if (selectedDay === "7" && dayUnlocked) {
      setRoseConfetti(true);
      setTimeout(() => setRoseConfetti(false), 3600);
    }
  }, [dayUnlocked, selectedDay]);

  const moveRunaway = () => {
    const nextTop = 20 + Math.random() * 55;
    const nextLeft = 10 + Math.random() * 70;
    setRunawayStyle({ top: nextTop, left: nextLeft });
    setRunawayLabel(
      dodgeLabels[Math.floor(Math.random() * dodgeLabels.length)]
    );
  };

  const handleAccept = () => {
    setShowQuest(false);
    setCelebrate(true);
    setTimeout(() => setCelebrate(false), 9000);
  };

  const handleDayUnlock = (unlocked: boolean) => {
    setDayUnlocked(unlocked);
    if (selectedDay === "14" && unlocked) {
      setShowQuest(true);
    }
    if (selectedDay === "7" && unlocked) {
      setRoseCelebrate(true);
      setTimeout(() => setRoseCelebrate(false), 7000);
    }
  };

  const activeContent = selectedDay ? dayContent[selectedDay] : null;
  const activeCode = selectedDay ? dayCodes[selectedDay] : null;
  const isRoseDay = selectedDay === "7";

  const handleDaySelect = (day: string) => {
    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth() + 1;
    const targetDay = Number(day);

    if (currentMonth === 2 && currentDay === targetDay) {
      setSelectedDay(day);
      setDayMessage(null);
      return;
    }

    if (currentMonth === 2 && currentDay < targetDay) {
      setDayMessage(
        "Not yet, gorgeous. This surprise is saving its best for tomorrow."
      );
      return;
    }

    setDayMessage(
      "This card only opens on its special day. Come back when the calendar is ready to spoil you."
    );
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
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 text-sm font-medium uppercase tracking-[0.2em] text-rose-300">
          <span className="text-lg font-semibold tracking-[0.3em] text-rose-200">
            Love Note
          </span>
          <span className="text-xs text-rose-200/80">Feb 7 - 14</span>
        </nav>
      </header>

      <main className={`relative z-10 ${appUnlocked ? "" : "blur-sm"}`}>
        <section className="mx-auto w-full max-w-6xl px-6 py-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-col gap-6">
              <p className="text-xs uppercase tracking-[0.35em] text-rose-300">
                February 7 - 14
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-rose-100 sm:text-5xl">
                Pick a day, unlock a love story.
              </h1>
              <p className="text-lg leading-relaxed text-rose-200/80">
                Each day has its own little surprise. Choose a card, enter the
                secret code, and step into a page made just for you.
              </p>
              <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-rose-300">
                {spotlight.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-rose-900/50 px-3 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card romantic-glow flex flex-col justify-between rounded-3xl p-8 text-rose-200">
              <p className="text-sm uppercase tracking-[0.3em] text-rose-300">
                How it works
              </p>
              <ol className="mt-6 space-y-4 text-sm text-rose-200/80">
                <li>1. Enter the secret code to unlock the calendar.</li>
                <li>2. Tap a day card to open that surprise.</li>
                <li>3. Enter the day's code for the full reveal.</li>
              </ol>
              <p className="mt-6 text-sm text-rose-200/80">
                Tip: Each day has its own secret number.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {dayCards.map((card) => (
              <button
                key={card.day}
                type="button"
                onClick={() => handleDaySelect(card.day)}
                className="glass-card group rounded-3xl p-6 text-left text-rose-200 transition hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{card.emoji}</span>
                  <span className="text-xs uppercase tracking-[0.25em] text-rose-300">
                    {card.day} Feb
                  </span>
                </div>
                <h2 className="mt-6 text-xl font-semibold text-rose-100">
                  {card.title}
                </h2>
                <p className="mt-3 text-sm text-rose-200/80">
                  {card.tagline}
                </p>
                <span className="mt-6 inline-flex items-center text-xs uppercase tracking-[0.2em] text-rose-300">
                  Tap to unlock
                </span>
              </button>
            ))}
          </div>
        </section>
      </main>

      <footer className="mx-auto w-full max-w-6xl px-6 pb-12 text-center text-xs uppercase tracking-[0.3em] text-rose-300">
        Made with all my love
      </footer>

      {selectedDay && activeContent ? (
        <div className="fixed inset-0 z-[55] flex items-center justify-center bg-rose-950/70 px-6 backdrop-blur">
          <div className="glass-card romantic-glow w-full max-w-5xl rounded-[32px] p-8 text-rose-200">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-rose-300">
                  {activeContent.name}
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-rose-100">
                  {activeContent.headline}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setSelectedDay(null)}
                className="rounded-full border border-rose-400/60 px-4 py-2 text-xs font-semibold text-rose-200"
              >
                Close
              </button>
            </div>

            <p className="mt-4 whitespace-pre-line text-sm text-rose-200/80">
              {activeContent.intro}
            </p>

            <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-rose-300">
                  <span className="rounded-full bg-rose-900/50 px-3 py-1">
                    {activeContent.emoji} {activeContent.name}
                  </span>
                  <span className="rounded-full bg-rose-900/50 px-3 py-1">
                    {activeContent.spotlight}
                  </span>
                </div>

                <div className="mt-6 grid gap-4">
                  {isRoseDay ? (
                    <article className="rose-day-card relative overflow-hidden rounded-2xl p-6 text-rose-100">
                      <div className="rose-sparkles" aria-hidden="true">
                        {Array.from({ length: 10 }).map((_, index) => (
                          <span key={`sparkle-${index}`} className="rose-sparkle" />
                        ))}
                      </div>
                      <div className="rose-floaters" aria-hidden="true">
                        {Array.from({ length: 6 }).map((_, index) => (
                          <span
                            key={`float-rose-${index}`}
                            className="rose-floater"
                          >
                            🌹
                          </span>
                        ))}
                      </div>
                      <p className="text-xs uppercase tracking-[0.3em] text-rose-200">
                        Rose day wishes
                      </p>
                      <h3 className="mt-4 text-2xl font-semibold rose-shimmer">
                        Happy Rose Day, beautiful 🌹
                      </h3>
                      <p className="mt-3 text-sm text-rose-100/80">
                        You are the bloom that softens every season. Today we
                        celebrate you with petals, poetry, and a thousand quiet
                        smiles.
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-rose-200">
                        {activeContent.dares.map((dare) => (
                          <span
                            key={dare}
                            className="rounded-full bg-rose-900/50 px-3 py-1"
                          >
                            {dare}
                          </span>
                        ))}
                      </div>
                    </article>
                  ) : (
                    <article className="glass-card rounded-2xl p-5 text-rose-200">
                      <p className="text-xs uppercase tracking-[0.3em] text-rose-300">
                        Playful dares
                      </p>
                      <ul className="mt-4 space-y-3 text-sm text-rose-200/80">
                        {activeContent.dares.map((dare) => (
                          <li key={dare} className="flex items-start gap-3">
                            <span>💗</span>
                            <span>{dare}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  )}
                </div>
              </div>

              <div className="glass-card rounded-3xl p-6 text-rose-200">
                {isRoseDay ? (
                  <div className="space-y-4">
                    <div className="overflow-hidden rounded-2xl border border-rose-400/30 bg-rose-950/40">
                      <video
                        className="h-60 w-full object-cover object-bottom sm:h-72"
                        src="/VP2026/rose_day.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    </div>
                    <p className="rose-glow-text text-base font-semibold text-rose-100 sm:text-lg">
                      Two cozy hearts, one forever cuddle. 🌹
                    </p>
                  </div>
                ) : (
                  <>
                    <p className="text-xs uppercase tracking-[0.3em] text-rose-300">
                      Love note
                    </p>
                    <h3 className="mt-4 text-2xl font-semibold text-rose-100">
                      {activeContent.vibe}
                    </h3>
                    <p className="mt-4 text-sm text-rose-200/80">
                      {activeContent.closing}
                    </p>
                    {selectedDay === "14" ? (
                      <button
                        type="button"
                        onClick={() => setShowSurprise(true)}
                        className="mt-6 w-full rounded-full bg-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-rose-500"
                      >
                        Open your surprise
                      </button>
                    ) : null}
                  </>
                )}
                {selectedDay === "14" && !isRoseDay ? (
                  <button
                    type="button"
                    onClick={() => setShowSurprise(true)}
                    className="mt-6 w-full rounded-full bg-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-rose-500"
                  >
                    Open your surprise
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {dayMessage ? (
        <div className="fixed inset-0 z-[58] flex items-center justify-center bg-rose-950/70 px-6 backdrop-blur">
          <div className="glass-card romantic-glow w-full max-w-md rounded-3xl p-8 text-center text-rose-200">
            <p className="text-xs uppercase tracking-[0.35em] text-rose-300">
              Patience, love
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-rose-100">
              {dayMessage}
            </h3>
            <button
              type="button"
              onClick={() => setDayMessage(null)}
              className="mt-6 rounded-full border border-rose-400/60 px-5 py-2 text-sm font-semibold text-rose-200"
            >
              I&apos;ll wait 💗
            </button>
          </div>
        </div>
      ) : null}

      <AccessGate
        accessCode="0214"
        title="Enter our secret code"
        subtitle="This calendar is just for us."
        buttonLabel="Unlock the calendar"
        onUnlockChange={setAppUnlocked}
      />

      {appUnlocked && selectedDay && activeCode ? (
        <AccessGate
          key={selectedDay}
          accessCode={activeCode}
          title={`Enter the ${dayContent[selectedDay].name} code`}
          subtitle="Unlock today's page with our secret number."
          buttonLabel="Unlock this day"
          onUnlockChange={handleDayUnlock}
        />
      ) : null}

      {showQuest && dayUnlocked ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-rose-950/60 px-6 backdrop-blur">
          <div className="relative w-full max-w-xl overflow-hidden rounded-[32px] bg-gradient-to-br from-rose-950/70 via-rose-900/70 to-amber-900/50 p-8 text-center shadow-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-rose-300">
              A tiny quest
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-rose-100">
              Will you be my Valentine?
            </h2>
            <p className="mt-3 text-sm text-rose-200/90">
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
                className="absolute rounded-full border border-rose-400/60 bg-white/10 px-6 py-3 text-xs font-semibold text-rose-200 shadow transition"
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
              Consider this our official love quest unlocked. I'm all in for
              every giggle, every adventure, and every kiss.
            </p>
          </div>
        </div>
      ) : null}

      {showSurprise ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-rose-950/60 px-6 backdrop-blur">
          <div className="glass-card romantic-glow w-full max-w-lg rounded-3xl p-8 text-center text-rose-100">
            <p className="text-xs uppercase tracking-[0.3em] text-rose-300">
              Surprise unlocked
            </p>
            <h2 className="mt-4 text-2xl font-semibold">Dinner is on me.</h2>
            <p className="mt-3 text-sm leading-relaxed text-rose-200/80">
              Dress comfy, bring your smile, and be ready for a night of cozy
              surprises. Your kiss voucher is valid for unlimited use.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => setShowSurprise(false)}
                className="rounded-full border border-rose-400/60 px-5 py-2 text-sm font-semibold text-rose-200"
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

      {roseCelebrate ? (
        <div className="rose-celebration pointer-events-none">
          {Array.from({ length: 18 }).map((_, index) => (
            <span
              key={`petal-${index}`}
              className="rose-petal"
              style={{
                left: `${(index % 6) * 16 + 8}%`,
                animationDelay: `${index * 0.2}s`,
              }}
            />
          ))}
          <div className="rose-bloom">
            <div className="rose-core" />
          </div>
        </div>
      ) : null}

      {roseConfetti ? (
        <div className="rose-confetti pointer-events-none">
          {Array.from({ length: 24 }).map((_, index) => (
            <span
              key={`confetti-${index}`}
              className="rose-confetti-petal"
              style={{
                left: `${(index % 8) * 12 + 4}%`,
                animationDelay: `${index * 0.08}s`,
              }}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
