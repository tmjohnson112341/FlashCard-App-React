import React from "react";
import { Link } from "react-router-dom";

function StudyPage({deckId, name, littleChild}) { //use props
    return( //bread crumb for study 
        <main className="container study-page">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/">
                            <span className="oi oi-home" />Home
                        </Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link to={`/decks/${deckId}`}>{name}
                        </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Study
                    </li>
                </ol>
            </nav>
            <h1>Study: {name}</h1>
            {littleChild}
        </main>
    )
}
export default StudyPage;