import React from 'react';
import * as C from './styles'
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'
import { BsGraphUp } from 'react-icons/bs'
import feedz from '../../assets/feedz.png'
import nhall from '../../assets/nhall.png'
import feedzday from '../../assets/feedzday.png'
import Btn from '../btn';

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
            name: 'E-commerce Plataform',
            describe: 'Developed with React, WordPress, and WooCommerce, this e-commerce site features a responsive React frontend and a WordPress backend for easy content management. WooCommerce powers the product listings, orders, and payments. The platform ensures a smooth shopping experience and efficient backend operations.',
            skills: ['React, Wordpress, Woocommerce'],
        },
        {
            img: feedzday,
            name: 'FeedzDay 2023',
            describe: 'Created with Next.js, this site adheres closely to Figma designs to ensure a visually consistent and engaging event experience. It integrates seamlessly with a CRM API for efficient attendee management and personalized communication.',
            skills: ['React.js, Next.js'],
            switchCol: true
        },
    ]

    {/* *<div>
                <img src='https://skillicons.dev/icons?i=html,css' alt='html e css' />
                <img src='https://skillicons.dev/icons?i=javascript,typescript' alt='javascript e typescript' />
                <img src='https://skillicons.dev/icons?i=react,next,vue' alt='react, next e vue' />
                <img src='https://skillicons.dev/icons?i=figma,styledcomponents' alt='figma, styledcomponents' />
                <img src='https://skillicons.dev/icons?i=git' alt='git' />
    </div>* */}

    return (
        <C.Container id='projects'>
            <h2>// Portfolio</h2>
            {projects.map((project) => (
                <C.PostCard key={project.name} switchCol={project.switchCol}>
                    <C.ContentImage>
                        <img src={project.img} alt={project.name} />
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