import React from "react";

import {
  Container,
  SearchBar,
  SearchIcon,
  LikePerson,
  Title,
  ProfileData,
  Avatar,
  UserInfo,
  ButtonEdit,
  Notice,
} from "./styles";

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchBar>
        <SearchIcon />
        <input type="text" placeholder="Busca no Twitter" />
      </SearchBar>
      <LikePerson>
        <Title>
          <h1>Talvez você curta</h1>
        </Title>
        <ProfileData>
          <Avatar />
          <UserInfo>
            <strong>Luiz Batanero</strong>
            <span>@luizbatanero</span>
          </UserInfo>
          <ButtonEdit outlined>Seguir</ButtonEdit>
        </ProfileData>
        <ProfileData>
          <Avatar />
          <UserInfo>
            <strong>Luiz Batanero</strong>
            <span>@luizbatanero</span>
          </UserInfo>
          <ButtonEdit outlined>Seguir</ButtonEdit>
        </ProfileData>
        <ProfileData>
          <Avatar />
          <UserInfo>
            <strong>Luiz Batanero</strong>
            <span>@luizbatanero</span>
          </UserInfo>
          <ButtonEdit outlined>Seguir</ButtonEdit>
        </ProfileData>
      </LikePerson>
      <LikePerson>
        <Title>
          <h1>O que está acontecendo</h1>
        </Title>
        <Notice>
          <UserInfo>
            <span>Assuntos do momento no Brasil</span>
            <strong>Bootcamp da Rocketseat</strong>
          </UserInfo>
        </Notice>
        <Notice>
          <UserInfo>
            <span>Assuntos do momento no Brasil</span>
            <strong>Bootcamp da Rocketseat</strong>
          </UserInfo>
        </Notice>
        <Notice>
          <UserInfo>
            <span>Assuntos do momento no Brasil</span>
            <strong>Bootcamp da Rocketseat</strong>
          </UserInfo>
        </Notice>
      </LikePerson>
    </Container>
  );
};

export default SideBar;
