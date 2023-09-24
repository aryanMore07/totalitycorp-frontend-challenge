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
                cart: state.cart.filter(({ _id }) => _id !== action.payload)
            }
        }
        case "EMPTY_CART_ITEMS": {
            return {
                ...state,
                cart: []
            }
        }
        case 'CLEAR_FILTERS':
            return {
                ...state,
                searchInput: '',
                priceInput: '',
                ratingInput: '',
                checkBoxInput: [],
                sortInput: '',
            };
        case 'PRICE_INPUT':
            return {
                ...state, priceInput: action.payload
            }
        case 'CHECKBOX_INPUT':
            return {
                ...state, checkBoxInput: state.checkBoxInput.includes(action.payload) ? state.checkBoxInput.filter((category) => category !== action.payload) : [...state.checkBoxInput, action.payload]
            }
        case 'RATING_INPUT':
            return {
                ...state, ratingInput: action.payload
            }
        default:
            return state;
    };
};