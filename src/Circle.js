import "./Circle.css";
const Circle = (props) => {
  return (
    <div
      className={props.class}
      onClick={props.click}
      style={{ backgroundColor: props.bgColor, pointerEvents: props.clickable }}
    >
      <div></div>
    </div>
  );
};

export default Circle;
