import React from "react";
import Contactitem from "./Contactitem";
import SearchBox from "./SearchBox";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contactList = useSelector((state) => state.contactList);
  return (
    <div>
      <SearchBox />
      {contactList.map((item) => (
        <Contactitem item={item} />
      ))}
    </div>
  );
};

export default ContactList;
