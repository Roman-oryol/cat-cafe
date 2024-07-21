import StarCard from "/src/components/ui/star-card/star-card";
import Button from "/src/components/ui/button/button";
import { AppRoute } from "/src/const";

import {
  StarsSection,
  StarsContainer,
  StarsTitle,
  List,
  ListItem,
} from "./style";

function StarsList({ stars, level }) {
  return (
    <StarsSection>
      {stars?.length ? (
        <StarsContainer>
          <StarsTitle level={level}>Наши звёзды</StarsTitle>
          <List>
            {stars.map((star) => (
              <ListItem key={star.id}>
                <StarCard {...star} />
              </ListItem>
            ))}
          </List>
          <Button minWidth={353} link={AppRoute.BUY}>
            Купить билет
          </Button>
        </StarsContainer>
      ) : null}
    </StarsSection>
  );
}

export default StarsList;
