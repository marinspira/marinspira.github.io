import * as C from './styles'
import feedz from '../../assets/feedz.png'
import nhall from '../../assets/nhall.png'
import feedzday from '../../assets/feedzday.png'
import go from '../../assets/go.gif'
import expo from '../../assets/expo.gif'
import Btn from '../btn';
import { PiHandWaving } from "react-icons/pi";

function Portfolio() {

    const projects = [
        {
            img: feedz,
            name: 'Next.js Website',
            describe: 'The website developed for Feedz, using Next.js, features easy componentization for A/B testing and conversion strategies. It includes CRM integrations, custom monitoring tags for personalized data analysis, HR logic calculators, and adaptive copy based on user UTM parameters.',
            skills: ['React.js, Next.js'],
            link1: 'https://feedz.com.br',
            link2: 'https://gtmetrix.com/reports/www.feedz.com.br/1vJU2lsS/',
            textLink1: 'Live',
            textLink2: 'More about',
            switchCol: true
        },
        {
            img: nhall,
            name: 'E-commerce with React.js',
            describe: 'E-commerce frontend, developed using React, and libs such as Styled Components, and Axios, offering a modern and responsive user interface. The project is designed to deliver an engaging and intuitive shopping experience, with a robust architecture that supports easy integration with various backend services.',
            skills: ['React, Wordpress, Woocommerce'],
        },
        {
            img: expo,
            name: 'React Native App',
            describe: 'Created with Next.js, this site adheres closely to Figma designs to ensure a visually consistent and engaging event experience. It integrates seamlessly with a CRM API for efficient attendee management and personalized communication.',
            skills: ['React.js, Next.js'],
            link1: 'https://github.com/marinspira/checkinApp',
            textLink1: 'Repository',
            switchCol: true,
            gif: true,
            mobile: true
        },
        {
            img: feedzday,
            name: 'Next.js Website',
            describe: 'Created with Next.js, this site adheres closely to Figma designs to ensure a visually consistent and engaging event experience. It integrates seamlessly with a CRM API for efficient attendee management and personalized communication.',
            skills: ['React.js, Next.js'],
        },
        {
            img: go,
            name: 'Dashboard with Next.js',
            describe: 'Created with Next.js, this site adheres closely to Figma designs to ensure a visually consistent and engaging event experience. It integrates seamlessly with a CRM API for efficient attendee management and personalized communication.',
            skills: ['React.js, Next.js'],
            gif: true,
            switchCol: true
        },
    ]

    return (
        <C.Container id='projects'>
            <h2>// Portfolio</h2>
            {projects.map((project) => (
                <C.PostCard key={project.name} switchCol={project.switchCol}>
                    <C.ContentImage>
                        
                        {project.gif ?
                            <img className='gif' src={project.img} alt={project.name} />
                            :
                            <>
                                <img className="main-image" src={project.img} alt={project.name} />
                                <C.HoverInformation>
                                    <PiHandWaving className='mouse' />
                                    <span>Hover the image</span>
                                </C.HoverInformation>
                            </>
                        }
                    </C.ContentImage>
                    <C.Content>
                        <h3>{project.name}</h3>
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