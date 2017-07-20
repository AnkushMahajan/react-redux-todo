import { FETCH_POSTS, GET_POST, DELETE_POST } from '../actions'
import _ from 'lodash'

const Posts = (state = {}, action) => {

    switch(action.type) {
        case FETCH_POSTS :
            return _.mapKeys(action.payload.data, 'id')
        case GET_POST :
            const post = action.payload.data
            return { ...state, [post.id]: post}
        case DELETE_POST :
            return _.omit(state, action.payload)
        default :
            return state
    }
}

export default Posts;