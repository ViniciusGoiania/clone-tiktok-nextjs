/* eslint-disable react/no-array-index-key */
import React from 'react';
import { DiscoverTitle, DiscoverList, DicoverListContainer, DiscoverItemContainer } from './styles';

const staticTags = [
  {
    icon: "/images/hash-discover-list.svg",
    description: "queromerendar"
  },
  {
    icon: "/images/hash-discover-list.svg",
    description: "dicasdeestudo"
  },
  {
    icon: "/images/hash-discover-list.svg",
    description: "hellomotobrasil"
  },
  {
    icon: "/images/song-discover-list.svg",
    description: "Woah (feat. D3Mstreet) - KRYPTO9095"
  },
  {
    icon: "/images/song-discover-list.svg",
    description: "Dance Monkey - Tones and I"
  },
  {
    icon: "/images/song-discover-list.svg",
    description: "Can We Kiss Forever? - Kina"
  },
  {
    icon: "/images/search-discover-list.svg",
    description: "fyyyy tiktok"
  },
  {
    icon: "/images/search-discover-list.svg",
    description: "MARIVALDA"
  },
  {
    icon: "/images/hash-discover-list.svg",
    description: "ficofelizquando"
  },
  {
    icon: "/images/hash-discover-list.svg",
    description: "dicasdefilmes"
  },
];

const Discover: React.FC = () => (
    <DicoverListContainer>
      <DiscoverTitle>Discover</DiscoverTitle>
      <DiscoverList>
        {staticTags.map((item, index) => (
          <a href="/" key={index}>
            <DiscoverItemContainer>
              <div> 
                <img src={item.icon} alt="" />
              </div>
              <span>{item.description}</span>
            </DiscoverItemContainer>
          </a>
        ))}
      </DiscoverList>
    </DicoverListContainer>
  )

export default Discover;
