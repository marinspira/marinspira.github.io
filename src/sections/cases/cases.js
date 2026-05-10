import feedzdayScreenshot from "../../assets/feedzday.png";
import feedzdayMarkdown from "./content/feedzday.md";
import feedzScreenshot from "../../assets/feedz.png";
import feedzMarkdown from "./content/website-feedz.md";
import nhallScreenshot from "../../assets/nhall.png";
import nhallMarkdown from "./content/ecommerce-nhall.md";
import brisaScreenshot from "../../assets/brisa.jpg";
import brisaMarkdown from "./content/landing-brisa-drinks.md";
import gwsScreenshot from "../../assets/priddat.jpeg";
import gwsMarkdown from "./content/ecommerce-gws.md";
import connectorsMarkdown from "./content/abstra-connectors.md";

export const caseStudies = [
    {
        title: "Connectors @Abstra",
        eyebrow: "Product Engineering",
        content: connectorsMarkdown,
        theme: {
            previewBackground: "#eb576a",
        },
        meta: [
            { label: "Role", value: "Fullstack" },
            { label: "Stack", value: "React" },
            { label: "Focus", value: "Integrations" },
            { label: "Year", value: "2025" },
        ],
        media: [
            {
                type: "video",
                anchor: "overview",
                src: "/videos/test.mov",
                caption: "Connectors overview",
                autoPlay: true,
                muted: true,
                loop: true,
            },
            {
                type: "video",
                anchor: "credential-request",
                src: "/videos/credentials-request.mov",
                caption: "Credential request flow",
                autoPlay: true,
                muted: true,
                loop: true,
            },
        ],
    },
    {
        title: "Website @Feedz",
        eyebrow: "Fullstack",
        content: feedzMarkdown,
        theme: {
            previewBackground: "#162e4c",
        },
        meta: [
            { label: "Role", value: "Fullstack" },
            { label: "Stack", value: "Next.js" },
            { label: "Focus", value: "Marketing" },
            { label: "Year", value: "2023" },
        ],
        media: [
            {
                type: "image",
                anchor: "overview",
                src: feedzScreenshot,
                alt: "Website Feedz screenshot",
                syncWithScroll: true,
            },
        ],
    },
    {
        title: "Website FeedzDay",
        eyebrow: "Frontend",
        content: feedzdayMarkdown,
        theme: {
            previewBackground: "#064a68",
        },
        meta: [
            { label: "Role", value: "Frontend" },
            { label: "Stack", value: "Next.js" },
            { label: "Focus", value: "Campaign" },
            { label: "Year", value: "2023" },
        ],
        media: [
            {
                type: "image",
                anchor: "overview",
                src: feedzdayScreenshot,
                alt: "FeedzDay landing page screenshot",
                syncWithScroll: true,
            },
        ],
    },
    {
        title: "Landing page @Brisa Drinks",
        eyebrow: "Frontend",
        content: brisaMarkdown,
        theme: {
            previewBackground: "#feb601",
        },
        meta: [
            { label: "Role", value: "Frontend" },
            { label: "Stack", value: "Next.js" },
            { label: "Focus", value: "Landing Page" },
            { label: "Year", value: "2021" },
        ],
        media: [
            {
                type: "image",
                anchor: "overview",
                src: brisaScreenshot,
                alt: "Brisa Drinks landing page screenshot",
                syncWithScroll: true,
            },
        ],
    },
    {
        title: "E-commerce @GWS",
        eyebrow: "Frontend",
        content: gwsMarkdown,
        theme: {
            previewBackground: "#000000ff",
        },
        meta: [
            { label: "Role", value: "Frontend" },
            { label: "Stack", value: "Next.js" },
            { label: "Focus", value: "E-commerce" },
            { label: "Year", value: "2021" },
        ],
        media: [
            {
                type: "image",
                anchor: "overview",
                src: gwsScreenshot,
                alt: "GWS e-commerce screenshot",
                syncWithScroll: true,
            },
        ],
    },
];
