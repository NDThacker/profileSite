import PropTypes from "prop-types";
import "../styles/timelineitem.scss";
export default function TimeLineItem({ title, description, imgUrl, justify }) {
  TimeLineItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    justify: PropTypes.string.isRequired,
  };
  const styles = {
    div: {
      display: "flex",
      flexDirection: "column",
      alignItems: justify == "right" ? "flex-end" : "flex-start",
    },
  };
  

  return (
    <div id="artifact" style={styles.div}>
      <h4>{title}</h4>
      <p>{description}</p>
      <img src={imgUrl} alt="artifact image" />
    </div>
  );
}

