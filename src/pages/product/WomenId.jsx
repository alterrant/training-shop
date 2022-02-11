import Tittle from "../../components/tittle/Tittle";
import {useParams} from "react-router-dom";

const WomenId = () => {

  const {id} = useParams();
  return (
      <div>
        <Tittle tittle={id}/>
        WomenId
      </div>
  )
}

export default WomenId;