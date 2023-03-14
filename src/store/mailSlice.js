import { createSlice } from "@reduxjs/toolkit";

const initialval = { sendMail: false, mailList: [] };

const mailSlice = createSlice({
  name: "mail",
  initialState: initialval,
  reducers: {
    setSentData: (state) => {
      state.sendMail = !state.sendMail;
      console.log("success");
    },
    updateMailList: (state, action) => {
      state.mailList = action.payload;
    }
  },
});
export const mailSliceAction = mailSlice.actions;
export default mailSlice.reducer;