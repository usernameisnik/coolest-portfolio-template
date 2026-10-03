import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { portfolio } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${portfolio.name} — ${portfolio.role}` },
      { name: "description", content: portfolio.tagline },
      { property: "og:title", content: `${portfolio.name} — Portfolio` },
      { property: "og:description", content: portfolio.tagline },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="fixed inset-0 bg-foreground">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${portfolio.showreel}?autoplay=1&controls=0&loop=1&playlist=${portfolio.showreel}`}
          title="Showreel"
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-background px-6 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
        {portfolio.role} · {portfolio.location}
      </p>
      <h1 className="text-6xl font-bold tracking-tight text-foreground md:text-8xl">
        {portfolio.name}
      </h1>
      <p className="max-w-md text-lg text-muted-foreground">{portfolio.tagline}</p>
      <button
        onClick={() => setPlaying(true)}
        className="rounded-full bg-primary px-8 py-3 font-medium text-primary-foreground transition hover:opacity-90"
      >
        Enter portfolio →
      </button>
    </main>
  );
}
