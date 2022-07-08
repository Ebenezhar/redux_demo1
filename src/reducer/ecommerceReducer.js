let products = [
    {
        id: 1,
        name: "product1",
        price: 10,
    },
    {
        id: 2,
        name: "product2",
        price: 20,
    },
    {
        id: 3,
        name: "product3",
        price: 30,
    },
    {
        id: 4,
        name: "product4",
        price: 40,
    },
    {
        id: 5,
        name: "product5",
        price: 50,
    },
    {
        id: 6,
        name: "product6",
        price: 60,
    },
]
export const ecommerceReducer = (state = { products, cart: [], total: 0 }, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload],
                total: state.total + action.payload.price,
            };
        case 'REMOVE_FROM_CART':
            const itemIndex = state.cart.findIndex(item => item.id === action.payload.id);
            state.cart.splice(itemIndex, 1);
            return {
                ...state,
                cart: [...state.cart],
                total: state.total - action.payload.price,
            };
        case 'RESET_CART':
            state.cart = [];
            state.total = 0;
            return {
                ...state,
                cart: [...state.cart],
                total: state.total,
            };
        default: return state;
    }

}