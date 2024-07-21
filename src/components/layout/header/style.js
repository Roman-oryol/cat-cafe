import styled from "styled-components";
import Container from "/src/components/ui/container/container";

export const StyledHeader = styled.header`
  display: grid;
  min-height: 80px;
  padding: 10px 0;
  background-color: ${({ theme }) => theme.colorWhite};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.04), 0 0 2px rgba(0, 0, 0, 0.06),
    0 0 1px rgba(0, 0, 0, 0.04);
`;

export const HeaderInner = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
