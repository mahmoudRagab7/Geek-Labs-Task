import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

// Material UI Imports
import Divider from "@mui/material/Divider";

import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import MultilineChartIcon from "@mui/icons-material/MultilineChart";
import MoneyIcon from "@mui/icons-material/Money";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";

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
      <Accordion key={card.id} style={{ backgroundColor: "black" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <div
            // key={card.id}
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              backgroundColor: "#1f1f1f",
              color: "white",
              // marginBottom: "20px",
              borderRadius: "10px",
              height: "45px",
              width: "100%",
            }}
            // onClick={() => {
            //   alert("ziko");
            // }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <MonetizationOnIcon
                style={{ marginRight: "20px" }}
                sx={{ fontSize: { xs: "17px", sm: "17px", md: "20px" } }}
              />
              <p
                style={{ fontSize: "12px" }}
                sx={{ fontSize: { xs: "10px", sm: "10px", md: "12px" } }}
              >
                {card.field1}
              </p>
            </div>

            <Divider
              style={{
                width: "1px",
                backgroundColor: "gray",
                margin: "0px 5px",
              }}
            />

            <div style={{ display: "flex", alignItems: "center" }}>
              <InsertChartIcon
                style={{ marginRight: "20px" }}
                sx={{ fontSize: { xs: "17px", sm: "17px", md: "20px" } }}
              />
              <p
                style={{ fontSize: "12px" }}
                sx={{ fontSize: { xs: "10px", sm: "10px", md: "12px" } }}
              >
                {card.field2}
              </p>
            </div>

            <Divider
              style={{
                width: "1px",
                backgroundColor: "gray",
                margin: "0px 5px",
              }}
            />

            <div style={{ display: "flex", alignItems: "center" }}>
              <MultilineChartIcon
                style={{ marginRight: "20px" }}
                sx={{ fontSize: { xs: "17px", sm: "17px", md: "20px" } }}
              />
              <p
                style={{
                  fontSize: "12px",
                  color: card.field5 == true ? "green" : "red",
                }}
                sx={{ fontSize: { xs: "10px", sm: "10px", md: "12px" } }}
              >
                {card.field3}
              </p>
            </div>

            <Divider
              style={{
                width: "1px",
                backgroundColor: "gray",
                margin: "0px 5px",
              }}
            />

            <div style={{ display: "flex", alignItems: "center" }}>
              <MoneyIcon
                style={{ marginRight: "20px" }}
                sx={{ fontSize: { xs: "17px", sm: "17px", md: "20px" } }}
              />
              <p
                style={{ fontSize: "12px" }}
                sx={{ fontSize: { xs: "10px", sm: "10px", md: "12px" } }}
              >
                {card.field4}
              </p>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails
          style={{
            color: "white",
            textAlign: "left",
            backgroundColor: "black",
          }}
        >
          sakfnjkadbfjhab
          <Typography style={{ color: "white !important", zIndex: 1000 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
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
