"use client";

import { cn } from "../lib/utils";
import { Radar, Target, Aperture } from "lucide-react";

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
}

function DisplayCard({
  className,
  icon = <Aperture className="size-4" />,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  iconClassName = "text-zinc-700",
  titleClassName = "text-zinc-900",
}: DisplayCardProps) {
  return (
    <div
      className={cn(
        "relative flex h-36 w-[18rem] md:w-[22rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl border border-zinc-200/50 bg-white/70 backdrop-blur-sm px-4 py-3 transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[20rem] after:bg-gradient-to-l after:from-zinc-50 after:to-transparent after:content-[''] hover:border-zinc-300 hover:bg-white [&>*]:flex [&>*]:items-center [&>*]:gap-2 shadow-sm",
        className
      )}
    >
      <div>
        <span className="relative inline-block rounded-full bg-zinc-100 border border-zinc-200 p-1 text-zinc-700 shadow-sm">
          {icon}
        </span>
        <p className={cn("text-lg font-medium", titleClassName)}>{title}</p>
      </div>
      <p className="whitespace-nowrap text-lg text-zinc-600">{description}</p>
      <p className="text-zinc-400">{date}</p>
    </div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const defaultCards = [
    {
      title: "Market Regime",
      description: "Real-time AI market analysis",
      date: "Live Updates",
      icon: <Radar className="size-4" />,
      className: "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-white/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      title: "Risk Assessment",
      description: "Predictive portfolio modeling",
      date: "Daily Scans",
      icon: <Target className="size-4" />,
      className: "[grid-area:stack] translate-x-8 md:translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-white/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      title: "Stock Predictor",
      description: "Actionable algorithmic signals",
      date: "Intraday",
      icon: <Aperture className="size-4" />,
      className: "[grid-area:stack] translate-x-16 md:translate-x-32 translate-y-20 hover:translate-y-10",
    },
  ];

  const displayCards = cards || defaultCards;

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700">
      {displayCards.map((cardProps, index) => (
        <DisplayCard key={index} {...cardProps} />
      ))}
    </div>
  );
}