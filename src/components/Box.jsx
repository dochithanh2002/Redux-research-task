import React from "react";

export default function Box(props) {
    const { name, price, image } = props;
    var src = "http://localhost/test2/pub/media/catalog/product";
    return (
        <React.Fragment>
            <div className="component">
                <img
                    src={src + image}
                    alt="Image"
                    width="200px"
                    height="200px"
                ></img>
                <p>{name}</p>
                <p>${parseInt(price)}</p>
            </div>
        </React.Fragment>
    );
}
