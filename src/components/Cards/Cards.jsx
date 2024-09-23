import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  // console.log(confirmed);

  if (!confirmed) {
    return "Loading...";
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          xs={12}
          md={3}
          item
          component={Card}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Divider />
            <Typography
              variant="overline"
              gutterBottom
              style={{ fontSize: "100%" }}
            >
              Infected
            </Typography>
            <Divider />
            <br />
            <Typography variant="h4">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toUTCString()}
            </Typography>
            <Typography variant="body2">
              Number of active cases of Covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          xs={12}
          md={3}
          item
          component={Card}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Divider />
            <Typography
              variant="overline"
              gutterBottom
              style={{ fontSize: "100%" }}
            >
              Recovered
            </Typography>
            <Divider />
            <br />
            <Typography variant="h4">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toUTCString()}
            </Typography>
            <Typography variant="body2">
              Number of recoveries from Covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          xs={12}
          md={3}
          item
          component={Card}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Divider />
            <Typography
              variant="overline"
              gutterBottom
              style={{ fontSize: "100%" }}
            >
              Deaths
            </Typography>
            <Divider />
            <br />
            <Typography variant="h4">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toUTCString()}
            </Typography>
            <Typography variant="body2">
              Number of deaths caused by Covid-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
