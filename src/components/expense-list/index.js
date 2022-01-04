import React from "react";
import Card from "./card";
import "./expense-list.css";
const ExpenseList = () => {
  const list = [
    {
      title: "made a purchase",
      logo: "dfdfdf",
      createdAt: Date.now(),
      amount: 1224,
    },
    {
        title: "made a purchase",
        logo: "dfdfdf",
        createdAt: Date.now(),
        amount: 1224,
      },
  ];
  
  return (
    <div>{list.length ? list.map((item, i) => <Card>hello</Card>) : null}</div>
  );
};

export default ExpenseList;
