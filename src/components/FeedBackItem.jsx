import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
import { useContext } from "react";
import Card from "./shared/Card";
import FeedbackContext from "../context/FeedbackContext";

function FeedBackItem({ item }) {
  const { deleteFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedBackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedBackItem;
