import React from "react";
import { useSelector } from "react-redux";
import Model1 from "../Models/F1/model1";
const Preview = ({ data }) => {
  const firstname = useSelector((state) => state.user.firstname);
  const secondname = useSelector((state) => state.user.secondname);
  const location = useSelector((state) => state.user.location);
  const maindate = useSelector((state) => state.user.maindate);
  const dates = useSelector((state) => state.user.dates);
  const eventname = useSelector((state) => state.user.eventname);
  const invitedBy = useSelector((state) => state.user.invitedBy);
  const photos = useSelector((state) => state.user.photos);
  const map_url = useSelector((state) => state.user.map_url);
  return (
    <div>
      <Model1 />
    </div>
  );
};

export default Preview;
