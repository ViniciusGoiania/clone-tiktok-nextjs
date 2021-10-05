import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    text-size-adjust: 100%;

    *::-webkit-scrollbar {
      border-radius: 0;
      width: 8px;
      height: 100px !important;
    }
  
    *::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: rgba(0, 0, 0, 0.15);
      height: 100px !important;
    }
  
    *::-webkit-scrollbar-track {
      border-radius: 0;
      background-color: rgba(0,0,0,0);
      height: 100px !important;
    } 
  }

  body {
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialised;
    font-family: "sofiapro-regular",PingFangSC,system-ui,Arial,Tahoma;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #fff;
  }
`;
