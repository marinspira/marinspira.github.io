import * as C from './styles'
import feedz from '../../assets/feedz.png'
import nhall from '../../assets/nhall.png'
import feedzday from '../../assets/feedzday.png'
import go from '../../assets/go.gif'
import expo from '../../assets/expo.gif'
import Btn from '../btn';
import { PiHandWaving } from "react-icons/pi";
import iphone from '../../assets/mockupIphone.png'

function Portfolio() {

    const projects = [
        {
            img: feedz,
            name: 'Next.js Website (SSR)',
            describe: 'Website developed for Feedz using Next.js, features easy componentization for A/B testing and conversion strategies. It includes CRM integrations with Axios, custom monitoring tags for personalized data analysis, HR logic calculators, adaptive content based on user UTM parametersoptimized. The layout was meticulously developed following a Figma prototype.',
            skills: ['react,nextjs,nodejs,bitbucket'],
            link1: 'https://feedz.com.br',
            link2: 'https://drive.google.com/file/d/1XOJWncAdvyoGoGa93k7qq2l9a4_Gl5WH/view?usp=sharing',
            textLink1: 'Live',
            textLink2: 'Performance Report',
            switchCol: true,
            date: 'April, 2023'
        },
        {
            img: nhall,
            name: 'Front-end e-commerce platform using React and Typescript',
            describe: 'The front-end for Nhall Resortwear e-commerce was developed using React and libraries such as Axios, React Router for navigation, Redux for state management, Styled Components for dynamic styling, and React Hook Form. The project offers a modern and responsive interface, designed to deliver an engaging and intuitive shopping experience. Its robust architecture supports easy integration with various backend services.',
            skills: ['react,typescript'],
            date: 'October, 2022'
        },
        {
            img: feedzday,
            name: 'Next.js Website',
            describe: 'Developed with a focus on performance for high-quality paid traffic, this event website was meticulously created following a Figma prototype by a designer. It features integrations with CRMs like RD Station using Axios.',
            skills: ['react,nextjs'],
            date: 'August, 2023'
        },
        {
            img: go,
            name: 'Dashboard with Next.js and Typescript',
            describe: 'Dashboard developed in Next.js with TypeScript to connect to an existing Express backend using Axios. It features a fully responsive design and optimized state management with Redux. The layout was meticulously developed following a Figma prototype, ensuring visual consistency and user engagement.',
            skills: ['react,next,typescript'],
            gif: true,
            switchCol: true,
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
                        <span>{project.describe}</span>
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
