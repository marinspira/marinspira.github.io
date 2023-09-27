import React from 'react';
import * as C from './styles'
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'
import { BsGraphUp } from 'react-icons/bs'
import feedz from '../../assets/feedz.png'
import nhall from '../../assets/nhall.png'

function Portfolio() {

    const projects = [
        {
            img: feedz,
            name: 'Website: Feedz',
            describe: 'A website developed for the company Feedz, with a focus on easy-to-handle componentization for A/B testing purposes in conversion strategies. The site was built using Next.js.',
            skills: ['styledcomponents, typescript'],
            url: 'https://feedz.com.br',
            gtmextrix: 'https://gtmetrix.com/reports/www.feedz.com.br/1vJU2lsS/'
        },
        {
            img: nhall,
            name: 'E-commerce: Nhall',
            describe: '',
            skills: ['woocommerce, wordpress'],
        }
    ]

    return (
        <C.Container id='projects'>
            <h2>Portfolio</h2>
            {/**<div>
                <img src='https://skillicons.dev/icons?i=html,css' alt='html e css' />
                <img src='https://skillicons.dev/icons?i=javascript,typescript' alt='javascript e typescript' />
                <img src='https://skillicons.dev/icons?i=react,next,vue' alt='react, next e vue' />
                <img src='https://skillicons.dev/icons?i=figma,styledcomponents' alt='figma, styledcomponents' />
                <img src='https://skillicons.dev/icons?i=git' alt='git' />
    </div>**/}
            {projects.map((project) => (
                <C.PostCard key={project.name}>
                    <C.ContentImage>
                        <img src={project.img} alt={project.name} />
                    </C.ContentImage>
                    <C.Content>
                        <h3>{project.name}</h3>
                        <span>{project.describe}</span>
                        <div>
                            {project.github && <a href={project.github}>Code <AiFillGithub /></a>}
                            {project.url && <a href={project.url}>Demo <AiOutlineLink /></a>}
                            {project.gtmextrix && <a href={project.gtmextrix} rel='noreferrer' target='_blank'>Web Vitals <BsGraphUp /></a>}
                        </div>
                    </C.Content>
                </C.PostCard>
            ))}
        </C.Container>
    );
}

export default Portfolio;