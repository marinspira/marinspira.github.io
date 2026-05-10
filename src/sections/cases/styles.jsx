import styled from "styled-components";

export const Section = styled.section`
  height: 100vh;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  overflow: hidden;
  background: var(--blue);
  contain: layout paint;

  @media (max-width: 800px) {
    height: auto;
    min-height: 100vh;
    grid-template-columns: 1fr;
    overflow: visible;
  }
`;

export const PreviewPanel = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  background: ${({ $background }) => $background || "#0089c6"};
  cursor: ns-resize;
  transform: translateZ(0);
  overscroll-behavior: contain;

  @media (max-width: 800px) {
    min-height: 48vh;
    height: 48vh;
  }
`;

export const MediaFrame = styled.div`
  position: absolute;
  inset: clamp(28px, 6vw, 72px) clamp(28px, 6vw, 72px) 58px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  z-index: 1;
  animation: mediaFadeIn 0.42s ease both;

  video {
    width: 100%;
    max-height: calc(100% - 58px);
    display: block;
    object-fit: contain;
    background: #000;
    box-shadow: 0 24px 80px rgba(0, 0, 0, 0.28);
  }

  @keyframes mediaFadeIn {
    from {
      opacity: 0;
      transform: translateY(12px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 800px) {
    inset: 24px;
  }
`;

export const MediaCaption = styled.p`
  width: 100%;
  margin: 0;
  color: var(--white);
  font-size: 15px;
  line-height: 22px;
  font-weight: 700;
  text-align: center;
`;

export const VideoSelector = styled.div`
  position: absolute;
  left: 50%;
  bottom: 150px;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: min(100%, 620px);
  transform: translateX(-50%);

  button {
    width: fit-content;
    min-height: 22px;
    padding: 0;
    border: 0;
    background: transparent;
    color: rgba(255, 255, 255, 0.58);
    font-size: 13px;
    line-height: 18px;
    font-weight: 700;
    text-align: center;
    cursor: pointer;
    transition: color 0.25s ease, transform 0.25s ease;
  }

  button.active {
    color: var(--white);
    transform: translateY(-1px);
    font-size: 16px;
  }

  button:focus-visible {
    outline: 2px solid var(--white);
    outline-offset: 4px;
  }
`;

export const ScreenshotTrack = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: min(86%, 500px);
  transform: translateX(-50%) translateY(calc((100vh - 100%) * ${({ $progress }) => $progress}));
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform;
  z-index: 1;

  img {
    width: 100%;
    display: block;
    box-shadow: 0 24px 80px rgba(0, 0, 0, 0.28);
  }

  @media (max-width: 800px) {
    width: min(80%, 360px);
    transform: translateX(-50%) translateY(calc((48vh - 100%) * ${({ $progress }) => $progress}));
  }
`;

export const PreviewRange = styled.input`
  position: absolute;
  top: 50%;
  right: 20px;
  z-index: 3;
  width: 18px;
  height: 40vh;
  transform: translateY(-50%);
  writing-mode: vertical-lr;
  direction: ltr;
  accent-color: ${({ $previewBackground }) => $previewBackground || "#0089c6"};
  background: transparent;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;

  &::-webkit-slider-runnable-track {
    width: 18px;
    height: 100%;
    border-radius: 999px;
    background: var(--white);
  }

  &::-moz-range-track {
    width: 18px;
    height: 100%;
    border-radius: 999px;
    background: var(--white);
  }

  &::-webkit-slider-thumb {
    appearance: none;
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    margin-left: 1px;
    border: 2px solid var(--white);
    border-radius: 999px;
    background: ${({ $previewBackground }) => $previewBackground || "#0089c6"};
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.25);
  }

  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border: 2px solid var(--white);
    border-radius: 999px;
    background: ${({ $previewBackground }) => $previewBackground || "#0089c6"};
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.25);
  }

  &:focus-visible {
    outline: 2px solid #ffffff;
    outline-offset: 4px;
  }

  @media (max-width: 800px) {
    right: 14px;
    height: 32vh;
  }
`;

export const ContentPanel = styled.div`
  height: 100vh;
  overflow-y: auto;
  background: var(--white);
  border-left: 1px solid var(--grey-dark);

  @media (max-width: 800px) {
    height: auto;
    min-height: 52vh;
    overflow: visible;
    border-left: 0;
  }
`;

export const ContentInner = styled.div`
  min-height: 135vh;
  padding: 18vh clamp(32px, 6vw, 86px) 12vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  h2 {
    color: var(--black);
    font-size: clamp(34px, 4vw, 58px);
    line-height: 1;
    margin: 12px 0 24px;
  }

  p {
    max-width: 620px;
    margin: 0;
  }

  @media (max-width: 800px) {
    min-height: auto;
    padding: 56px 22px 72px;

    h2 {
      font-size: 34px;
    }
  }
`;

export const Eyebrow = styled.span`
  color: ${({ $color }) => $color || "var(--purple)"};
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0;
  text-transform: uppercase;
`;

export const MarkdownContent = styled.div`
  max-width: 650px;

  h3 {
    color: var(--black);
    font-size: 24px;
    margin: 48px 0 16px;
  }

  p {
    margin: 0 0 20px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 0 0 20px;
  }

  li {
    color: var(--text);
    list-style: disc;
    margin-left: 22px;
  }

  a:not([data-media-anchor]) {
    font-weight: 700;
  }
`;

export const MediaAnchor = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  margin: 28px 0;
  overflow: hidden;
`;

export const MetaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin: 52px 0;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const MetaItem = styled.div`
  min-height: 112px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid var(--grey-dark);
  background: var(--grey-light);

  small {
    color: var(--text);
    font-size: 13px;
    text-transform: uppercase;
  }

  strong {
    color: var(--black);
    font-size: 22px;
  }
`;

export const Block = styled.div`
  max-width: 650px;
  margin-top: 48px;

  h3 {
    color: var(--black);
    font-size: 24px;
    margin-bottom: 16px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  li {
    color: var(--text);
    list-style: disc;
    margin-left: 22px;
  }
`;
