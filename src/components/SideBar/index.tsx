import React from 'react';
import { SidebarContainer, SidebarWrapper, ScrollWrapper, ScrollWrapperContent, UpperContents, NavWrapper, NavItem, UserList,
   UserListHeader, DivUserFollowing, DivBottomWrapper, DivLinkWrapper, ScrollBar, ScrollBarThumb } from './styles';

import Discover from '../Discover';
import User from '../User';


const SideBar: React.FC = () => (
    <SidebarContainer>
      <SidebarWrapper>
        <ScrollWrapper>
          <ScrollWrapperContent>
            <UpperContents>
              <NavWrapper>
                <NavItem active>
                  <img src="/images/home-nav.svg" alt="" />
                  <h2>For You</h2>
                </NavItem>
                <NavItem>
                  <img src="/images/following-nav.svg" alt="" />
                  <h2>Following</h2>
                </NavItem>
                <NavItem>
                  <img src="/images/live-nav.svg" alt="" />
                  <h2>LIVE</h2>
                </NavItem>
              </NavWrapper>
              <UserList>
                <UserListHeader>Suggested accounts
                  <p>See all</p>
                </UserListHeader>
                <User />
              </UserList>
              <DivUserFollowing>
                <div>Following accounts</div>
                <p>Accounts you follow will appear here</p>
              </DivUserFollowing>
              <Discover />
            </UpperContents>
            <DivBottomWrapper>
              <DivLinkWrapper>
                <a href="/">About</a>
                <a href="/">Newsroom</a>
                <a href="/">Contact</a>
                <a href="/">Careers</a>
                <a href="/">ByteDance</a>
              </DivLinkWrapper>
              <DivLinkWrapper>
                <a href="/">TikTok for Good</a>
                <a href="/">Advertise</a>
                <a href="/">Developers</a>
                <a href="/">Transparency</a>
              </DivLinkWrapper>
              <DivLinkWrapper>
                <a href="/">Help</a>
                <a href="/">Safety</a>
                <a href="/">Terms</a>
                <a href="/">Privacy</a>
                <a href="/">Creator Portal</a>
                <a href="/">Community Guidelines</a>
              </DivLinkWrapper>
              <span>© 2021 TikTok</span>
            </DivBottomWrapper>
          </ScrollWrapperContent>
        </ScrollWrapper>
        <ScrollBar>
          <ScrollBarThumb />
        </ScrollBar>
      </SidebarWrapper>
    </SidebarContainer>
  )

export default SideBar;
