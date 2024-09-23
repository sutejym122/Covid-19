import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { fetchCountries } from "./api";
import { FaMapMarkedAlt } from "react-icons/fa";
import { IconContext } from "react-icons";

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "100%",
    marginTop: "1%",
    marginLeft: "10%",
    background: "#66fcf1",
    padding: "3%",
    fontWeight: "700",
  },
  grid: {
    marginLeft: "33%",
    marginTop: "2%",
    // justifyContent: "center",
  },
}));

const CountryPicker = ({ handleCountryChange }) => {
  const styles = useStyles();
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };

    fetchAPI();
  }, [setFetchedCountries]);

  // console.log(fetchedCountries);

  return (
    <IconContext.Provider
      value={{ style: { fontSize: "300%", color: "#ebebeb" } }}
    >
      <Grid container spacing={3} className={styles.grid}>
        <Grid item>
          <FaMapMarkedAlt />
        </Grid>
        <Grid item>
          <FormControl variant="filled" className={styles.formControl}>
            <NativeSelect
              defaultValue=""
              onChange={(e) => handleCountryChange(e.target.value)}
            >
              <option value="">Global</option>
              {fetchedCountries.map((country, i) => (
                <option key={i} value={country}>
                  {country}
                </option>
              ))}
            </NativeSelect>
          </FormControl>
        </Grid>
      </Grid>
    </IconContext.Provider>
  );
};

export default CountryPicker;
