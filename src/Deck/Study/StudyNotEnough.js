import React from "react"


function StudyNotEnough({cardCountNum}){ //use cardCountNum as prop
return(
    <div>
    <h3>Not Enough Cards</h3>
    <p>You need at least 3 cards in your deck, your deck has {cardCountNum} cards.</p>
    </div>
    )
}


export default StudyNotEnough;