import CafeGallery from "/src/components/blocks/cafe-gallery/cafe-gallery";
import Buy from "/src/components/blocks/buy/buy";

function BuyPage(props) {
  return (
    <>
      <CafeGallery slides={props.slides} />
      <Buy buyOptions={props.buyOptions} />
    </>
  );
}

export default BuyPage;
