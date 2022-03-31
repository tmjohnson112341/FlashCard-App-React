import React, { useState } from "react";

function DeckForm({ onSubmit, onCancel, initialState = { name: "", description: "" },}) { //pass in props
    const [deck, setDeck] = useState(initialState);

    function changeHandler({ target: { name, value }}) { //create the change handler
        setDeck((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }
    function submitHandler(event){  //create the Submit handler
        event.preventDefault();
        event.stopPropagation();
        onSubmit(deck);
    }

    return (
        <>
            <h3>Create Deck</h3>
            <form onSubmit={submitHandler} className="deck-edit">
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={deck.name}
                            required={true}
                            className="form-group"
                            placeholder="Deck Name"
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <textarea 
                            id="description"
                            name="description"
                            className="form-group"
                            rows="4"
                            required={true}
                            placeholder="Brief description of the deck"
                            value={deck.description}
                            onChange={changeHandler}
                        />
                    </div>
                    <button type="button" className="btn btn-secondary mr-2" onCancel={onCancel}>Cancel</button>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </fieldset>
            </form>
        </>
    )

}
export default DeckForm;