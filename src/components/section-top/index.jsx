import React from 'react';
import me from '../../assets/me2.jpg';
import * as C from './styles'
import { AiOutlineGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'

function SectionTop() {
  return (
    <C.Section>
      <C.Container>
        <C.Content>
          <h1>Maria, front-end Developer ✨</h1>
          <span>
            Hello! I'm Maria Eduarda, a Software Engineering student, a digital nomad, and passionate about frontend development. 
          </span>
          <div>
            <a href='https://github.com/marinspira'><AiOutlineGithub /></a>
            <a href='https://www.linkedin.com/in/iamaria/'><AiFillLinkedin /></a>
            <a href='https://www.instagram.com/karlmarxe/'><AiFillInstagram /></a>
          </div>
        </C.Content>
        <C.ImageContainer>
          <img src={me} alt='Maria Eduarda' />
        </C.ImageContainer>
      </C.Container>
    </C.Section>
  );
}

export default SectionTop;
