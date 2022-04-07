import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Tab = styled.ul`
  width: 100%;
  display:flex;
  justify-content: space-around;
  padding: 0 1rem;
  border-bottom: 2px solid var(--twitter);

  .active{
    >a{
      color: var(--twitter);
    }
  }

  .tab-opt{
    list-style: none;

    &:hover{
    background: var(--twitter-dark-hover);
  }

    >a{
      font-size: 15px;
      font-weight: 700;
      text-decoration: none;
      margin: 1rem 0;
      display: block;
      text-align: center;
      cursor: pointer;
    }
  }
`
