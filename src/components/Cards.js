import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

// Material UI Imports
import Divider from "@mui/material/Divider";

import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import MultilineChartIcon from "@mui/icons-material/MultilineChart";
import MoneyIcon from "@mui/icons-material/Money";

const cardsMainData = [
  {
    id: uuidv4(),
    field1: "AMZN",
    field2: "200",
    field3: "-0.25%",
    field4: "Low Risk",
    field5: true,
  },
  {
    id: uuidv4(),
    field1: "AMZN",
    field2: "200",
    field3: "-0.25%",
    field4: "Low Risk",
    field5: false,
  },
  {
    id: uuidv4(),
    field1: "AMZN",
    field2: "200",
    field3: "-0.25%",
    field4: "Low Risk",
    field5: false,
  },
  {
    id: uuidv4(),
    field1: "AMZN",
    field2: "200",
    field3: "-0.25%",
    field4: "Low Risk",
    field5: false,
  },
  {
    id: uuidv4(),
    field1: "AMZN",
    field2: "200",
    field3: "-0.25%",
    field4: "Low Risk",
    field5: false,
  },
  {
    id: uuidv4(),
    field1: "AMZN",
    field2: "200",
    field3: "-0.25%",
    field4: "Low Risk",
    field5: false,
  },
  {
    id: uuidv4(),
    field1: "AMZN",
    field2: "200",
    field3: "-0.25%",
    field4: "Low Risk",
    field5: false,
  },
  {
    id: uuidv4(),
    field1: "AMZN",
    field2: "200",
    field3: "-0.25%",
    field4: "Low Risk",
    field5: false,
  },
  {
    id: uuidv4(),
    field1: "AMZN",
    field2: "200",
    field3: "-0.25%",
    field4: "Low Risk",
    field5: false,
  },
  {
    id: uuidv4(),
    field1: "AMZN",
    field2: "200",
    field3: "-0.25%",
    field4: "Low Risk",
    field5: false,
  },
  {
    id: uuidv4(),
    field1: "AMZN",
    field2: "200",
    field3: "-0.25%",
    field4: "Low Risk",
    field5: false,
  },
  {
    id: uuidv4(),
    field1: "AMZN",
    field2: "200",
    field3: "-0.25%",
    field4: "Low Risk",
    field5: false,
  },
];

export default function Cards() {
  const [cardsData, setCardsData] = useState(cardsMainData);

  const cardJsx = cardsData.map((card) => {
    return (
      <div
        key={card.id}
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          backgroundColor: "#1f1f1f",
          color: "white",
          marginBottom: "20px",
          borderRadius: "10px",
          height: "45px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <MonetizationOnIcon style={{ marginRight: "20px" }} />
          <p>{card.field1}</p>
        </div>

        <Divider style={{ width: "1px", backgroundColor: "gray" }} />

        <div style={{ display: "flex", alignItems: "center" }}>
          <InsertChartIcon style={{ marginRight: "20px" }} />
          <p>{card.field2}</p>
        </div>

        <Divider style={{ width: "1px", backgroundColor: "gray" }} />

        <div style={{ display: "flex", alignItems: "center" }}>
          <MultilineChartIcon style={{ marginRight: "20px" }} />
          <p style={{ color: card.field5 == true ? "green" : "red" }}>
            {card.field3}
          </p>
        </div>

        <Divider style={{ width: "1px", backgroundColor: "gray" }} />

        <div style={{ display: "flex", alignItems: "center" }}>
          <MoneyIcon style={{ marginRight: "20px" }} />
          <p>{card.field4}</p>
        </div>
      </div>
    );
  });
  return (
    <div
      style={{
        backgroundColor: "black",
        padding: "10px",
        height: `calc(100vh - 64px`,
        // overflowY: "scroll",
      }}
    >
      {/* Card */}
      {/* <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          backgroundColor: "gray",
          color: "white",
          marginBottom: "20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <MonetizationOnIcon />
          <p>AMZN</p>
        </div>

        <Divider />

        <div style={{ display: "flex", alignItems: "center" }}>
          <InsertChartIcon />
          <p>200</p>
        </div>

        <Divider />

        <div style={{ display: "flex", alignItems: "center" }}>
          <MultilineChartIcon />
          <p>-0.25%</p>
        </div>

        <Divider />

        <div style={{ display: "flex", alignItems: "center" }}>
          <MoneyIcon />
          <p>Low Risk%</p>
        </div>
      </div> */}
      {cardJsx}
      {/*== Card ==*/}
    </div>
  );
}
