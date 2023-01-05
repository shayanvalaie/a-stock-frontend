import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import Button from "@mui/material/Button";
import ProductData from "../ProductData.js";

const Home = () => {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 5,
    maxColumns: 6,
  });
  return (
    <>
      <div style={{ padding: "25px" }}>
        <Button variant="contained">Add Item</Button>
      </div>
      <br />
      <div style={{ height: 400, width: "100%" }}>
        <div style={{ display: "flex", height: "100%" }}>
          <div style={{ flexGrow: 1 }}>
            <DataGrid {...data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
