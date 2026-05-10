import styled from "styled-components";

export const HomeScroll = styled.main`
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;

  > section,
  > footer {
    scroll-snap-align: start;
    scroll-snap-stop: normal;
  }

  @media (prefers-reduced-motion: reduce) {
    scroll-behavior: auto;
  }
`;
