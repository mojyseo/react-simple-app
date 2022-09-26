import styled from "styled-components"
import { Link } from "react-router-dom"

type PropertiesType = { isActive?: boolean, title: string, link: string };

export default function LinkItem({ isActive, title, link }: PropertiesType) {
    return <CustomLink isActive={!!isActive} to={link}>{title}</CustomLink>;
}

type CustomLinkProps = {
    isActive: boolean,
    to: any

}

const CustomLink = styled(Link) <CustomLinkProps>`
    padding: 16px 12px;
    margin-right: 16px;
    text-decoration:none;color:#282828;
        ${({ isActive }) => isActive ?
        `color: white;
    background: #393939;
    border-radius: 5px;`
        :
        ""}
`