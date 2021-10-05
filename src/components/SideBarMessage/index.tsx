import React from 'react';
import { Container, ListWrapper, ListWrapperHeader, ListContent,
   MessageContainer, MessageContent, ScrollbarDiv, EmptyList } from './styles';

const SideBarMessage: React.FC = () => {
  return (
    <Container>
      <ListWrapper>
        <ListWrapperHeader>
          <h3>Messages</h3>
          <img src="https://sf16-scmcdn-va.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/setting-icon-a9c23d78ffb500df10b32dbcc6aa9b5e.svg" alt="" />
        </ListWrapperHeader>
        <ListContent>
          <MessageContainer>
            <MessageContent>
              <EmptyList>
                No messages yet
              </EmptyList>
            </MessageContent>
            <ScrollbarDiv>
              <div></div>
            </ScrollbarDiv>
          </MessageContainer>
        </ListContent>
      </ListWrapper>
    </Container>
  );
}

export default SideBarMessage;
