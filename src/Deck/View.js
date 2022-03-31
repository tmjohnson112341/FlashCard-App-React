import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { deleteCard, deleteDeck, readDeck } from "../utils/api"
import CardList from "../Card/List";

function DeckView() {
    const history = useHistory();

    const { deckId } = useParams();

    const [deck, setDeck] = useState({ cards: [] });
    useEffect(loadDeck, [deckId]);

    function loadDeck(){
        readDeck(deckId).then(setDeck);
    }
    function handleDelete(){
        const confirmed = window.confirm( //make sure to use window.confirm for delete
            "Delete this deck?\n\nYou will not be able to recover it."
        );
        if(confirmed){
            deleteDeck(deck.id).then(() => history.push("/decks"))
        }
    };
    function deleteCardHandler(cardId){ //delete handler for card
        const confirmed = window.confirm(
            "Delete this card?\n\nYou will not be able to recover it."
        );
        if(confirmed){
            deleteCard(cardId).then(loadDeck)
        }
    };
    return ( //make sure to make breadcrumb. also links and buttons
        <main className="container deck-view">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/">
                            <span className="oi oi-home" />
                            Home
                        </Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link to={`/decks/${deckId}`}>
                            {deck.name}
                        </Link>
                    </li>
                </ol>
            </nav>
            <div className="media mb-2">
                <div className="media-body">
                    <h5 className="mt-0">{deck.name}</h5>
                    {deck.description}
                </div>
            </div>
            <Link
                to={`/decks/${deck.id}/edit`}
                className="btn btn-secondary mr-2"
                title="Edit deck"
            >
                <span className="oi oi-pencil" /> Edit
            </Link>
            <Link
                to={`/decks/${deck.id}/study`}
                className="btn btn-primary mr-2"
                title="Study deck"
            >
                <span className="oi oi-book" /> Study
            </Link>
            <Link
                to={`/decks/${deck.id}/cards/new`}
                className="btn btn-primary"
                title="Add Card"
            >
                <span className="oi oi-plus" /> Add Cards
            </Link>
            <button className="btn btn-danger float-right" title="Delete deck">
                <span className="oi oi-trash"  onClick={handleDelete}/> 
            </button>
            <CardList deck={deck} onCardDelete={deleteCardHandler}/>
        </main>
    )
}
export default DeckView;