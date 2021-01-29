import {COUNTER_ACTION} from "../types";
export const counterLikesReducer = (state={count: 5}, action) => {
    switch(action.type) {
        case COUNTER_ACTION:
            return {
                ...state,
                count: +state.count + 1
            }
    }
    return state
}