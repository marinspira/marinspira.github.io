import { useContext } from "react";
import { HashLink } from "react-router-hash-link";
import { FaUser, FaEnvelope, FaFileLines, FaHouse } from "react-icons/fa6";
import { HeaderVisibilityContext } from "../../contexts/headerVisibilityContext";
import * as C from "./styles";

function Dock() {
  const { showDock } = useContext(HeaderVisibilityContext);

  return (
    <C.Dock aria-label="Main navigation" $visible={showDock}>
       <C.DockImage
        as="a"
        href="/#projects"
        target="_blank"
        rel="noreferrer"
        title="Finder"
        aria-label="Finder"
      >
        <img src="https://static.wikia.nocookie.net/ipod/images/f/fe/Finder-macOS-Default-1024x1024%402x.png/revision/latest/scale-to-width-down/2048?cb=20250920070735" alt="Finder" />
      </C.DockImage>
      <C.DockImage
        as="a"
        href="/"
        title="Home"
        aria-label="Home"
      >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD4n1HOwOFXYf60_uq2Bqy0uOwW1orqOG9bg&s" alt="Home" />
      </C.DockImage>
      <C.DockImage
        as="a"
        href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Xllwhmwy25NjTYrkCFcu5gfBXkXD-xvDqQ&s"
        target="_blank"
        rel="noreferrer"
        title="Totvs"
        aria-label="Totvs"
      >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Xllwhmwy25NjTYrkCFcu5gfBXkXD-xvDqQ&s" alt="Totvs" />
      </C.DockImage>
      <C.DockItem as={HashLink} to="/" title="Home">
        <FaHouse />
      </C.DockItem>
      <C.DockItem as={HashLink} to="/#about" title="About">
        <FaUser />
      </C.DockItem>
      <C.DockItem as="a" href="mailto:mariaferreira.developer@gmail.com" title="Contact">
        <FaEnvelope />
      </C.DockItem>
      <C.DockItem as="a" href="https://drive.google.com/file/d/1dybROZTrO_tOiMAO-cE0s2HKIgc9qZqa/view?usp=sharing" target="_blank" rel="noreferrer" title="CV">
        <FaFileLines />
      </C.DockItem>
      <C.DockImage
        as="a"
        href="https://www.github.com/marinspira"
        target="_blank"
        rel="noreferrer"
        title="GitHub"
        aria-label="GitHub"
      >
        <img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png" alt="GitHub" />
      </C.DockImage>
    </C.Dock>
  );
}

export default Dock;
