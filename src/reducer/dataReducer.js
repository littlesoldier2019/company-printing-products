export const dataReducer = (state, action) => {
    switch (action.type) {
        case 'GET_BLOG':
            return [...action.blog];
        case 'GET_CONTACT':
            return [...action.contact];    
        default:
            return state;
    }
};