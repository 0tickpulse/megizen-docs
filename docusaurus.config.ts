import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
    title: "Megizen Docs",
    tagline: "Documentation for Megizen!",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    url: "https://0tickpulse.github.io",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/megizen-docs/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "facebook", // Usually your GitHub org/user name.
    projectName: "docusaurus", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            {
                docs: {
                    routeBasePath: "/",
                    sidebarPath: "./sidebars.ts",
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                blog: false,
                theme: {
                    customCss: "./src/css/custom.css",
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: "img/docusaurus-social-card.jpg",
        navbar: {
            title: "Megizen Docs",
            logo: {
                alt: "Megizen Docs Logo",
                src: "img/logo.png",
            },
            items: [
                // {
                //     type: "docSidebar",
                //     sidebarId: "tutorialSidebar",
                //     position: "left",
                //     label: "Tutorial",
                // },
                // { to: "/blog", label: "Blog", position: "left" },
                // {
                //     href: "https://github.com/facebook/docusaurus",
                //     label: "GitHub",
                //     position: "right",
                // },
            ],
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "Docs",
                    items: [
                        {
                            label: "Intro",
                            to: "/index",
                        },
                    ],
                },
                {
                    title: "Community",
                    items: [
                        // {
                        //     label: "Stack Overflow",
                        //     href: "https://stackoverflow.com/questions/tagged/docusaurus",
                        // },
                        {
                            label: "Denizen Discord",
                            href: "https://discord.gg/Q6pZGSR",
                        },
                        // {
                        //     label: "Twitter",
                        //     href: "https://twitter.com/docusaurus",
                        // },
                    ],
                },
                {
                    title: "More",
                    items: [
                        {
                            label: "GitHub",
                            href: "https://github.com/0tickpulse/megizen",
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} 0TickPulse. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.vsLight,
            darkTheme: prismThemes.vsDark,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
