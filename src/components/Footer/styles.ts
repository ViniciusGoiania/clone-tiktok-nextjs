import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  color: #fff;
  background: #000;
  padding-bottom: 24px;
`;

export const TiktokLogoFooter = styled.div`
  display: block;
  position: absolute;
  left: 144px;
  top: 43px;

  > strong {
    visibility: hidden;
    position: absolute;
    left: 0;
    top: 0;
  }  
`;

export const LogoIconFooter = styled.img`
  width: 33px;
`;

export const LogoTextFooter = styled.img`
  width: 120px;
  margin-left: 6px;
  position: relative;
  top: -2px;
`;


export const LogoContainerFooter = styled.div`
  transform: scale(1);
  direction: ltr;
`;


export const FooterContent = styled.footer`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 40px 0 0 378px;
`;

export const FooterBottom = styled.div`
  padding: 0 144px;
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

export const FooterLanguage = styled.div`
  font-family: "proxima-regular",Arial,Tahoma,PingFangSC,sans-serif,"Segoe UI Emoji","Noto Emoji";
  font-weight: 400;
  box-sizing: border-box;
  width: 172px;
  height: 36px;
  border: 1px solid #8a8b91;
  border-radius: 2px;
  font-size: 14px;
  line-height: 36px;
  padding: 0 16px;
  cursor: pointer;
  position: relative;
  text-align; left;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;

  > p {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin: 0;
  }
`;

export const LanguageSelect = styled.select`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  font-size: 16px;
`;

export const CopyrightBottom = styled.div`
  font-family: "sofiapro-medium",Arial,Tahoma,PingFangSC,sans-serif,"Segoe UI Emoji","Noto Emoji";
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #8a8b91;
`;

export const FooterContentColumn = styled.div`
  flex: 1 1 0%;
  max-width: 226px;
  padding-right: 8px;
  color: #fff;

  > h4 {
    font-size: 14px;
    line-height: 28px;
    font-family: "sofiapro-bold",Arial,Tahoma,PingFangSC,sans-serif,"Segoe UI Emoji","Noto Emoji";
    font-weight: 700;
    color: #fff;
    margin: 0;
  }

  > span {
    display: block;

    > a {
      display: inline;
      text-decoration: none;
      position: relative;

      > h5 {
        color: #ccc;
        display: inline;
        font-family: "sofiapro-medium",Arial,Tahoma,PingFangSC,sans-serif,"Segoe UI Emoji","Noto Emoji";
        font-weight: 500;
        font-size: 14px;
        line-height: 28px;
        position: relative;
        margin: 0;
      }
    }
  }
`;
