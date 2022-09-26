import styled from "styled-components"
import { useLocation } from 'react-router-dom';

import LinkItem from './LinkItem';
// import { routesTypes } from 'library/types';

type PropertiesType = { routes: Array<Object> };

export default function Navbar({ routes }: PropertiesType) {
  const location = useLocation();


  return (
    <Container>
      {routes?.map((item: any, key: number) => (
        <LinkItem isActive={item.link === location.pathname} title={item.title} link={item.link} key={key} />
      ))}
    </Container>
  );
}

const Container = styled.nav`
    display: flex;
    padding: 32px 7%;
    margin-top: 48px;
`