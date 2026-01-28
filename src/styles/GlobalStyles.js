import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');


  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: "Rubik", sans-serif;
    /* background: #ffffff;
    background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(214, 210, 210, 1) 54%, rgba(186, 186, 186, 1) 100%); */
  }

  html, body, #root {
    min-height: 100vh;
    scroll-behavior: smooth;
  }
`;

export const Container = styled.section`
  max-width: 480px;
  background: #fff;
  margin: 50px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
