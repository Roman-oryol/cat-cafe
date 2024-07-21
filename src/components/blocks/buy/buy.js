import { useState } from "react";
import {
  Section,
  Wrapper,
  Title,
  FormItem,
  Price,
  RadioButtonList,
  RadioLabelForTime,
  RadioLabelForType,
  AccordionText,
} from "./style";
import { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import Form from "/src/components/styled/form/form";
import Label from "/src/components/styled/label/label";
import Button from "/src/components/ui/button/button";
import Li from "/src/components/styled/li/li";
import RadioButton from "/src/components/ui/radio-button/radio-button";
import Accordion from "/src/components/ui/accordion/accordion";

function Buy({
  // деструктурируем buyOptions
  buyOptions: { durationOptions = [], ticketOptions = [] },
}) {
  const canBuy = durationOptions.length && ticketOptions.length;
  const [duration, setDuration] = useState(durationOptions[0]);
  const [selectType, setSelectType] = useState(ticketOptions[0].id);

  const type = ticketOptions.find((option) => option.id === selectType);
  const price = duration * (type ? type.price : 0);

  const accordionContent =
    canBuy &&
    ticketOptions.map((option) => ({
      id: option.id,
      title: (
        <RadioButton
          labelComponent={RadioLabelForType}
          selectValue={selectType}
          value={option.id}
          text={option.title}
          onChange={(evt) => {
            setSelectType(Number(evt.target.value));
          }}
        />
      ),
      description: option.description,
    }));

  const handleBuy = () => {
    alert(
      `Спасибо за покупку.
              Вы приобрели билет класса: ${type.title}.
              Продолжительность посещения(часов): ${duration}.
              Цена билета: ${price} руб.`
    );
  };

  return (
    <Section>
      <Wrapper>
        <Title size={TitleSize.BIG} level={TitleLevel.H2}>
          Купить билет
        </Title>
        {canBuy ? (
          <Form $width={540}>
            <FormItem>
              <Label $margin={12}>Продолжительность (часов)</Label>
              <RadioButtonList>
                {durationOptions.map((option) => (
                  <Li key={option}>
                    <RadioButton
                      labelComponent={RadioLabelForTime}
                      value={option}
                      text={option}
                      selectValue={duration}
                      onChange={(evt) => {
                        setDuration(Number(evt.target.value));
                      }}
                    />
                  </Li>
                ))}
              </RadioButtonList>
            </FormItem>
            <FormItem>
              <Label margin={12}>Тип билета</Label>
              <Accordion
                textComponent={AccordionText}
                content={accordionContent}
                isHtml
              />
            </FormItem>
            <Label $small margin={8}>
              Цена
            </Label>
            <Price>{price} руб.</Price>
            <Button onClick={handleBuy} minWidth={460}>
              Купить билет
            </Button>
          </Form>
        ) : (
          <p>Покупка билетов временно недоступна</p>
        )}
      </Wrapper>
    </Section>
  );
}

export default Buy;
