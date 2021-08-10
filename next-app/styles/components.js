import styled from "styled-components";

export const CustomLink = styled.a`
  color: ${(props) => props.color || "blue"};

  &:hover {
    text-decoration: ${(props) => (props.underline ? "underline" : "none")};
    cursor: pointer;
  }
`;
