import { createSlice } from "@reduxjs/toolkit";
import apiRequestById from "../redux/contactsOps";

const INITIAL_STATE = {
  items: [],
  loading: false,
  error: null,
};

export const contactsSlice = createSlice({
  // Ім'я слайсу
  name: "contacts", // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE, // Об'єкт редюсерів
  // Додаємо обробку зовнішніх екшенів
  extraReducers: (builder) => {
    builder
      .addCase(apiRequestById.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(apiRequestById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(apiRequestById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
