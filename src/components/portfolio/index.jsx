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
                "👥 <b>Team:</b> Worked collaboratively with a multidisciplinary team, development workflow followed Scrum methodology with CD/CI via Bitbucket.",
            ],
            date: 'April, 2023'
        },
        {
            img: nhall,
            name: 'E-commerce using React and Express',
            list: [
                "🧩 <b>UI:</b> Built with React 17, using React Router, Redux, Axios and Styled Components; no prototype used, based on user research.",
                "🔗 <b>Integrations:</b> Shopify Storefront API and Axios for product, order, and payment flows.",
                "🔐 <b>Backend:</b> Created a Node.js Express server to securely handle sensitive operations (storing tokens, custom logic) and proxy API calls.",
                "📱 <b>Responsiveness:</b> Ensured mobile-first design for optimized shopping experience across devices.",
            ],
            skills: ['react,expressjs,nodejs,redux'],
            date: 'October, 2022'
        },
        {
            img: dlifestyle,
            name: 'E-commerce using React and Express',
            list: [
                "🧩 <b>UI:</b> Built with React 17, using React Router and Redux; no prototype used, based on user research.",
                "🔗 <b>Integrations:</b> Shopify Storefront API and Axios for product, order, and payment flows.",
                "🔐 <b>Backend:</b> Created a Node.js Express server to securely handle sensitive operations (storing tokens, custom logic) and proxy API calls.",
                "📱 <b>Responsiveness:</b> Ensured mobile-first design for optimized shopping experience across devices.",
            ],
            skills: ['react,expressjs,nodejs,redux'],
            date: 'March, 2022'
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
            date: 'August, 2023'
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
            date: 'January, 2021'
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
            date: 'April, 2022'
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
            date: 'November, 2021'
        },
        {
            img: go,
            name: 'Dashboard with Next.js and Typescript',
            list: [
                "🧩 <b>UI:</b> Built modular and reusable components with React 17 and TypeScript, following a Figma prototype.",
                "⚙️ <b>Backend:</b> Integrated with an existing Express API using Axios for secure and efficient data handling.",
                "🧠 <b>State Management:</b> Implemented Redux for predictable and optimized state flow across the application.",
              ],
            skills: ['react,next,typescript,redux'],
            gif: true,
            date: 'May, 2023'
        },
    ]

    return (
        <C.Container id='projects'>
            <h2>// Portfolio</h2>
            {projects.map((project) => (
                <C.PostCard key={project.name} switchCol={project.switchCol}>
                    <C.ContentImage>
                        {project.device === 'mobile' &&
                            <img className='mockup-mobile'
                                src={iphone}
                                alt='Mockup'
                            />
                        }
                        {project.gif ?
                            <img className='gif' src={project.img} alt={project.name} />
                            :
                            <>
                                <img className="main-image" src={project.img} alt={project.name} />
                                <C.HoverInformation>
                                    <PiHandWaving className='mouse' />
                                    <span>Hover here!</span>
                                </C.HoverInformation>
                            </>
                        }
                    </C.ContentImage>
                    <C.Content>
                        <span className='date'>{project.date}</span>
                        <h3>{project.name}</h3>
                        {(project.skills).map((skill) => {
                            return <img src={`https://skillicons.dev/icons?i=${skill}`} alt={skill} />
                        })}
                        <C.Description>{project.describe}</C.Description>
                        <C.List>
                            {project.list && project.list.map((item, index) => (
                                <C.Item key={index}>
                                    <span dangerouslySetInnerHTML={{ __html: item }} />
                                </C.Item>
                            ))}
                        </C.List>
                        {project.link1 &&
                            <Btn
                                link1={{
                                    text: project.textLink1,
                                    link: project.link1
                                }}
                                link2={{
                                    text: project.textLink2,
                                    link: project.link2
                                }}
                            />
                        }
                    </C.Content>
                </C.PostCard>
            ))}
        </C.Container>
    );
}

export default Portfolio;
