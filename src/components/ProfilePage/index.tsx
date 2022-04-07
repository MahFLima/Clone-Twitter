import React from 'react';
import Feed from '../Feed';

import { Container, Header, Banner, ButtonEdit, UserInfo, Maps, Birthday } from './styles';

const ProfilePage: React.FC = () => {
  return(
    <Container>
      <Header>
        <Banner>
          <div className="photo"></div>
        </Banner>
        <UserInfo>
          <ButtonEdit outlined>Editar Perfil</ButtonEdit>
          <div>
            <strong>Mariana Lima</strong>
            <p>@mariana_lima</p>
          </div>
          <p>Developer at <a href="#">@Rocketseat</a></p>
          <div className="user-date">
            <span>
              <Maps/>
              <p>São Paulo, Brasil</p>
            </span>
            <span>
              <Birthday/>
              <p>Nascido(a) em 06 de abril de 1999</p>
            </span>
          </div>
          <div className="user-seg">
            <p>Seguindo <strong>90</strong></p>
            <p><strong>200</strong> Seguidores</p>
          </div>
        </UserInfo>
      </Header>
      <Feed/>
    </Container>
  );
}

export default ProfilePage;