import styled from "styled-components";
import StarIcon from "/src/components/ui/star-icon/star-icon";
import Title from "/src/components/ui/title/title";

export const Figure = styled.figure`
  position: relative;
  margin: 0;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
`;

export const StyledStarIcon = styled(StarIcon)`
  position: absolute;
  top: 0;
  left: 0;
`;

export const CardTitle = styled(Title)`
  margin-bottom: 12px;
`;

export const CardText = styled.p`
  margin: 0;
`;
