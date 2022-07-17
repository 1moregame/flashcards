import { createSlice } from "@reduxjs/toolkit";
import { addQuizIdToTopic } from "../topics/topicsSlice";

export const createQuiz = ({ id, name, topicId, cardIds }) => {
  return (dispatch) => {
    dispatch(addQuiz({ id, name, topicId, cardIds }));
    dispatch(addQuizIdToTopic({ quizId: id, topicId }));
  };
};

const initialState = {
  quizzes: {}
};
const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    addQuiz(state, action) {
      state.quizzes[action.payload.id] = action.payload;
    }
  }
});

export const selectQuizzes = (state) => state.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
