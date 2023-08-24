import { defaultTheme } from "@sveltepress/theme-default";
import { sveltepress } from "@sveltepress/vite";
import { defineConfig } from "vite";
import { navbar, sidebar } from "./src/config";
import lightningcss from 'vite-plugin-lightningcss'
export default defineConfig({
  define: {
    "process.env": {},
  },
  plugins: [
    sveltepress({
      theme: defaultTheme({
        themeColor: {
          dark: "#3cddc7",
          light: "#09369E",
          primary: "#3cddc7",
          hover: "#003731",
          gradient: {
            start: "#2DD4BF",
            end: "#09369E",
          },
        },
        navbar,
        sidebar,
        github: "https://github.com/AuriOpenSource/tail-material-design",
        logo: "/favicon.ico",
        preBuildIconifyIcons: {
          mdi: ["tailwind", "computer", "paint-outline", "material-design"],
        },
      }),
      siteConfig: {
        title: "Tail Material Design",
        description: "What you wanted, now you have it",
      },
      addInspect: true,
    }),
    lightningcss({
      browserslist: '>= 1%'
    }),
  ],
});
