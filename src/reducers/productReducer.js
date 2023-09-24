export function productReducer(state, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload]
        }
        case "REMOVE_FROM_CART": {
            return {
                ...state,
                cart: state.cart.filter(({_id}) => _id !== action.payload)
            }
        }
        case "EMPTY_CART_ITEMS": {
            return {
                ...state,
                cart: []
            }
        }
        default:
            return state;
    };
};