import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic(state, action) {
      state.topics[action.payload.id] = { ...action.payload, quizIds: [] };
    },
    addQuizIdToTopic(state, action) {
      console.log(`addQuizzID: ${action.payload.quizId}`);
      state.topics[action.payload.topicId].quizIds.push(action.payload.quizId);
    }
  },
  extraReducers: {}
});

export const selectTopics = (state) => {
  return state.topics;
};
export const { addTopic, addQuizIdToTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
