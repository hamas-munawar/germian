import localfont from "next/font/local";

export const pp_supply_mono = localfont({
  variable: "--customfont-pp-supply-mono",
  src: [
    {
      path: "./fonts/PP-Supply-Mono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/PP-Supply-Mono-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
});

export const ballinger = localfont({
  variable: "--customfont-ballinger",
  src: "./fonts/Ballinger-Bold.woff2",
});
