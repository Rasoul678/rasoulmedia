import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *  {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  html {
    scroll-behavior: smooth;
    width: calc(100% - 0.05rem);
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: IRANSans, Ubuntu, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.3s linear;
    user-select: none;
  }


//! Works on Chrome, Edge, and Safari 
//! width
::-webkit-scrollbar {
  width: 0.4rem;
  height: 0.2rem;
  background-color: ${({ theme }) => theme.background};
}

@media screen and (max-width: 550px) {
  ::-webkit-scrollbar {
    display: none; /*! Hide scrollbar for Chrome, Safari and Opera */
  }
  * {
    -ms-overflow-style: none; /*! IE and Edge */
    scrollbar-width: none; /*! Firefox */
  }
}

//! Track 
::-webkit-scrollbar-track {
  background: ${({ theme }) => theme.background};
  border-radius: 10px;
}

//! Handle
::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.text};
  border-radius: 15px;
}

//! Handle on hover
//  ::-webkit-scrollbar-thumb:hover {
//     background: red;
//   } 

  .custom-helper {
    padding-top: 2.5rem;
    color: ${({ theme }) => (theme.name === "dark" ? "#000" : "#ddd")};
    background-color: ${({ theme }) =>
      theme.name === "dark" ? "#eee" : "#111"};
    
      svg{
        color: ${({ theme }) => (theme.name === "dark" ? "#000" : "#FFF")};
      }

      nav button{
        width: 0.7rem;
        height: 0.7rem;
        background-color: ${({ theme }) => theme.border};
        border: 2px solid #000;
      }

      [data-tour-elem='controls'] {
        direction: initial;
      }

      [data-tour-elem='right-arrow'] {
        font-family: IRANSans, Ubuntu, Helvetica, Arial, Roboto, sans-serif;
      }
  }
  `;

export const View = styled.div`
  text-align: center;
  min-height: 100vh;
  position: relative;
`;
