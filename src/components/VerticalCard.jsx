import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
function VerticalCard(props) {
  // const [clickedCardItems, setClickedCardItems] = useState(null);

  return (
    <div className="vertical-card" style={{ marginTop: props.marginTop }}>
      <img className="card-img" src={props.img} alt="anything"></img>
      <div className="card-text">
        <h1>{props.title}</h1>
        <p>{props.body}</p>
        {/* <div
          className="more-items contact-button"
          onClick={(event) => {
            var parent = event.target.parentNode;
            if (!parent.classList.contains("card-text")) return;
            parent.querySelector(".items").style.opacity = "1";
            parent.querySelector(".items").style.filter = "blur(0)";
          }}
        >
          More items
          <span>
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        </div> */}
        {/* <ul className="items" tabindex="0" contentEditable={false}>
          <li>This is a item</li>
          <li>This is a item</li>
          <li>This is a item</li>
          <li>This is a item</li>
          <li>This is a item</li>
        </ul> */}
      </div>
    </div>
  );
}
export default VerticalCard;
