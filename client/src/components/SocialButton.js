import React from "react";

const SocialButton = ( { TargetIcon } ) => {
  return (
    <a
      className='social-icon-link github'
      href="https://github.com/JokiestJoke"
      target='_blank'
      rel="noreferrer"
      aria-label='Github'
    >
      <TargetIcon />
    </a>
  )
}

export default SocialButton;