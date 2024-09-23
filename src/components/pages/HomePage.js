import React, { Component } from "react";
import Cards from "../Cards/Cards";
import Charts from "../Charts";
import CountryPicker from "../CountryPicker";
import styles from "./HomePage.css";
import { fetchData } from "../api";

class HomePage extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });

    // console.log(fetchedData);
  };

  render() {
    const { data, country } = this.state;

    return (
      <>
        <div className={styles.container}>
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Cards data={data} />
          <Charts data={data} country={country} />
        </div>
      </>
    );
  }
}

export default HomePage;
