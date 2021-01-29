import {AUTHORS_ADD_NEW_POST_AUTHORS} from "../types";

const  initialState = {
    authors: [
        {   id: 10,
            name: "Anakin skywalker",
            photo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg",
            nickname: "@dart_vader",
            content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
            image: "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",
            date: '21.01.2021'
        },
        {
            id: 20,
            name: "Yoda",
            photo: "https://upload.wikimedia.org/wikipedia/hu/thumb/4/45/Yoda.jpg/250px-Yoda.jpg",
            nickname: "@master_yoda",
            content: "Trying is the first step of learning",
            image: "https://th.bing.com/th/id/OIP.uQEGqKR6Rn2e0PAR8rHZsgHaEL?w=308&h=180&c=7&o=5&dpr=1.25&pid=1.7",
            date: '22.01.2021'
        }]
}
export default function appReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        case AUTHORS_ADD_NEW_POST_AUTHORS: {
            // We need to return a new state object
            return {
                ...state,
                authors: [...state.authors, action.payload]
            }
        }
        default:
            return state
    }
    }



