import React from 'react';
import me from '../../assets/me2.jpg';
import * as C from './styles'
import { AiOutlineGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'
import Btn from '../btn';

function SectionTop() {
  return (
    <C.Section>
      <C.Container>
        <C.Content>
          <h1>Hi! I am Maria, 👋<br />FullStack Developer.</h1>
          <span>
            I develop software for web and mobile using with React.js, React Native, Next.js, Node.js, Express.js, and MongoDB.
          </span>
          <Btn
            link1={{
              text: "Download CV"
            }}
            link2={{
              text: "Contact"
            }}
          />
        </C.Content>
        <C.ImageContainer>
          <img src={me} alt='Maria Eduarda' />
        </C.ImageContainer>
        {/* *<div>
                <img src='https://skillicons.dev/icons?i=html,css' alt='html e css' />
                <img src='https://skillicons.dev/icons?i=javascript,typescript' alt='javascript e typescript' />
                <img src='https://skillicons.dev/icons?i=react,next,vue' alt='react, next e vue' />
                <img src='https://skillicons.dev/icons?i=figma,styledcomponents' alt='figma, styledcomponents' />
                <img src='https://skillicons.dev/icons?i=git' alt='git' />
    </div>* */}
      </C.Container>
    </C.Section>
  );
}

export default SectionTop;
