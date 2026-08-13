export type ArticleItem = {
  title: string;
  slug: string;
  description: string;
  content: string;
  time?: string;
};

export type ResourceSection = {
  category: string;
  items: ArticleItem[];
};

export const resourcesData: ResourceSection[] = [
  {
    category: "Getting Started",
    items: [
      { 
        title: "The Anatomy of a Trade", 
        slug: "anatomy-of-a-trade",
        description: "Understanding the basic structure of a technical setup before deploying capital.",
        content: `
Every successful trade has a clear lifecycle: planning, execution, management, and review. This guide breaks down the essential components you need to define before you click 'Buy'.

**The Setup (The 'Why')**
You need an edge. It could be a breakout from a consolidation phrase, a volatility squeeze, or abnormal options flow. Trentarev simplifies this by surfacing structural anomalies. Never enter a trade just because price is moving. The setup is your objective reason for why probability is skewed in your favor.

**The Entry (The 'Where')**
The entry point should be as close as possible to the point of invalidation (your stop loss). By doing this, you minimize risk relative to your potential reward. 

**The Stop Loss (The Invalidation)**
A hard line in the sand. If the price crossed this point, your thesis for the trade was wrong. The market isn't "shaking you out" or "being manipulated"—your setup simply failed. Accept the paper cut before it becomes a deep wound.

**The Target (The 'Exit')**
Where does it make logical sense to take profits? Identifying supply zones, key moving averages, or prior resistance levels helps keep you grounded. Take partial profits along the way to secure gains and let the remainder run risk-free.`
      },
      { 
        title: "Risk Management 101", 
        slug: "risk-management-101",
        description: "Position sizing, stop losses, and why preserving capital is more important than making it.",
        content: `
The most important rule of longevity in trading is capital preservation.

**The 1% Rule**
Never risk more than 1% to 2% of your entire portfolio on a single trade. If you have a $10,000 account, a single losing trade should not cost you more than $100 to $200. This ensures that you can endure a streak of consecutive losses without ruining your account.

**Asymmetric Risk/Reward**
Aim for setups that offer at least a 1:2 Risk/Reward ratio. If you're risking $100, your realistic target should net you $200 or more. This mathematical edge means you can lose 50% of the time and still be a highly profitable trader over a series of trades.

**Using AI to Size Positions**
Trentarev provides AI-assisted risk models that evaluate market volatility. On days characterized by high volatility, position sizes should be scaled down automatically. Trust your systematic risk parameters over your emotional conviction.`
      },
      { 
        title: "Interpreting AI Signals", 
        slug: "interpreting-ai-signals",
        description: "How to use Trentarev's predictive analysis without blindly following alerts.",
        content: `
AI is a powerful co-pilot, but it is not an infallible oracle.

**AI as a Conviction Multiplier**
Trentarev aggregates news flow, directional bias, and options chain data into a single signal. However, this signal should serve as a *conviction multiplier* for your own thesis, rather than a mindless buy alert. 

**Understanding Signal Confidence**
When the AI bias states "Bullish" with high confidence, it implies structural confluence across multiple metrics. Look for these high-confidence setups when they align with key technical levels on your charts.

**The Danger of Full Automation**
Relying entirely on alerts breeds lazy trading. The goal of our platform is to cut through the noise, summarize complex data quickly, and allow human judgment to make the final discretionary execution.`
      }
    ]
  },
  {
    category: "Market Psychology",
    items: [
      { 
        title: "Combating FOMO", 
        slug: "combating-fomo",
        description: "Quiet your mind. Tactics to stay disciplined when the timeline is overly euphoric.",
        content: `
Fear Of Missing Out (FOMO) is the quickest way to erode capital.

**The Mechanics of FOMO**
FOMO usually strikes late in a move, when the fundamental setup has already played out. Retail traders buy at the top just as smart money begins to distribute their positions.

**The Trentarev Antidote**
We designed our "Calm Interface" specifically to counteract the slot-machine aesthetics of modern brokerage apps. By relying on slow, methodical data processing and removing flashing red/green tickers where possible, we force users to engage with data logically instead of emotionally.

**If You Missed It, Move On**
The market generates new opportunities every week. Chasing extended candles throws your Risk/Reward ratio completely out of balance. Wait for the pullback, or find the next rotation.`
      },
      { 
        title: "The Institutional Lens", 
        slug: "institutional-lens",
        description: "Thinking like a market maker. How to spot liquidity grabs and traps.",
        content: `
Retail traders trade patterns. Institutional traders trade liquidity.

**Hunting Stop Losses**
Large orders require immense liquidity to fill without moving the underlying price drastically. Where does this liquidity rest? Exactly where retail traders place their stop losses—just below obvious support or just above obvious resistance.

**The Fakeout / Sweep**
When you see price break a key level only to immediately snap back in the opposite direction, you are often witnessing an institutional sweep. 

**How Trentarev Helps**
Our Whale Watch insights monitor the options chain for sweeping activity that diverges from simple price action. When you learn to spot these liquidity grabs, you stop being the victim of them and start trading alongside the market makers.`
      }
    ]
  },
  {
    category: "Advanced Strategies",
    items: [
      { 
        title: "Trading Market Regimes", 
        slug: "trading-market-regimes",
        description: "Adapting your setup to bull, bear, and chop environments automatically.",
        content: `
A strategy that prints money in a trending market will bleed you dry in a choppy regime.

**Trending (Bull/Bear)**
Focus on momentum, moving average crossovers, and trailing stops to capture large moves. Do not try to call tops or bottoms.

**Mean-Reverting (Chop)**
Buy support and sell resistance. Tighten targets. 

**High Volatility (News/Earnings)**
Reduce size drastically or stay entirely in cash. 

**Systematic Detection**
Trentarev's Market Regime analysis uses macroeconomic indicators and rolling volatility to label the current regime. By adjusting your playbook based on the identified environment, you avoid trying to force trend strategies into ranging markets.`
      },
      { 
        title: "Options Flow & Dark Pools", 
        slug: "options-flow-dark-pools",
        description: "A primer on tracking abnormal whale activity and evaluating sweep trades.",
        content: `
Following the smart money.

**What is Options Flow?**
Options flow tracks large, institutional block trades or multi-exchange sweeps happening in real-time. Unusually large, out-of-the-money options purchased with aggressive urgency often indicate that institutions possess conviction on a near-term directional move.

**Dark Pools**
Institutions use dark pools to execute massive share blocks anonymously, preventing retail panic or front-running. Spikes in dark pool prints at specific price levels often act as massive forward-looking support or resistance zones.

By synthesizing these streams into the Alpha Terminal, Trentarev allows you to see the true weight of institutional backing behind seemingly random price movements.`
      }
    ]
  }
];

const getReadTime = (content: string) => Math.max(1, Math.ceil(content.split(/\s+/).length / 200)) + ' min read';

resourcesData.forEach(section => {
  section.items.forEach(item => {
    (item as any).time = getReadTime(item.content);
  });
});

export const allArticles = resourcesData.flatMap(section => section.items);
