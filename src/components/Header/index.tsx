import React, {useState} from 'react';
import Link from 'next/link';
import { Container, Content, LogoContainer, Logo, DivSearch, SearchInput, DividerBar,
   IconButtonSearch, OptionsContainer, UploadDiv, MessageIcon, InboxIcon, InboxDiv, AvatarDiv,
   ActionsEnterDone, HeaderSettingWrap, SearchIconManual } from './styles';

import NotificationsInbox from '../NotificationsInbox';

const profileOptions = [
  {
    image: "/images/user-profile.svg",
    menuName: "View profile"
  },
  {
    image: "/images/coins-profile.svg",
    menuName: "Get coins"
  },
  {
    image: "/images/settings-profile.svg",
    menuName: "Settings"
  },
  {
    image: "/images/language-profile.svg",
    menuName: "English"
  },
  {
    image: "/images/feedback-profile.svg",
    menuName: "Feedback and help"
  },
  {
    image: "/images/keyboard-profile.svg",
    menuName: "Keyboard shortcuts"
  }
]

const Header: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <Container>
      <Content>
        <Link href="/">
          <LogoContainer>
            <Logo src="/images/logoIcon.svg" />
          </LogoContainer>
        </Link>
        <DivSearch>
          <SearchInput placeholder="Search accounts" />
          <DividerBar />
          <IconButtonSearch>
            <SearchIconManual />
          </IconButtonSearch>
        </DivSearch>
        <OptionsContainer>
          <Link href="/upload">
            <UploadDiv>
              <span>
                <img src="/images/upload-wrapper.svg" />
              </span>
            </UploadDiv>
          </Link>
          <Link href="/inbox">
            <MessageIcon>
              <div />
            </MessageIcon>
          </Link>
          <InboxIcon>
            <InboxDiv onClick={openModal}>
              <span>
                <img src="/images/inbox-wrapper.svg" />
              </span>
            </InboxDiv>
            <NotificationsInbox showModal={showModal} setShowModal={setShowModal} />
          </InboxIcon>          
          <AvatarDiv>
            <span>
              <span>
                <img src="/images/avatar-default.jpeg" />
              </span>
            </span>
            <ActionsEnterDone>
              <img src="" alt="" />
              <HeaderSettingWrap>
              {profileOptions.map((item, index) => (
              <div key={index}>
                <a href="">
                  <i><img src={item.image} /></i>
                  {item.menuName}
                </a>
              </div>
              ))}
              <hr />
              <div>
                <a href="">
                  <i><img src="/images/logout-profile.svg" /></i>
                Log out
                </a>
              </div>
              </HeaderSettingWrap>
            </ActionsEnterDone>            
          </AvatarDiv>
        </OptionsContainer>
      </Content>
    </Container>
  );
}

export default Header;
