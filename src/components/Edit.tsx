import { useParams } from "react-router-dom";

function Edit() {
  const { itemID } = useParams();
  return <h3>{itemID}</h3>;
}

export default Edit;
