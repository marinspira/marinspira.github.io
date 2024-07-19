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
              text: "Go to CV",
              link: 'https://drive.google.com/file/d/1FAURrCgId0ld5Knlgt0UTIqzwlLsfz22/view?usp=sharing'
            }}
            link2={{
              text: "Contact",
              link: '#contact'
            }}
          />
        </C.Content>
        <C.ImageContainer>
          <img src={me} alt='Maria Eduarda' />
        </C.ImageContainer>
      </C.Container>
    </C.Section>
  );
}

export default SectionTop;
