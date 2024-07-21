import styled from "styled-components";
import Container from "/src/components/ui/container/container";

export const StyledFooter = styled.footer`
  padding: 18px 0;
  background-color: ${({ theme }) => theme.colorWhite};
`;

export const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Copyright = styled.p`
  margin: 0;
  padding: 8px 12px;
  background-color: #fff6d9;
`;
