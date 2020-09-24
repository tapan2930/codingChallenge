import React from "react";
import "./sectionsignup.scss";

import Card from "../card/card";

const SectionSignUp = () => {
  let Metal = {
    title: "Metal",
    percent: "5.3%",
    cashback: "5%",
    spots: 2223,
    totalspots: 2500,
    includes: [
      "Charcoal Black Metal Card",
      ".15%1 Bonus Rate Checking Account",
      "5% Cash back on brands you love",
      "Free Cash Withdrawals",
    ],
    membership: "$33.3",
  };

  let Premiun = {
    title: "Premium",
    percent: "5.3%",
    cashback: "5%",
    spots: 1223,
    totalspots: 2500,
    includes: [
      "Charcoal Black Metal Card",
      ".15%1 Bonus Rate Checking Account",
      "5% Cash back on brands you love",
      "Free Cash Withdrawals",
    ],
    membership: "$33.3",
  };

  let Gold = {
    title: "Gold",
    percent: "5.3%",
    cashback: "5%",
    spots: 1823,
    totalspots: 2500,
    includes: [
      "Charcoal Black Metal Card",
      ".15%1 Bonus Rate Checking Account",
      "5% Cash back on brands you love",
      "Free Cash Withdrawals",
    ],
    membership: "$33.3",
  };

  return (
    <div className="sectionsignup">
      <div>
        <h1>Sign up early to save more</h1>
      </div>
      <div>
        <p>
          Depending on the level of your checking account, you’ll earn between
          1.15%3 to 2.15%1 bonus rate.
        </p>
      </div>
      <div className="cardgrid">
        <div>
          <Card {...Metal} />
        </div>
        <div>
          <Card {...Gold} />
        </div>
        <div>
          <Card  {...Premiun}/>
        </div>
      </div>
    </div>
  );
};

export default SectionSignUp;
