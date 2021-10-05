import React from 'react';
import { DesktopContainer, SharedContent, MainBodyInbox, SharedLayout, SharedLayoutMessage } from './styles';
import Header from '../../components/Header';
import RightBarMessage from '../../components/RightBarMessage';
import BackContainer from '../../components/BackContainer';
import SideBarMessage from '../../components/SideBarMessage';

const LayoutInbox: React.FC = () => {
  return (
    <DesktopContainer>
    <Header></Header>
    <MainBodyInbox>
      <SharedLayout>
        <SharedContent>
          <SharedLayoutMessage>
            <BackContainer />
            <SideBarMessage></SideBarMessage>
            <RightBarMessage></RightBarMessage>
          </SharedLayoutMessage>
        </SharedContent>
      </SharedLayout>
    </MainBodyInbox>
    </DesktopContainer>
  );
}

export default LayoutInbox;
