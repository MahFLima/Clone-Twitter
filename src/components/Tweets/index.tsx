import React from 'react';
import Tweet from '../Tweet';

import { Container } from './styles';

const Tweets: React.FC = () => {
  return (
    <Container>
      <Tweet/>  
      <Tweet/>  
    </Container>
  );
}

export default Tweets;