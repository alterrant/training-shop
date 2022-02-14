import Advantages from "../../components/advantage/Advantages";
import Banners from "../../components/banners/Banners";
import Subscribe from "../../components/subscribe/Subscribe";
import LatestFromBlog from "../../components/latestFromBlog/LatestFromBlog";
import Benefits from "../../components/benefits/Benefits";
import ClothesMain from "../../components/clothes/ClothesMain";
import Partition from "../../components/common/Partition";

const Main = () => {

  return (
      <>
        <Banners/>
        <Advantages/>
        <Partition/>
        <ClothesMain tittle={'WOMEN’S'} productType={'women'}/>
        <ClothesMain tittle={'MEN’S'} productType={'men'}/>
        <Benefits/>
        <Subscribe/>
        <LatestFromBlog/>
      </>
  )
}

export default Main;