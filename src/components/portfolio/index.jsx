import * as C from './styles'
import feedz from '../../assets/feedz.png'
import nhall from '../../assets/nhall.png'
import feedzday from '../../assets/feedzday.png'
import brisa from '../../assets/brisa.jpg'
import novus from '../../assets/novus.jpeg'
import mstore from '../../assets/mstore.jpeg'
import dlifestyle from '../../assets/dlifestyle.jpeg'
import disonno from '../../assets/disonno.jpeg'
import priddat from '../../assets/priddat.jpeg'
import go from '../../assets/go.gif'
import expo from '../../assets/expo.gif'
import Btn from '../btn';
import { PiHandWaving } from "react-icons/pi";
import iphone from '../../assets/mockupIphone.png'
import { useEffect, useRef, useState } from 'react'

function Portfolio() {

    const projects = [
        {
            img: feedz,
            name: 'Website Next.js (App Router)',
            skills: ['nextjs,nodejs,typescript,bitbucket,figma,gcp'],
            link1: 'https://drive.google.com/file/d/1XOJWncAdvyoGoGa93k7qq2l9a4_Gl5WH/view?usp=sharing',
            textLink1: 'Performance Report',
            list: [
                "🧩 <b>UI:</b> Modular and reusable components structured from Figma, enabling scalable A/B testing workflows with Next.js, TypeScript, ContextAPI.",
                "🔗 <b>Integrations:</b> RESTful APIs using Axios for CRMs and GA4.",
                "🔐 <b>Backend:</b> Using serverless API routes from Next.js, ensuring secure server-side execution for Google Cloud Plataform APIs.",
                "🎯<b>SEO:</b> Used UTM parameters to dynamically render content, enhancing SEO and user targeting.",
            ],
            date: 'April, 2023',
            category: 'fullstack',
        },
        {
            img: nhall,
            name: 'E-commerce using React and Express',
            list: [
                "🧩 <b>UI:</b> Built with React 17, using React Router, Redux, Axios and Styled Components; no prototype used, based on user research.",
                "🔗 <b>Integrations:</b> Shopify Storefront API and Axios for product, order, and payment flows.",
                "🔐 <b>Backend:</b> Created a Node.js Express server to securely handle sensitive operations (storing tokens, custom logic) and proxy API calls.",
            ],
            skills: ['react,expressjs,nodejs,redux'],
            date: 'October, 2022',
            category: 'fullstack',
        },
        {
            img: dlifestyle,
            name: 'E-commerce using React and Express',
            list: [
                "🧩 <b>UI:</b> Built with React 17, using React Router and Redux; no prototype used, based on user research.",
                "🔗 <b>Integrations:</b> Shopify Storefront API and Axios for product, order, and payment flows.",
                "🔐 <b>Backend:</b> Created a Node.js Express server to securely handle sensitive operations (storing tokens, custom logic) and proxy API calls.",
            ],
            skills: ['react,expressjs,nodejs,redux'],
            date: 'March, 2022',
            category: 'fullstack',
        },
        {
            img: feedzday,
            name: 'Website Next.js (App Router)',
            list: [
                "🧩 <b>UI:</b> Built modular and reusable components structured from Figma prototypes with Next.",
                "🔗 <b>Integrations:</b> Connected to GA4 and CRM RD Station via Axios for lead tracking and form submission.",
                "🎯 <b>SEO:</b> Optimized for high-traffic paid media campaigns and used Next.js static optimization features.",
            ],
            skills: ['react,nextjs,figma'],
            date: 'August, 2023',
            category: 'fullstack',
        },
        {
            img: brisa,
            name: 'Lading Page Next.js (Page Router)',
            list: [
                "🧩 <b>UI:</b> Built modular and reusable components structured from Adobe XD prototypes with Next.js.",
                "🔗 <b>Integrations:</b> Connected to GA4 and CRM RD Station via Axios for lead tracking and form submission.",
                "🎯 <b>SEO:</b> Used Next.js static optimization features.",
            ],
            skills: ['react,nextjs'],
            date: 'January, 2021',
            category: 'front',
        },
        {
            img: novus,
            name: 'Website Next.js (Page Router)',
            list: [
                "🧩 <b>UI:</b> Built modular and reusable components with Next.js; no prototype used, based on user research.",
                "🔗 <b>Integrations:</b> Connected to GA4 and CRM RD Station via Axios for lead tracking and form submission.",
                "🎯 <b>SEO:</b> Optimized for high-traffic paid media campaigns and used Next.js static optimization features.",
            ],
            skills: ['react,nextjs'],
            date: 'April, 2022',
            category: 'front',
        },
        {
            img: priddat,
            name: 'E-commerce using React for WordPress',
            list: [
                "🧩 <b>UI:</b> Built modular and reusable components structured from Adobe XD prototypes with Next.js.",
                "🔗 <b>Integrations:</b> Consumed WordPress WooCommerce REST API via Axios for dynamic product listing, cart management, and order submission.",
                "🛠️ <b>Backend:</b> Used custom Express.js middleware to securely proxy WooCommerce API keys and handle server-side operations.",
            ],
            skills: ['react,nextjs,wordpress'],
            date: 'November, 2021',
            category: 'front',
        },
        {
            img: go,
            name: 'Dashboard with React and Typescript',
            list: [
                "🧩 <b>UI:</b> Built modular and reusable components with React 17 and TypeScript, following a Figma prototype.",
                "⚙️ <b>Backend:</b> Integrated with an existing Express API using Axios for secure and efficient data handling.",
                "🧠 <b>State Management:</b> Implemented Redux for predictable and optimized state flow across the application.",
            ],
            skills: ['react,next,typescript,redux'],
            gif: true,
            date: 'May, 2023',
            category: 'front',
        },
    ]

    const categories = ['fullstack', 'back', 'devops', 'front']

    const [selectedCategory, setSelectedCategory] = useState('fullstack')
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false)

    const intervalRef = useRef(null)

    const filteredProjects = projects.filter(p => p.category === selectedCategory)

    useEffect(() => {
        if (!isPaused) {
            intervalRef.current = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredProjects.length)
            }, 8000)
        }
    
        return () => clearInterval(intervalRef.current)
    }, [filteredProjects.length, isPaused])
    

    useEffect(() => {
        setCurrentIndex(0)
    }, [selectedCategory])

    return (
        <C.Container id='projects'>

            <C.Wrapper>
                <h2>Projects I have done</h2>
                <C.Tabs>
                    {categories.map((cat) => (
                        <C.Tab
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={cat === selectedCategory ? 'active' : ''}
                        >
                            {cat.toUpperCase()}
                        </C.Tab>
                    ))}
                </C.Tabs>

                <C.PaginationDots>
                    {filteredProjects.map((_, idx) => (
                        <C.Dot
                            key={idx}
                            className={idx === currentIndex ? 'dot active' : 'dot'}
                            onClick={() => setCurrentIndex(idx)}
                        />
                    ))}
                </C.PaginationDots>

                {filteredProjects.length > 0 && (
                    <C.PostCard key={filteredProjects[currentIndex].name} className="fade">
                        <C.ContentImage
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                        >¯
                            {filteredProjects[currentIndex].gif ? (
                                <img
                                    className="gif"
                                    src={filteredProjects[currentIndex].img}
                                    alt={filteredProjects[currentIndex].name}
                                />
                            ) : (
                                <>
                                    <img
                                        className="main-image"
                                        src={filteredProjects[currentIndex].img}
                                        alt={filteredProjects[currentIndex].name}
                                    />
                                    <C.HoverInformation>
                                        <PiHandWaving className="mouse" />
                                        <span>Hover here!</span>
                                    </C.HoverInformation>
                                </>
                            )}
                        </C.ContentImage>
                        <C.Content>
                            <span className="date">{filteredProjects[currentIndex].date}</span>
                            <h3>{filteredProjects[currentIndex].name}</h3>
                            {filteredProjects[currentIndex].skills.map((skill) => (
                                <img
                                    key={skill}
                                    src={`https://skillicons.dev/icons?i=${skill}`}
                                    alt={skill}
                                />
                            ))}
                            <C.Description>{filteredProjects[currentIndex].describe}</C.Description>
                            <C.List>
                                {filteredProjects[currentIndex].list?.map((item, index) => (
                                    <C.Item key={index}>
                                        <span dangerouslySetInnerHTML={{ __html: item }} />
                                    </C.Item>
                                ))}
                            </C.List>
                            {filteredProjects[currentIndex].link1 && (
                                <Btn
                                    link1={{
                                        text: filteredProjects[currentIndex].textLink1,
                                        link: filteredProjects[currentIndex].link1,
                                    }}
                                    link2={{
                                        text: filteredProjects[currentIndex].textLink2,
                                        link: filteredProjects[currentIndex].link2,
                                    }}
                                />
                            )}
                        </C.Content>
                    </C.PostCard>
                )}
            </C.Wrapper>

        </C.Container>
    )
}

export default Portfolio;
