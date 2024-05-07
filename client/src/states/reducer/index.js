import { createReducer } from "@reduxjs/toolkit";
import { act } from "react";
const initialState = {
  firstname: "Twinkal",
  secondname: "Tejas",
  location: "Saydi,Torda",
  maindate: "02/042004",
  dates: ["01/01/2004", "02/01/2004", "03/01/2004"],
  eventname: ["Ras Garba","mahendi","Sagai","Varghodo"],
  invitedBy: "Mr. Jivabhai Ninama , Mrs. Ramilaben Ninama",
  photos: [],
  map_url: "https://maps.app.goo.gl/15yz6iBDC87j14Ni7",
};
export const userReducer = createReducer({}, (builder) => {
  builder
    .addCase("signupsuccess", (state, action) => {
      console.log("success in sign Up");
      state.auth = true;
      state.message = action.payload;
    })
    .addCase("signupfail", (state, action) => {
      console.log("failed in sign Up");
      state.auth = false;
      state.message = action.payload;
    })
    .addCase("changeTemplate", (state, action) => {
      state.title = action.payload;
    })
    .addCase("ForgetPassword", (state, action) => {
      return action.payload;
    })
    .addCase("formdata_success", (state, action) => {
      
      const data = action.payload;
      state.firstname = data.firstname;
      state.secondname = data.secondname;
      state.location = data.location;
      state.maindate = data.maindate;
      state.dates = data.dates;
      state.eventname = data.eventname;
      state.invitedBy = data.invitedBy;
      state.photos = data.photos;
      state.map_url = data.map_url;
      // console.log(state.firstname)
      // return action.payload;
    });
});
