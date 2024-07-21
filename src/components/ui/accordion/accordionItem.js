import { useState, useRef, useEffect } from "react";
import { TitleWrapper, Button, Arrow, Wrapper, ContentWrapper } from "./style";

function AccordeonItem({
  titleComponent,
  textComponent,
  isHtml,
  title,
  open,
  text,
  onClick,
}) {
  const [height, setHeight] = useState(0);
  const TitleComponent = titleComponent;
  const TextComponent = textComponent;
  const contentWrapper = useRef(null);

  useEffect(() => {
    setHeight(contentWrapper.current.offsetHeight);
  }, [text]);

  return (
    <>
      <TitleWrapper open={open}>
        {TitleComponent ? <TitleComponent>{title}</TitleComponent> : title}
        <Button
          type="button"
          onClick={onClick}
          title={`${open ? "Скрыть" : "Раскрыть"} описание`}
        >
          <Arrow open={open} />
        </Button>
      </TitleWrapper>
      <Wrapper height={height} open={open}>
        <ContentWrapper ref={contentWrapper}>
          {" "}
          {isHtml ? (
            <TextComponent dangerouslySetInnerHTML={{ __html: text }} />
          ) : (
            <TextComponent>{text}</TextComponent>
          )}
        </ContentWrapper>
      </Wrapper>
    </>
  );
}

export default AccordeonItem;
