import Title, { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import { Figure, Image, StyledStarIcon, CardTitle, CardText } from "./style";

function StarCard({ name, about, image, feature }) {
  return (
    <article className="star-card">
      <Figure>
        <Image
          src={image}
          className="star-card__image"
          width={313}
          height={313}
          alt="Изображение кота"
        />
        <StyledStarIcon feature={feature} />
      </Figure>
      <CardTitle size={TitleSize.SMALL} level={TitleLevel.H3}>
        {name}
      </CardTitle>
      <CardText
        className="star-card__text"
        dangerouslySetInnerHTML={{ __html: about }}
      ></CardText>
    </article>
  );
}

export default StarCard;
