import styled from "styled-components";

const Container = styled.div.attrs((props) => ({
  children: props.children,
  class: props.className,
}))`
  width: 1100px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.indent};
`;

export default Container;
