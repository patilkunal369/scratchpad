import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root{

    --secondary: rgba(112, 152, 125, 1.00);
    --primary: rgb(79, 93, 202);
    --primary_light: rgba(79, 93, 202, 0.8);
    --neutral_light_brown: rgba(203, 189, 167, 1.00);
    --neutral_white: rgba(226, 227, 233, 1.00);
    --neutral_grey: rgba(189, 194, 201, 1.00);
    --neutral_grey_dark: rgb(127, 140, 153);
    --neutral_light_grey: rgb(244, 243, 245);
    --error: rgb(242,100,92);
   
    --neutral_font: rgb(35, 32, 49);
    --neutral_font_light: rgba(35, 32, 60, 0.8);
}

.ck-editor__editable_inline{
  min-height: 10rem;
  max-height: 10rem;

}


/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

*::-webkit-scrollbar {
  width: 5px;
  background-color: #f5f5f5;
}

*::-webkit-scrollbar-thumb {
  border-radius: 1rem;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: var(--Very_dark_cyan);
}

*{

  margin: 0;
  padding: 0;
}
/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul,
ol, li {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  font: 62.5%;
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;

  color: var(--neutral_grey);
  font-family: "Roboto";
  background-color: var(--neutral_light_grey);
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
 }


/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

`;
