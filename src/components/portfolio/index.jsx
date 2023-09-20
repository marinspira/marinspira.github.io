import React from 'react';
import * as C from './styles'
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'
import mario from '../../assets/mario.png'

function Portfolio() {

    const projects = [
        {
            img: "",
            name: 'App: ToDo List',
            describe: 'Basic to-do list application created with React, TypeScript, and Styled Components.',
            skills: ['styledcomponents, typescript'],
            github: 'https://github.com/marinspira/app-todo_list',
            url: 'https://marinspira.github.io/app-todo_list/'
        },
        {
            img: "",
            name: 'Game: Super Mario',
            describe: '',
            skills: ['typescript'],
            github: 'https://github.com/marinspira/app-todo_list',
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
                        {/**<img src={`https://skillicons.dev/icons?i=${project.skills.join(',')}`} alt='' />**/}
                        <div>
                            <a href={project.github}>Code <AiFillGithub /></a>
                            <a href={project.url}>Demo <AiOutlineLink /></a>
                        </div>
                    </C.Content>
                </C.PostCard>
            ))}
        </C.Container>
    );
}

export default Portfolio;