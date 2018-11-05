import * as ActionTypes from './../constants/ActionTypes'
import uuid from 'uuid'

const createCard = (value) => {
    return {
        type: ActionTypes.CREATE_CARD,
        payload: {
            id: uuid.v4(),
            edit: false, 
            text: value
        }
    }
}
export default {
    createCard
}