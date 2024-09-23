import React, { useState, useEffect } from "react";
import { fetchDailyData } from "./api";
import { Line, Bar } from "react-chartjs-2";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles({
  paper: {
    marginLeft: "14%",
    marginTop: "3%",
    padding: "2%",
    width: "70%",
    backgroundColor: "#ebebeb",
    marginBottom: "5%",
  },
});

const Charts = ({ data: { confirmed, deaths, recovered }, country }) => {
  const styles = useStyles();
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchAPI();
  }, []);

  const lineChart = dailyData.length ? ( // If the array isnt 0
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            backgroundColor: "rgba(102,163,255,0.2)",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  // console.log(confirmed, recovered, deaths);

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: ["#0000cc", "#00cc00", "#cc0000"],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;

  return (
    <Paper elevation={3} className={styles.paper} variant="outlined">
      <div>{country ? barChart : lineChart}</div>
    </Paper>
  );
};

export default Charts;
