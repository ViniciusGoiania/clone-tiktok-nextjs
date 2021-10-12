import React, {useState, useRef, useEffect, useCallback} from 'react';
import { MainContainer, Inbox, InboxContentHeader, InboxContentNotification,
   GroupWrap, SpanContentWrap, NoticeList, InboxEmpty } from './styles';

import useOnClickOutside from 'use-onclickoutside';

  const notifactionsGroupWrap = [
    {
      nameNotifaction : "All",
      selected: true
    },
    {
      nameNotifaction : "Likes",
      selected: false
    },
    {
      nameNotifaction : "Comments", 
      selected: false 
    },
    {
      nameNotifaction : "Mentions",
      selected: false
    },
    {
      nameNotifaction : "Followers",
      selected: false
    },
  ]

  interface Iprops {
    showModal: boolean,
    setShowModal: (active: boolean) => void
  }
  
  const NotificationsInbox:React.FC<Iprops> = ({showModal, setShowModal}) => {

    const modalRef = useRef<HTMLDivElement>(null);
  
    const closeModal = () => {
        setShowModal(false);
    };
  
    const keyPress = useCallback(e => {
      if(e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    }, [setShowModal, showModal]);
  
    useEffect(() => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },  [keyPress]);

    useOnClickOutside(modalRef, () => setShowModal(false));
  
    return (
      <>
      {showModal ? (
      <MainContainer ref={modalRef}>
        <img src="" alt="" />
        <Inbox>
          <InboxContentHeader>
            <InboxContentNotification>Notifications</InboxContentNotification>
            <GroupWrap>
              {notifactionsGroupWrap.map((item, index) =>  (
              <SpanContentWrap active={item.selected === true}  
                // onClick={() => (notifactionsGroupWrap[index].selected = !notifactionsGroupWrap[index].selected)}  just ideia                           
                // onMouseLeave={() => item.selected = false}
                key={index}>
                {item.nameNotifaction}
              </SpanContentWrap>
              ))}
            </GroupWrap>
          </InboxContentHeader>
          <NoticeList>
            <InboxEmpty>
              <img src="/images/empty-inbox.svg" alt="" />
              <h4>All activity</h4>
              <p>Notifications about your account will appear here.</p>
            </InboxEmpty>
          </NoticeList>
        </Inbox>
      </MainContainer>
      ) : null }
      </>
    );
  };

export default NotificationsInbox;
