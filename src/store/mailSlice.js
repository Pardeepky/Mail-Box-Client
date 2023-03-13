import { createSlice } from "@reduxjs/toolkit";

const initialval = { sendMail: false };

const mailSlice = createSlice({
  name: "mail",
  initialState: initialval,
  reducers: {
    setSentData(state) {
      state.sendMail = !state.sendMail;
      console.log("success");
    },
  },
});
export const mailSliceAction = mailSlice.actions;
export default mailSlice.reducer;