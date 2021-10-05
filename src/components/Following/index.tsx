import React from 'react';
import { DivUserFollowingEmpty } from './styles';

// fazer tratamento caso a pessoa tenha algum follow

const Following: React.FC = () => {
  return (
    <DivUserFollowingEmpty>
      <div>Following accounts</div>
      <p>Accounts you follow will appear here</p>
    </DivUserFollowingEmpty>    
  );
}

export default Following;
