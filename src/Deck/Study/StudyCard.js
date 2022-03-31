import React, { useEffect, useState } from "react";


function StudyCard({ card = {}, title, littleChild }) { //insert props

    const viewNext = { front: "back", back: "front"} //set back and front

    const [view, setView] = useState('front');
    const [flipped, setFlipped] = useState(false);
    function flipHandler() {
        setView((prevState) => viewNext[prevState]);
        setFlipped(true)
    }

    
    useEffect(() => {  //create useEffect for back and front
        setView('front')
        setFlipped(false)
    }, [card]);


    return(
        <div className={`card ${view} study-card`}>
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{card[view]}</p>
                <button type="button" className="btn btn-secondary mr-2" onClick={flipHandler}>
                    Flip
                </button>
                {flipped && littleChild}
            </div>
        </div>
    )
}
export default StudyCard;