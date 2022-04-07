import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import  Tweets  from "../Tweets";

import { Container, Tab } from "./styles";

const Feed: React.FC = () => {
  const [active, setActive] = useState<Number>(1)
  const [listState, setListState] = useState([
      {activeObject: 1, id: 1, text: "Tweets"}, 
      {activeObject: 0, id: 2, text:'Tweets and replies'}, 
      {activeObject: 0, id: 3, text: 'Media'}, 
      {activeObject: 0, id: 4, text: 'Likes'}
  ])

  function isActive(index: number){
    return setActive(listState[index].id)
  }

  function toggleActiveStyles(index: number){
    if(listState[index].id == active){
      return 'tab-opt active'
    } else {
      return 'tab-opt'
    }
  }

  return (
    <Container>
      <Tab>
        {listState.map((elements, index) => 
          <li 
          key={index} 
          className= {toggleActiveStyles(index)}
          onClick = {() => isActive(index)}
          >
            <a>{elements.text}</a>
          </li>
        )}
      </Tab>
      {active === 1 ? <Tweets/> : <h1>OK</h1>}
    </Container>
  );
};

export default Feed;