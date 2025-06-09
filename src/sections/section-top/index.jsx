import React from 'react';
import me from '../../assets/me3.jpg';
import * as C from './styles'
import Btn from '../../components/btn';

function SectionTop() {
  return (
    <C.Section>
      <C.Container>
        <C.Content>
          <h1>Hi! I am Maria 👋<br />Software Developer.</h1>
          <span>
            I enjoy contributing to software projects I genuinely believe in. <br/> Please feel free to check out my projects and contact me.
          </span>
          <Btn
            link1={{
              text: "Go to CV",
              link: 'https://drive.google.com/file/d/1xzjjmu0RbDJ7RodjgrPiejD7EVm2suff/view?usp=sharing'
            }}
            link2={{
              text: "GitHub",
              link: 'https://github.com/marinspira'
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
