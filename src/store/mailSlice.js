import { createSlice } from "@reduxjs/toolkit";

const initialval = { sendMail: false, mailList: [], count: 0 };

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
    },
    updateCount: (state, action) => {
      const mails = action.payload;
      const unreadMsgs = mails.filter((item) => item.read === false);
      state.count = unreadMsgs.length;
    }
  },
});
export const mailSliceAction = mailSlice.actions;
export default mailSlice.reducer;