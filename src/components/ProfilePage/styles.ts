import styled from "styled-components";
import { Map, Cake } from "../../styles/Icons";
import Button from '../Button'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  max-width: 100%;
  overflow-y: auto;

  scrollbar-width: none;
  ::-webkit-scrollbar{
    display: none;
  }
`;
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Banner = styled.div`
  width: 100%;
  height: min(33vw, 199px);
  background: var(--twitter);
  position: relative;
  flex-shrink: 0;

  .photo{
    width: max(45px, min(135px, 22vw));
    height: max(45px, min(135px, 22vw));
    border-radius: 50%;
    background: var(--gray);
    border: 3.75px solid var(--primary);
    position: absolute;
    bottom: max(-60px, -10vw);
    left: 15px;
  }
`;


export const ButtonEdit = styled(Button)`
  position: absolute;
  top: 2vw;
  right: 7px;

  padding: 4px 16px;
  font-size: 13px;

  @media(min-width: 320px){
    top: 10px;
    padding: 10px 19px;
    font-size: 15px;
  }

`

export const UserInfo = styled.div`
  padding: min(calc(10vw + 7px), 67px) 16px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;

  div:nth-child(1){
    >strong{
      font-size: 19px;
      font-weight: 700;
    }
    >p{
      color: var(--gray);
      font-size: 15px;
      font-weight: 400;
    }
  }
  >p{
    font-size: 15px;
    font-weight: 400;
  }
  >p a{
    text-decoration: none;
    color: var(--twitter);
  }
  .user-date{
    display: flex;
    flex-direction: column;

    >span{
      display: flex;
      gap: 10px;
    }

    >span p{
      font-size: 15px;
      font-weight: 400;
      color: var(--gray);
    }
  }

  .user-seg{
    display: flex;
    gap: 20px;

    >p{
      color: var(--gray);
      font-size: 15px;
    }
    >p a{
      font-size: 15px;
      font-weight: 700;
    }
  }
`

export const Maps = styled(Map)`
  fill: var(--gray);
  width: 18px;
  height: 18px;
`

export const Birthday = styled(Cake)`
  fill: var(--gray);
  width: 18px;
  height: 18px;
`
