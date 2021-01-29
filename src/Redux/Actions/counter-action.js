import {COUNTER_ACTION} from "../types";

const countLikes = (id) => {
    return {
        type: COUNTER_ACTION,
        payload: id
    }
}
export default countLikes;

