import * as C from './styles'
import feedz from '../../assets/feedz.png'
import nhall from '../../assets/nhall.png'
import feedzday from '../../assets/feedzday.png'
import go from '../../assets/go.gif'
import expo from '../../assets/expo.gif'
import Btn from '../btn';
import { PiHandWaving } from "react-icons/pi";
import iphone from '../../assets/mockupIphone.png'
import notebook from '../../assets/notebook.webp'

function Portfolio() {

    const projects = [
        {
            img: feedz,
            name: 'Next.js Website',
            describe: 'Website developed for Feedz using Next.js, features easy componentization for A/B testing and conversion strategies. It includes CRM integrations with Axios, custom monitoring tags for personalized data analysis, HR logic calculators, and adaptive content based on user UTM parameters.',
            skills: ['React.js, Next.js'],
            link1: 'https://feedz.com.br',
            link2: 'https://drive.google.com/file/d/1XOJWncAdvyoGoGa93k7qq2l9a4_Gl5WH/view?usp=sharing',
            textLink1: 'Live',
            textLink2: 'Performance Report',
            switchCol: true
        },
        {
            img: nhall,
            name: 'Front-end e-commerce platform using React',
            describe: 'The front-end for Nhall Resortwear e-commerce was developed using React and libraries such as Axios, React Router for navigation, Redux for state management, Styled Components for dynamic styling, and React Hook Form. The project offers a modern and responsive interface, designed to deliver an engaging and intuitive shopping experience. Its robust architecture supports easy integration with various backend services.',
            skills: ['React, Wordpress, Woocommerce'],
        },
        {
            img: expo,
            name: 'React Native App with Express and MongoDB',
            describe: 'A guest check-in application developed in React Native using Expo, with a backend built on Express.js. Schemas and simple methods were created to securely send data to MongoDB. A secure tunnel was configured behind NATs and firewalls using Ngrok for testing on other devices. Libraries such as react-native-image-picker were used for native interaction with the user gallery, and the backend was responsible for saving and modifying images in the database as base64.',
            skills: ['React.js, Next.js'],
            link1: 'https://github.com/marinspira/checkinApp',
            textLink1: 'Repository',
            switchCol: true,
            gif: true,
            device: 'mobile'
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