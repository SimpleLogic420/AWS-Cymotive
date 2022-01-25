const { reports } = require("./reports.json");
const axios = require("axios");

const insertReports = () => {
  reports.forEach(async (report) => {
    console.log(report);
    const res = await axios.post(
      "https://2doeste2oe.execute-api.eu-south-1.amazonaws.com/api",
      { report: report },
      {
        "Content-Type": "application/json",
      }
    );
  });
};

insertReports();
