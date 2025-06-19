import React from 'react';
import me from '../../assets/me3.jpg';
import * as C from './styles'
import Btn from '../../components/btn';

function SectionTop() {
  return (
    <C.Section>
      <C.Container>
        <C.Content>
          <h1>— Hi! I'm Maria, a software <br/> developer based in Brazil.</h1>
          {/* I enjoy contributing to software projects I genuinely believe in. */}
          <span>Previously working at <a href='http://totvs.com.br/'><b>@Totvs</b></a>.</span>
        </C.Content>
        {/* <C.ImageContainer>
          <img src={me} alt='Maria Eduarda' />
        </C.ImageContainer> */}
      </C.Container>
    </C.Section>
  );
}

export default SectionTop;
