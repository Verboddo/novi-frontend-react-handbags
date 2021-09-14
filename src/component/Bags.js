import React from "react";

function Bags ({bagLabel, image, imageText, bagName, bagPrice}) {
    return (
        <article>
                  <span>
                      {bagLabel}
                  </span>
            <img src={image} alt={imageText}/>
            <p>
                {bagName}
            </p>
            <h4>
                {bagPrice}
            </h4>
        </article>
    )
}

export default Bags