import { createSlice } from "@reduxjs/toolkit";


interface initialStateType {
  cartItems: any[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
}

const storedItems = localStorage.getItem("cartItems");

const initialState: initialStateType = {
  cartItems: storedItems ? JSON.parse(storedItems) : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempItem);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.cartItems = nextCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
        state.cartItems = nextCartItems;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotals : (state , action) => {
      let {total , quantity} = state.cartItems.reduce((cartTotal, cartItem)=>{
        const {price , cartQuantity} = cartItem;
        const itemTotal = price * cartQuantity;
        cartTotal.total += itemTotal;
        cartTotal.quantity + = cartQuantity;

        return cartTotal
      }, {
        total : 0,
        quantity : 0,
      }
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    }
  },
});

export const { addToCart, removeFromCart, decreaseCart } = cartSlice.actions;

export default cartSlice.reducer;
