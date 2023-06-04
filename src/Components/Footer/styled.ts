import styled from "styled-components";

export const FooterContainer = styled.div`
  padding: 40px 20%;
`

export const FooterText = styled.div<{color?:string}>`
  color: var(--white);
  font-size: 1rem;
  text-align: center;
  margin-bottom: 10px;

  > a {
    color: ${({color}) => color};
    text-decoration: none;
  }
`;

