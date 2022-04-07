import styled, { css } from "styled-components";
import { Search } from "../../styles/Icons";
import Button from "../Button";

export const Container = styled.div`
  display: none;
  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: min(399px, 100%);
    padding: 10px 26px;
    gap: 13px;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: min(399px, 100%);
  position: relative;

  > input {
    width: 100%;
    height: 40px;
    border-radius: 19px;
    background: var(--secondary);
    padding: 12px 45px;
    font-size: 14px;
    font-weight: 400;
    color: var(--gray);
  }
`;
export const IconCSS = css`
  width: 20px;
  height: 20px;
  fill: var(--gray);
  position: absolute;
  left: 21px;
`;

export const LikePerson = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--secondary);
  border-radius: 14px;
`;
export const Title = styled.div`
  border-bottom: 1px solid var(--outline);
  > h1 {
    font-size: 20px;
    font-weight: 700;
    padding: 13px 16px;
  }
`;
export const ProfileData = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 16px;
  border-bottom: 1px solid var(--outline);
`;
export const Avatar = styled.div`
  width: 49px;
  height: 49px;
  border-radius: 50%;
  background: var(--gray);
  margin-right: 10px;
`;
export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;

  > strong {
    font-size: 14px;
    font-weight: 700;
  }
  > span {
    font-size: 14px;
    font-weight: 300px;
    color: var(--gray);
  }
`;

export const ButtonEdit = styled(Button)`
  padding: 6px 17px;
  font-size: 14px;
`;

export const Notice = styled.div`
  padding: 16px;
`;

export const SearchIcon = styled(Search)`
  ${IconCSS}
`;
