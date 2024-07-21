import { useState } from "react";
import Ul from "/src/components/ui/elements/ul";
import AccordeonItem from "./accordionItem";
import { Li } from "./style";

function Accordion({
  titleComponent, // компонент для отрисовки заголовка
  textComponent, // компонент для отрисовки текста
  content, // массив, содержащий контент аккордеона
  isHtml, // есть ли HTML в тексте}) {
}) {
  const [openIndexItem, setOpenIndexItem] = useState(null);
  return (
    <Ul>
      {content.map((item, index) => (
        <Li>
          <AccordeonItem
            titleComponent={titleComponent}
            textComponent={textComponent}
            isHtml={isHtml}
            title={item.title}
            open={index === openIndexItem}
            text={item.description}
            onClick={() => {
              setOpenIndexItem(index !== openIndexItem ? index : null);
            }}
          />
        </Li>
      ))}
    </Ul>
  );
}

export default Accordion;
