import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  name: "",
};

export const filtersSlice = createSlice({
  // Ім'я слайсу
  name: "contacts", // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE, // Об'єкт редюсерів
  reducers: {
    setFilter(state, action) {
      state.name = action.payload;
    },
  },
});

// Генератори екшенів
export const { setFilter } = filtersSlice.actions;

// Редюсер слайсу
export const filtersReducer = filtersSlice.reducer;

// export const setFilter = (state = initialState, action) => {
//   if (action.type === "contacts/SET_FILTER") {
//     return {
//       ...state,
//       name: action.payload,
//     };
//   } else {
//     return state;
//   }
// };
