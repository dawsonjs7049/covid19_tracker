import React from "react";

//this is a single-line import using the index.js file in components package
import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';
import styles from './app.module.css';

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData })

        console.log(fetchedData);
    }

    handleCountryChange = async (country) => {
        //fetch the data
        const fetchedData = await fetchData(country);
        //set the state
        this.setState({ data: fetchedData, country: country })
    }

    render(){
        const { data, country } = this.state;

        return (
            <div className={styles.container}>
                <h1 style={{textAlign: "center"}}>Coronavirus Tracker</h1>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App;
