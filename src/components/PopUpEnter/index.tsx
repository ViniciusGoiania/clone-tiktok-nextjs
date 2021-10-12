/* eslint-disable react/no-array-index-key */
import React from "react";
import { ActionsEnterDone, HeaderSettingWrap, DivInherited } from './styles';

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

const PopUpEnter: React.FC = () => (
  <DivInherited>
    <ActionsEnterDone>
      <img src="" alt="" />
      <HeaderSettingWrap>
        {profileOptions.map((item, index) => (
        <div key={index}>
          <a href="/">
            <i><img src={item.image} alt="" /></i>
            {item.menuName}
          </a>
        </div>
        ))}
        <hr />
        <div>
          <a href="/">
            <i><img src="/images/logout-profile.svg" alt="" /></i>
            Log out
          </a>
        </div>
      </HeaderSettingWrap>
    </ActionsEnterDone>
  </DivInherited>
  )

export default PopUpEnter;
