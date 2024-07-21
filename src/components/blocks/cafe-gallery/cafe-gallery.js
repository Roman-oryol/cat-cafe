import { Section, Wrapper, GalleryTitle } from "./style";
import { TitleSize } from "/src/components/ui/title/title";
import Gallery from "../../ui/gallery/gallery";

function CafeGallery({ slides }) {
  return slides && slides.length ? (
    <Section>
      <Wrapper>
        <GalleryTitle level={2} size={TitleSize.BIG}>
          Галерея нашего кафе
        </GalleryTitle>
        <Gallery slides={slides} />
      </Wrapper>
    </Section>
  ) : null;
}

export default CafeGallery;
