import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import Chip from "@mui/material/Chip";

import Button from "@mui/material/Button";

import SearchIcon from "@mui/icons-material/Search";

import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import LoopIcon from "@mui/icons-material/Loop";
import BoltIcon from "@mui/icons-material/Bolt";
import CallToActionIcon from "@mui/icons-material/CallToAction";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import ForumIcon from "@mui/icons-material/Forum";
import FactoryIcon from "@mui/icons-material/Factory";
import ConstructionIcon from "@mui/icons-material/Construction";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

const spinnerListData = [
  { id: 1, title: "Big Option Buys", val: "Big-Option-Buys" },
  { id: 2, title: "Merger Arbitrage", val: "Merger-Arbitrage" },
  { id: 3, title: "Short Reports", val: "Short-Reports" },
];
const spinnerListData2 = [
  { id: 1, title: "Stock", val: "Stock" },
  { id: 2, title: "Options", val: "Options" },
  { id: 3, title: "Futures", val: "Futures" },
];

export default function Filter() {
  const [spinnerList, setSpinnerList] = useState(spinnerListData);
  const [spinnerList2, setSpinnerList2] = useState(spinnerListData2);

  const [toggleAccordion, setToggleAccordion] = useState(false);
  const [toggleAccordion2, setToggleAccordion2] = useState(false);
  const [toggleAccordion3, setToggleAccordion3] = useState(false);

  const [searchInput, setSearchInput] = useState("");
  const [searchList, setSearchList] = useState([
    { id: uuidv4(), title: "All" },
  ]);

  const [view, setView] = useState("Big-Option-Buys");
  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  const [view2, setView2] = useState("Stock");
  const handleChange2 = (event, nextView) => {
    setView2(nextView);
  };

  const spinnerListJsx = spinnerList.map((spin) => {
    return (
      <ToggleButton
        key={spin.id}
        value={spin.val}
        aria-label="list"
        style={{
          color: "gray",
          fontSize: "13px",
          borderRadius: "6px",
          padding: "0px 6px",
          marginBottom: "5px",
        }}
      >
        {spin.title}
      </ToggleButton>
    );
  });

  const spinnerListJsx2 = spinnerList2.map((spin) => {
    return (
      <ToggleButton
        key={spin.id}
        value={spin.val}
        aria-label="list"
        style={{
          color: "gray",
          fontSize: "13px",
          borderRadius: "6px",
          padding: "0px 6px",
          marginBottom: "5px",
        }}
      >
        {spin.title}
      </ToggleButton>
    );
  });

  const handleDelete = (id) => {
    console.info("You clicked the delete icon.");
    const updatedSearchList = searchList.filter((chip) => {
      return chip.id !== id;
    });
    setSearchList(updatedSearchList);
  };

  const handleSearchClick = () => {
    const newSearchList = {
      id: uuidv4(),
      title: searchInput,
    };
    setSearchList([...searchList, newSearchList]);
    console.log(searchList);
    setSearchInput("");
  };

  const searchListJsx = searchList.map((chip) => {
    return (
      <Chip
        key={chip.id}
        label={chip.title}
        onDelete={() => handleDelete(chip.id)}
        style={{
          backgroundColor: "#53ACFF",
          color: "white",
          fontSize: "10px",
          margin: "3px",
        }}
      />
    );
  });

  return (
    <div
      style={{
        // backgroundColor: "#1f1f1f",
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div style={{}}>
        <h2 style={{ margin: "0px", textAlign: "center" }}>Filter</h2>
      </div>

      <div
        style={{
          // backgroundColor: "rgba(255, 255, 255, 0.15)",
          backgroundColor: "#1f1f1f",
          position: "relative",
          borderRadius: "7px",
          margin: "20px 0px",
          textAlign: "left",
        }}
      >
        <p style={{ position: "absolute", top: "-40px", color: "gray" }}>
          Filter Applied
        </p>
        <p
          style={{
            position: "absolute",
            top: "-40px",
            right: "0",
            cursor: "pointer",
          }}
        >
          Clear All
        </p>

        {searchListJsx}
      </div>

      <div
        style={{
          backgroundColor: "#1f1f1f",
          borderRadius: "10px",
          padding: "5px 10px",
        }}
      >
        <h4 style={{ textAlign: "left" }}>Stock</h4>

        <div style={{ position: "relative" }}>
          <input
            value={searchInput}
            className="filter-input"
            type="text"
            placeholder="$ TICKER"
            style={{
              width: "100%",
              borderRadius: "7px",
              height: "30px",
              // backgroundColor: "gray",
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              padding: "10px",
              border: "none",
              color: "white",
            }}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <SearchIcon
            style={{
              position: "absolute",
              right: "0px",
              top: "5px",
              color: "gray",
              cursor: "pointer",
            }}
            onClick={handleSearchClick}
          />
        </div>

        <div style={{ marginTop: "20px", position: "relative" }}>
          <Accordion
            style={{ backgroundColor: "#1f1f1f", color: "white" }}
            onChange={() => {
              setToggleAccordion(!toggleAccordion);
            }}
          >
            <AccordionSummary
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <ExpandMoreIcon
                style={{
                  position: "absolute",
                  left: "-5px",
                  color: "white",
                  rotate: toggleAccordion ? "0deg" : "-90deg",
                  transition: "all 0.5s ease",
                }}
              />
              Industry
            </AccordionSummary>

            <AccordionDetails>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    borderLeft: "1px solid white",
                    paddingLeft: "10px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <HealthAndSafetyIcon
                      style={{ marginRight: "10px", fontSize: "20px" }}
                    />
                    <p style={{ margin: "10px 0px", fontSize: "13px" }}>
                      Health Care
                    </p>
                  </div>

                  <div style={{ display: "flex", alignItems: "center" }}>
                    <LoopIcon
                      style={{ marginRight: "10px", fontSize: "20px" }}
                    />
                    <p style={{ margin: "10px 0px", fontSize: "13px" }}>
                      Materials
                    </p>
                  </div>

                  <div style={{ display: "flex", alignItems: "center" }}>
                    <BoltIcon
                      style={{ marginRight: "10px", fontSize: "20px" }}
                    />
                    <p style={{ margin: "10px 0px", fontSize: "13px" }}>
                      Energy
                    </p>
                  </div>

                  <div style={{ display: "flex", alignItems: "center" }}>
                    <CallToActionIcon
                      style={{ marginRight: "10px", fontSize: "20px" }}
                    />
                    <p style={{ margin: "10px 0px", fontSize: "13px" }}>
                      Consumer Discretionary
                    </p>
                  </div>

                  <div style={{ display: "flex", alignItems: "center" }}>
                    <ShoppingCartIcon
                      style={{ marginRight: "10px", fontSize: "20px" }}
                    />
                    <p style={{ margin: "10px 0px", fontSize: "13px" }}>
                      Consumer Staples
                    </p>
                  </div>

                  <div style={{ display: "flex", alignItems: "center" }}>
                    <HomeIcon
                      style={{ marginRight: "10px", fontSize: "20px" }}
                    />
                    <p style={{ margin: "10px 0px", fontSize: "13px" }}>
                      Real Estate
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    borderLeft: "1px solid white",
                    paddingLeft: "10px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <PrecisionManufacturingIcon
                      style={{ marginRight: "10px", fontSize: "20px" }}
                    />
                    <p style={{ margin: "10px 0px", fontSize: "13px" }}>IT</p>
                  </div>

                  <div style={{ display: "flex", alignItems: "center" }}>
                    <ForumIcon
                      style={{ marginRight: "10px", fontSize: "20px" }}
                    />
                    <p style={{ margin: "10px 0px", fontSize: "13px" }}>
                      Communication
                    </p>
                  </div>

                  <div style={{ display: "flex", alignItems: "center" }}>
                    <FactoryIcon
                      style={{ marginRight: "10px", fontSize: "20px" }}
                    />
                    <p style={{ margin: "10px 0px", fontSize: "13px" }}>
                      Industials
                    </p>
                  </div>

                  <div style={{ display: "flex", alignItems: "center" }}>
                    <ConstructionIcon
                      style={{ marginRight: "10px", fontSize: "20px" }}
                    />
                    <p style={{ margin: "10px 0px", fontSize: "13px" }}>
                      Utilities
                    </p>
                  </div>

                  <div style={{ display: "flex", alignItems: "center" }}>
                    <CurrencyExchangeIcon
                      style={{ marginRight: "10px", fontSize: "20px" }}
                    />
                    <p style={{ margin: "10px 0px", fontSize: "13px" }}>
                      Financials
                    </p>
                  </div>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <Accordion
              style={{ backgroundColor: "#1f1f1f", color: "white" }}
              onChange={() => {
                setToggleAccordion2(!toggleAccordion2);
              }}
            >
              <AccordionSummary
                //   expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <ExpandMoreIcon
                  style={{
                    position: "absolute",
                    left: "-5px",
                    color: "white",
                    rotate: toggleAccordion2 ? "0deg" : "-90deg",
                    transition: "all 0.5s ease",
                  }}
                />
                Market Cap
              </AccordionSummary>

              <AccordionDetails>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Large"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Micro"
                      control={<Radio style={{ color: "#53ACFF" }} />}
                      label="Micro"
                    />
                    <FormControlLabel
                      value="Small"
                      control={<Radio style={{ color: "#53ACFF" }} />}
                      label="Small"
                    />
                    <FormControlLabel
                      value="Large"
                      control={<Radio style={{ color: "#53ACFF" }} />}
                      label="Large"
                    />
                  </RadioGroup>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>

          <div>
            <Accordion
              style={{ backgroundColor: "#1f1f1f", color: "white" }}
              onChange={() => {
                setToggleAccordion3(!toggleAccordion3);
              }}
            >
              <AccordionSummary
                //   expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <ExpandMoreIcon
                  style={{
                    position: "absolute",
                    left: "-5px",
                    color: "white",
                    rotate: toggleAccordion3 ? "0deg" : "-90deg",
                    transition: "all 0.5s ease",
                  }}
                />
                Risk Level
              </AccordionSummary>

              <AccordionDetails>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Mid Risk"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Low Risk"
                      control={<Radio style={{ color: "#53ACFF" }} />}
                      label="Low Risk"
                    />
                    <FormControlLabel
                      value="Mid Risk"
                      control={<Radio style={{ color: "#53ACFF" }} />}
                      label="Mid Risk"
                    />
                    <FormControlLabel
                      value="High Risk"
                      control={<Radio style={{ color: "#53ACFF" }} />}
                      label="High Risk"
                    />
                  </RadioGroup>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div>
            <p>Strategy</p>
            {/* <div>{spinnerListJsx}</div> */}
            <ToggleButtonGroup
              orientation="vertical"
              value={view}
              exclusive
              onChange={handleChange}
            >
              {spinnerListJsx}
            </ToggleButtonGroup>
          </div>

          <div>
            <p>Asset</p>
            {/* <div>{spinnerListJsx}</div> */}
            <ToggleButtonGroup
              orientation="vertical"
              value={view2}
              exclusive
              onChange={handleChange2}
            >
              {spinnerListJsx2}
            </ToggleButtonGroup>
          </div>
        </div>
      </div>

      <div
        style={{
          margin: "20px 10px 10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Button
          variant="outlined"
          color="accent"
          style={{ fontWeight: 600, fontSize: "12px" }}
          sx={{ display: { xs: "block", sm: "block", md: "none" } }}
        >
          Save filter
        </Button>
        <Button
          variant="contained"
          color="accent"
          onClick={handleSearchClick}
          style={{ fontWeight: 600, fontSize: "12px" }}
        >
          Apply
        </Button>
      </div>
    </div>
  );
}
