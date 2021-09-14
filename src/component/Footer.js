import React from "react";

function Footer ({name, pharagraph, image, imageText}) {
    if (name && pharagraph) {
        return (
            <section>
                <h2>
                    {name}
                </h2>
                {
                    pharagraph.map(tekst => <p key={tekst.id}>{tekst.id}{tekst}</p>)
                }
            </section>
        )
    }
    else {
        return (
            <section>
                <img src={image} alt={imageText}/>
            </section>
        )
    }
}

export default Footer