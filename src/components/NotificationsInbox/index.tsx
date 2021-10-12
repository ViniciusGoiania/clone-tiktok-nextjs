/* eslint-disable react/no-array-index-key */
import React,{useRef, useEffect, useCallback } from 'react';
import useOnClickOutside from 'use-onclickoutside';
import {
  MainContainer,
  Inbox,
  InboxContentHeader,
  InboxContentNotification,
   GroupWrap, SpanContentWrap, NoticeList, InboxEmpty } from './styles';


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
