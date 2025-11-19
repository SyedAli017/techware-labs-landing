This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Components Overview

Here's a brief overview of the main components used in this project:

### HeroSection

(`src/components/HeroSection/HeroSection.tsx`)

This is the grand entrance of our landing page! Imagine a captivating display with a bold headline, a compelling message, and a clear call to action to "Start a Project." But it's not just static text – this section comes alive with elegant animated background circles that subtly shift and glow, creating a dynamic visual experience that draws you in.

### ClientsSection

(`src/components/ClientsSection/ClientsSection.tsx`)

Ever wonder who trusts us? This section proudly showcases a continuous, smooth-scrolling carousel of our esteemed clients' logos. It's designed to give you a quick, impressive glance at the companies that rely on our expertise. And here's a neat touch: if you hover your mouse over it, the scroll gracefully pauses, letting you take a closer look!

### Footer

(`src/components/Footer/Footer.tsx`)

As you reach the bottom of our page, our `Footer` wraps things up nicely. You'll find easy access to our social media channels, keeping you connected with our latest updates. Plus, it includes a friendly copyright notice, ensuring you know who the brilliant minds behind this platform are.

### BentoGrid

(`src/components/BentoGrid/BentoGrid.tsx`)

Think of the `BentoGrid` as our curated showcase, elegantly presenting our features and services in a visually appealing grid layout. Each "card" in this grid highlights a specific offering, complete with a distinctive logo and a clear label, making it super easy to grasp what we do best. It even features a subtle fade-in animation to make each item gently appear as you explore.

### ScrollReveal

(`src/components/ScrollReveal/ScrollReveal.tsx`)

This component brings a touch of magic to our text! As you scroll down the page, watch as our key message gracefully transforms. Starting as a muted grey, each character of the text "lights up" to a vibrant white, revealing our core values and what we stand for in an engaging, step-by-step manner. It's a subtle yet powerful way to capture your attention and highlight important information.
