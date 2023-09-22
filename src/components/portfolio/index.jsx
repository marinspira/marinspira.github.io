import React from 'react';
import * as C from './styles'
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'
import feedz from '../../assets/feedz.png'

function Portfolio() {

    const projects = [
        {
            img: feedz,
            name: 'Website: Feedz',
            describe: 'A website developed for the company Feedz, with a focus on easy-to-handle componentization for A/B testing purposes in conversion strategies. The site was built using Next.js.',
            skills: ['styledcomponents, typescript'],
            url: 'https://marinspira.github.io/app-todo_list/'
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
                            <a href={project.url}>Demo <AiOutlineLink /></a>
                        </div>
                    </C.Content>
                </C.PostCard>
            ))}
        </C.Container>
    );
}

export default Portfolio;