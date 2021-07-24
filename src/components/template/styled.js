import styled from 'styled-components';

export const Main = styled.main`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    overflow: none;
    display: flex;
    flex-direction: row;
    font-family: "Roboto", sans-serif;
`;

export const Nav = styled.nav`
    flex: 1;
    max-width: 160px;
    min-width: 160px;
    min-height: 100%;
    background-color: #006400;
    display: flex;
    flex-direction: column;
    justify-contents: space-between;
`;

export const Logo = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-weight: bold;
    text-decoration: none;
    padding: 32px 0;
    text-align: center;
`;

export const Image = styled.img`
    width: 80px;
    border-radius: 50%;
    margin-bottom: 10px;
    background-color: #cccccc;
`;

export const Ul = styled.ul`
    flex: 1;
    max-width: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
    border-top: 1px solid #006400;
    
`;

export const Li = styled.li`
    border-bottom: 1px solid #006400;
    transition: background-color.2s;
    background-color: #000000;
    &:hover {
        background-color: #cccccc;
    }
`;

export const LiActive = styled.li`
    border-bottom: 1px solid #006400;
    transition: background-color .2s;
    background-color: #000000;
`;

export const A = styled.a`
    display: block;
    color: #ffffff;
    font-weight: bold;
    text-decoration: none;
    padding: 12px 24px;
    cursor: pointer;
    &:hover {
        color: #006400;
    }
`;

export const Section = styled.section`
    background-color: #ffffff;
    width: calc(100% - 160px);
    display: flex;
    flex-direction: row;
`;
