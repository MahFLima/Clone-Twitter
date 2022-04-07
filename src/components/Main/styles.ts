import styled, { css } from "styled-components";
import {
  ArrowLeft,
  Home,
  Search,
  Email,
  Notifications,
} from "../../styles/Icons";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  width: min(601px, 100%);

  @media (min-width: 500px) {
    border-left: 1px solid var(--gray);
    border-right: 1px solid var(--gray);
  }
`;

export const Header = styled.div`
  z-index: 2;
  position: sticky;
  top: 0;
  background: var(--primary);

  display: flex;
  align-items: center;
  gap: 1rem;

  text-align: left;

  padding: 9px 13px;
  border-bottom: 1px solid var(--outline);

  button {
    padding: 8px;
    border-radius: 50%;

    outline: 0;
    cursor: pointer;

    &:hover {
      background: var(--twitter-dark-hover);
    }
  }
`;

export const BackIcon = styled(ArrowLeft)`
  width: 1.5rem;
  height: 1.5rem;

  fill: var(--twitter);
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;

  > strong {
    font-size: 1.1rem;
    font-weight: 700;
  }

  > span {
    font-size: 1rem;
    font-weight: 400;

    color: var(--gray);
  }
`;

export const BottomMenu = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
  
  width: 100%;
  background: var(--primary);
  border-top: 1px solid var(--outline);

  display: flex;
  justify-content: space-between;
  padding: 8px min(46px, max(10vw, 10px));

  @media(min-width: 500px){
    display: none;
  }

`;

const iconCSS = css`
  width: 31px;
  height: 31px;

  cursor: pointer;

  fill: var(--gray);

  &:hover, &.active{
    fill: var(--twitter);
  }
`

export const HomeIcon = styled(Home)`${iconCSS}`;
export const SearchIcon = styled(Search)`${iconCSS}`;
export const EmailIcon = styled(Email)`${iconCSS}`;
export const BellIcon = styled(Notifications)`${iconCSS}`;
