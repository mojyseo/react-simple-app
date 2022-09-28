import styled from "styled-components"
import { Link } from "react-router-dom"

type PropertiesType = { isActive?: boolean, title: string, link: string, mode: string };

export default function LinkItem({ isActive, title, link, mode }: PropertiesType) {
    return <CustomLink theme={mode} isActive={!!isActive} to={link}>{title}</CustomLink>;
}

type CustomLinkProps = {
    isActive: boolean,
    to: any,
    theme: string,

}

const CustomLink = styled(Link) <CustomLinkProps>`
    padding: 16px 20px;
    margin-right: 16px;
    text-decoration:none;
  color: ${({ theme }) => theme === "dark" ? '#fff' : "#282828"};
        ${({ isActive, theme }) => isActive ?
        `
    color: ${theme === "dark" ? '#282828' : "#fff"};
    background: ${theme === "dark" ? '#ececec' : "#393939"};
    border-radius: 5px;`
        :
        ""}
`