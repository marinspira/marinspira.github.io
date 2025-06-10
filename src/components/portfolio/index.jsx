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
            category: 'frontend',
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
            category: 'frontend',
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
            category: 'frontend',
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
            category: 'frontend',
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
            category: 'frontend',
        },
        {
            img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg9bdkUzEXmbaOi-3wtMMLjGcjcq3_5fgtHlc10r_WOgWSaFCsvY4BhSwXWbA7L9oyxKZ7WZs9qs-yOi7dJK2RcIfABnEeK_fs5NnYTpXCnD8NvvdRjM9cv_PPYlAGN1dp8W6Wz6OVqa4rEbpGrBzmEKEbtNQP6PQket-TSnMpqwjVKW5Wdkubl6EN-nJY/w640-h360/image.png",
            name: "Microservices Deployment via Azure",
            category: 'devops',
            list: [
                "☁️ <b>Azure CLI:</b> Management of resources, subscriptions, and environments.",
                "🐳 <b>Docker:</b> Containerized each microservice with a multi-stage Dockerfile using Java 21, improving image size and build performance.",
                "🚀 <b>Deployment:</b> Used <b>Azure Container Apps (ACA)</b> to deploy microservices.",
                "🔐 <b>CI/CD:</b> Built a GitHub pipeline to automate build, Docker image publishing to Docker Hub, and ACA deployment using service principals and secrets.",
                "📦 <b>Multi-service Pipeline:</b> Implemented matrix-based workflow to deploy multiple services with shared configurations and dynamic ports.",
            ],
            link1: 'https://github.com/marinspira/microservices-java/blob/main/.github/workflows/ci.yml',
            textLink1: 'Go to .yml file',
            textLink2: 'Post written from the experience',
            link2: "https://marinspira.github.io/#/blog/deploying-java-spring-boot-on-azure-container-apps-aca-with-ci-cd",
            date: 'May, 2025',
            gif: true,
        },
        {
            img: "https://storage.googleapis.com/support-kms-prod/dCVdVst3A3cmbTkiGoxcUJZq0orhKw4LPDeH",
            name: "React Native CI/CD with Expo & Google Play",
            category: "devops",
            list: [
                "🛠 <b>EAS Config:</b> Defined eas.json with structured build and submit profiles for development, preview, and production environments.",
                "⚙️ <b>CI/CD Pipeline:</b> Automated builds with EAS Build and deploys to Google Play using GitHub Actions and EAS CLI for seamless mobile delivery.",
                "🔐 <b>Secrets & Environments:</b> Managed all credentials (Expo token, service account JSON, env files) using GitHub Secrets and environment-based configs.",
                "☁️ <b>GCP Integration:</b> Configured a Google Cloud service account with Play Console access to authenticate and submit apps via CI workflow.",
                "📱 <b>Google Play:</b> Submitted Android App Bundles (.aab) directly to the internal testing track with versioning and draft release status."
            ],
            date: 'May, 2025',
            link1: 'https://marinspira.github.io/#/blog/deploying-android-apps-with-ci-cd-github-eas-play-console',
            textLink1: 'Post written from the experience',
            gif: true,
        },
        // {
        //     img: "https://cdn-icons-png.flaticon.com/512/235/235861.png",
        //     name: "React Native Expo Application",
        //     category: "mobile",
        //     list: [
        //         "📲 <b>Mobile-first Stack:</b> Fully developed from scratch using React Native and Expo SDK 52 for the frontend and Express.js with MongoDB for the backend.",
        //         "💻 <b>Simulated Environments:</b> Testing experience using Android Studio Emulator and Xcode iOS Simulator for cross-platform validation/debugging.",
        //         "🌐 <b>Local-to-Cloud Integration:</b> Tunneled local backend servers using Ngrok to expose APIs for mobile testing on physical devices.",
        //         "💬 <b>Real-time Features:</b> Implemented real-time features using WebSocket.",
        //         "🚀 <b>CI/CD:</b> Automated builds with EAS, GitHub Actions and Google Play."
        //     ],
        //     date: "June, 2024",
        //     gif: true
        // }
    ]

    const categories = ['fullstack', 'devops', 'frontend']

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
                <h2>Main Projects</h2>
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

                {filteredProjects.length > 0 && filteredProjects[currentIndex] && (
                    <C.PostCard key={filteredProjects[currentIndex].name} className="fade">
                        <C.ContentImage
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                        >¯
                            {filteredProjects[currentIndex].gif === true ? (
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
                            {/* {filteredProjects[currentIndex].skills.map((skill) => (
                                <img
                                    key={skill}
                                    src={`https://skillicons.dev/icons?i=${skill}`}
                                    alt={skill}
                                />
                            ))} */}
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
