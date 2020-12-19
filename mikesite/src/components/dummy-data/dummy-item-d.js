import React from "react";

function ItemDescription(props) {
    console.log("Props from ItemDescription: ", props);
    return (
        <div>
            <p className="item-description">{props.item.description}</p>
        </div>
    );
}

export default ItemDescription;
