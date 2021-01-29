import {AUTHORS_ADD_NEW_POST_AUTHORS} from "../types";

export function addNewAuthor(newAuthorPost){
    return {
        type: AUTHORS_ADD_NEW_POST_AUTHORS,
        payload: newAuthorPost
    }
}