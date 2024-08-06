const LinkFormatter = (linkText) => {
  if (linkText.includes(' ')) {
    console.log('White Space Detected');
  } else {
    console.log('No Whitespace');
  }
}

export default LinkFormatter;