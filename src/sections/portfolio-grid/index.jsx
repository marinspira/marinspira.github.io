import * as C from './styles'
import feedz from '../../assets/feedz-cut.png'
import nhall from '../../assets/nhall-cut.png'
import feedzday from '../../assets/feedzday-cut.png'
import brisa from '../../assets/brisa-cut.jpg'
import novus from '../../assets/novus.jpeg'
import mstore from '../../assets/mstore.jpeg'
import dlifestyle from '../../assets/dlifestyle.jpeg'
import hostelapp from '../../assets/hostelApp.png'
import mockup from '../../assets/mockup.webp'
import disonno from '../../assets/disonno.jpeg'
import { FaGithub } from "react-icons/fa";
import priddat from '../../assets/priddat-cut.jpeg'
import go from '../../assets/go.gif'

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
            link: {
                url: 'https://medium.com/@mariaferreira.developer/case-hostelapp-how-i-built-a-fullstack-mobile-application-d2dbeee99234',
                title: "Read case  →"
            },
            date: "June, 2024",
            gif: true,
            device: "mobile",
            bgColor: "var(--purple)",
            textColor: "#fff",
            invert: true,
            github: "https://github.com/marinspira/hostelapp-express"
        },
        {
            img: feedz,
            name: 'Website @Feedz',
            skills: ['nextjs,nodejs,typescript,bitbucket,figma,gcp'],
            link: {
                url: 'https://medium.com/@mariaferreira.developer/feedz-case-the-code-solution-that-changed-a-entire-marketing-strategy-fd3d6f523005',
                title: "Read case  →"
            },
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
            textColor: "#fff",
            imgUrl: "https://raw.githubusercontent.com/marinspira/marinspira.github.io/refs/heads/main/src/assets/feedz.png"
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
            imgUrl: "https://raw.githubusercontent.com/marinspira/marinspira.github.io/refs/heads/main/src/assets/nhall.png"
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
            imgUrl: "https://raw.githubusercontent.com/marinspira/marinspira.github.io/refs/heads/main/src/assets/feedzday.png"
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
            imgUrl: "https://raw.githubusercontent.com/marinspira/marinspira.github.io/refs/heads/main/src/assets/brisa.jpg"
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
            device: "desk",
            imgUrl: "https://raw.githubusercontent.com/marinspira/marinspira.github.io/refs/heads/main/src/assets/priddat.jpeg"
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
                                <C.Btns>
                                    {project.link &&
                                        <C.Button $textColor={project.textColor} $bgColor={project.bgColor} href={project.link.url}>
                                            <span>{project.link.title}</span>
                                        </C.Button>
                                    }
                                    {project.github &&
                                        <a target='_blank' href={project.github} alt="Github">
                                            <FaGithub size={30} color='white'/>
                                        </a>
                                    }
                                </C.Btns>
                            </C.Wrapper>
                            {project.device === "desk" ? (
                                <C.MockupWrapper>
                                    <C.MockupDesk src={mockup} alt={project.name} />
                                    <a href={project.imgUrl} target="_blank">
                                        <C.MockupScreenshot src={project.img} alt={project.name} />
                                    </a>
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
