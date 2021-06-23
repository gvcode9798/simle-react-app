import { useState } from "react";

const Filter = ({ onItemSelect, selectedItem }) => {
  const bookType = [
    { _id: 1, type: "Fiction" },
    { _id: 2, type: "Non-Fiction" },
    { _id: 3, type: "Self-Help" },
    { _id: 4, type: "Academic" },
  ];
  const typeProperty = "type";
  const _idProperty = "_id";
  const [isOpen, setIsOpen] = useState(false);
  const menuClass = !isOpen ? "dropdown-menu" : "dropdown-menu-open";
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return <div></div>;
};

export default Filter;
