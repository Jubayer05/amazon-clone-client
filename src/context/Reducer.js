export const initialState = {
  cart: [],
  user: null,
};

export const getCartTotal = (cart) => {
  return cart?.reduce((amount, item) => item.discountPrice + amount, 0);
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.newItem],
      };

    case 'REMOVE_FROM_CART':
      const index = state.cart.findIndex(
        (cartItem) => cartItem.key === action.key
      );

      let newCart = [...state.cart];

      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.key}) as it's not in cart`
        );
      }

      return {
        ...state,
        cart: newCart,
      };

    case 'PLACE_ORDER':
      return { cart: [] };

    case 'SET_USER':
      sessionStorage.setItem('user', JSON.stringify(action.user));
      return {
        ...state,
        user: action.user,
      };

    case 'LOGOUT':
      sessionStorage.clear();
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};
