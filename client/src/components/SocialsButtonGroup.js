import React from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const SocialsButtonGroup = () => {
  return (
    <ButtonGroup aria-label="Socials Button Group">
      <a
        className='social-icon-link github'
        href="https://github.com/JokiestJoke"
        target='_blank'
        rel="noreferrer"
        aria-label='Github'
      >
        <FaSquareGithub />
      </a>

      <a
        className='social-icon-link linkedIn'
        href="https://www.linkedin.com/in/mark-doghramji/"
        target='_blank'
        rel="noreferrer"
        aria-label='LinkedIn'
      >
        <FaLinkedin />
      </a>
    </ButtonGroup>
  );
}

export default SocialsButtonGroup;