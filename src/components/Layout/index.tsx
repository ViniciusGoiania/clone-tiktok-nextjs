import React from 'react';
import Header from '../Header';
import SideBar from '../SideBar';
import { Container, SidebarContainer, MainBody, TrendingContainer, TrendingFeed, VideoFeedContainer } from './styles';

const Layout: React.FC = ({ children }) => (
    <>
      <Container>
        <Header />
        <MainBody>
          <SidebarContainer>
            <SideBar />
          </SidebarContainer>
          <TrendingContainer>
            <TrendingFeed>
              <VideoFeedContainer>
                {children} 
              </VideoFeedContainer>
            </TrendingFeed>
          </TrendingContainer>
        </MainBody>
      </Container>
    </>
  )

export default Layout;
