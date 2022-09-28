import styled from "styled-components"
import { useLocation } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from 'app/hooks';
import {
  getMode, toggleMode,
} from 'app/features/themeSlice';


import LinkItem from './LinkItem';
// import { routesTypes } from 'library/types';

type PropertiesType = { routes: Array<Object> };

export default function Navbar({ routes }: PropertiesType) {
  const location = useLocation();

  const mode = useAppSelector(getMode);
  const dispatch = useAppDispatch();

  function toggleTheme() {
    dispatch(toggleMode())
  }

  return (
    <Container>
      <LinksContainer>
        {routes?.map((item: any, key: number) => (
          <LinkItem mode={mode} isActive={item.link === location.pathname} title={item.title} link={item.link} key={key} />
        ))}
      </LinksContainer>
      <ToggleButton onClick={toggleTheme} >
        {mode === 'dark' ?
          <img src="/icons/light.svg" alt="" />
          :
          <img src="/icons/dark.svg" alt="" />
        }
      </ToggleButton>
    </Container>
  );
}

const Container = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 32px 7%;
`
const LinksContainer = styled.nav`
    display: flex;
`
const ToggleButton = styled.button`
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    border: none;
    border-radius: 24px;
    background: #e4e4e4;
    cursor:pointer ;    
    background: none;

    img { 
      width: 30px;
    height: 30px;
    }

    `