import { createSlice, createAction } from "@reduxjs/toolkit";

export const fetchSnippetsCreator = createAction("FETCH_SNIPPETS");
export const fetchSnippetsTypeName = fetchSnippetsCreator.type;

const landingSlice = createSlice({
  name: "landing",
  initialState: {
    snippets: [],
    savedSnippets: [],
  },
  reducers: {
    storeSnippets: (state, action) => {
      return { ...state, snippets: action.payload };
    },
    saveSnippet: (state, action) => {
      if (!state.savedSnippets.includes(action.payload.id)) {
        return {
          ...state,
          savedSnippets: [...state.savedSnippets, action.payload.id],
        };
      } else {
        return state;
      }
    },
  },
});

export const landingReducer = landingSlice.reducer;
export const landingActions = landingSlice.actions;
