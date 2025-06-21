import * as C from './styles'
import feedz from '../../assets/feedz.png'
import nhall from '../../assets/nhall.png'
import feedzday from '../../assets/feedzday.png'
import brisa from '../../assets/brisa.jpg'
import novus from '../../assets/novus.jpeg'
import mstore from '../../assets/mstore.jpeg'
import dlifestyle from '../../assets/dlifestyle.jpeg'
import hostelapp from '../../assets/hostelApp.png'
import mockup from '../../assets/mockup.webp'
import disonno from '../../assets/disonno.jpeg'
import priddat from '../../assets/priddat.jpeg'
import go from '../../assets/go.gif'
import expo from '../../assets/expo.gif'
import Btn from '../../components/btn';
import { PiHandWaving } from "react-icons/pi";
import iphone from '../../assets/mockupIphone.png'
import { useEffect, useRef, useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";

function Portfolio() {

    const projects = [
        {
            img: hostelapp,
            name: "FullStack Mobile Application",
            category: "mobile",
            list: [
                "🧩 <b>UI:</b> React Native, Expo SDK 52, TypeScript, Jest.",
                "🔗 <b>APIs:</b> REST, Google OAuth, Apple ID.",
                "🔐 <b>Backend:</b> Express.js, MongoDB, WebSocket, Ngrok.",
                "🚀 <b>CI/CD:</b> EAS, GitHub Actions, Google Play Console, Docker.",
            ],
            date: "June, 2024",
            gif: true,
            device: "mobile",
            bgColor: "var(--purple)",
            textColor: "#fff",
            invert: true,
        },
        {
            img: feedz,
            name: 'Website @Feedz',
            skills: ['nextjs,nodejs,typescript,bitbucket,figma,gcp'],
            link: 'https://marinspira.github.io/#/blog/feedz-case-the-code-solution-that-changed-the-entire-marketing-strategy',
            list: [
                "🧩 <b>UI:</b> Figma, Next.js, TypeScript.",
                "🔗 <b>APIs:</b> REST, Google Cloud Plataform.",
                "🔐 <b>Backend:</b> Serverless API routes from Next.js.",
                "🚀 <b>CI/CD:</b> AWS, Docker, Bitbuckets."
            ],
            date: 'April, 2023',
            category: 'fullstack',
            bgColor: "var(--gray)",
            device: "desk",
            textColor: "",
            textColor: "#fff",
        },
        {
            img: nhall,
            name: 'E-commerce @Nhall',
            list: [
                "🧩 <b>UI:</b> React 17, React Router, Redux, Axios, Styled Components.",
                "🔗 <b>APIs:</b> REST, Shopify Storefront API.",
                "🔐 <b>Backend:</b> Node.js Express.js",
            ],
            skills: ['react,expressjs,nodejs,redux'],
            date: 'October, 2022',
            category: 'fullstack',
            bgColor: "var(--dark)",
            device: "desk",
            textColor: "var(--white)",
        },
        {
            img: feedzday,
            name: 'Website @Feedz',
            list: [
                "🧩 <b>UI:</b> Figma, Next.js.",
                "🔗 <b>APIs:</b> REST, RD Station.",
            ],
            skills: ['react,nextjs,figma'],
            date: 'August, 2023',
            category: 'frontend',
            bgColor: "var(--blue)",
            device: "desk",
            invert: true,
        },
        {
            img: brisa,
            name: 'Lading page @Brisa Drinks',
            list: [
                "🧩 <b>UI:</b> Adobe XD, Next.js.",
                "🔗 <b>APIs:</b> REST, RD Station.",
            ],
            skills: ['react,nextjs'],
            date: 'January, 2021',
            category: 'frontend',
            bgColor: "var(--gray)",
            device: "desk",
            textColor: "#fff",
            invert: true,
        },
        {
            img: priddat,
            name: 'E-commerce @GWS',
            list: [
                "🧩 <b>UI:</b> Adobe XD, Next.js.",
                "🔗 <b>APIs:</b> REST, WooCommerce",
                "🛠️ <b>Backend:</b> Express.js, WooCommerce.",
            ],
            skills: ['react,nextjs,wordpress'],
            date: 'November, 2021',
            category: 'frontend',
            bgColor: "var(--purple)",
            device: "desk"
        }
    ]

    return (
        <C.Section>
            <div className='container'>
                <C.Container id='projects'>
                    {projects.map((project, index) => (
                        <C.PostCard key={index} $bgColor={project.bgColor} $invert={project.invert} >
                            <C.Wrapper $textColor={project.textColor}>
                                <p>{project.name}</p>
                                <C.List>
                                    {project.list?.map((item, index) => (
                                        <li key={index}><span dangerouslySetInnerHTML={{ __html: item }} /></li>
                                    ))}
                                </C.List>
                                {project.link &&
                                    <C.Button $textColor={project.textColor} $bgColor={project.bgColor} href={project.link}>
                                        <span>Read case  →</span>
                                    </C.Button>
                                }
                            </C.Wrapper>
                            {project.device === "desk" ? (
                                <C.MockupWrapper>
                                    <C.MockupDesk src={mockup} alt={project.name} />
                                    <C.MockupScreenshot src={project.img} alt={project.name} />
                                </C.MockupWrapper>
                                // <C.MockupScreenshot2 src={project.img} alt={project.name} />
                            ) : project.device === "mobile" ? (
                                <C.ImageMobile src={project.img} alt={project.name} />
                            ) : (
                                <C.ImageMobile src={project.img} alt={project.name} />
                            )}

                        </C.PostCard>
                    ))}
                </C.Container>
            </div>
        </C.Section>
    )
}

export default Portfolio;
