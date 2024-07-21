import { StyledButton } from "./style";

function Button({ children, minWidth, link, className, onClick }) {
  return (
    <StyledButton
      className={className}
      $minWidth={minWidth}
      {...(link ? { to: link } : { type: "button", onClick, as: "button" })}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
