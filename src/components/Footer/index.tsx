/* eslint-disable react/no-array-index-key */
import React from 'react';
import { FooterContainer, FooterContent, TiktokLogoFooter, LogoContainerFooter, LogoIconFooter,
   LogoTextFooter, FooterContentColumn, FooterBottom, FooterLanguage, LanguageSelect, CopyrightBottom } from './styles';

const footerColumns = [
  {
    title: "Company",
    itemSubColumn: ["About", "Newsroom", "Contact", "Careers", "ByteDance"],
    columnName: ["About", "Newsroom", "Contact", "Careers", "ByteDance"]
  },
  {
    title: "Programs",
    columnName: ["TikTok for Good", "Advertise", "Developers"]
  },
  {
    title: "Support",
    columnName: ["Help Center", "Safety Center", "Creator Portal", "Community Guidelines", "Transparency", "Accessibility"]
  },
  {
    title: "Legal",
    columnName: ["Terms of Use", "Privacy Policy"]
  },
]

const Footer: React.FC = () => (
    <FooterContainer> 
      <FooterContent>
        <TiktokLogoFooter>
          <LogoContainerFooter>
            <LogoIconFooter src="/images/logo-tiktok-footer.svg" />
            <LogoTextFooter src="/images/logotext-tiktok-footer.svg" />
          </LogoContainerFooter>
          <strong>TikTok</strong>
        </TiktokLogoFooter>
        {footerColumns.map((itemColumn, index) => (
          <FooterContentColumn key={index}>
            <h4>{itemColumn.title}</h4>
           {itemColumn.columnName.map((subColumn, indexsub) => (
            <span key={indexsub}>
              <a href="/" >                   
                <h5>{subColumn}</h5>
              </a>
            </span>
           ))}                               
          </FooterContentColumn>
        ))}
    </FooterContent>
    <FooterBottom>
      <FooterLanguage>
        <p>
          <span>English</span>
        </p>
        <img src="/images/arrow-down-footer.svg" alt="" />
        <LanguageSelect />
      </FooterLanguage>
      <CopyrightBottom>© 2021 TikTok</CopyrightBottom>
    </FooterBottom>
  </FooterContainer>
  )

export default Footer;
