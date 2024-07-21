import { StyledTitle } from "./style";

export const TitleSize = {
  BIG: "big",
  SMALL: "small",
  DEFAULT: "",
};

export const TitleLevel = {
  H1: "1",
  H2: "2",
  H3: "3",
  H4: "4",
  H5: "5",
  H6: "6",
};

function Title({ children, size, level, className }) {
  return (
    <StyledTitle as={`h${level}`} className={className} size={size}>
      {children}
    </StyledTitle>
  );
}

export default Title;
