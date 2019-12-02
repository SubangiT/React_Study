import React, { Component } from 'react';

export class FetchData extends Component {
  displayName = FetchData.name

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };

    fetch('api/SampleData/WeatherForecasts')
      .then(response => response.json())
      .then(data => {
        this.setState({ forecasts: data, loading: false });
      });

    


     
  }
    //render() {
    //    //let contents = this.state.loading ?
    //    //    <p><em> Loading... </em></p> :
    //    //    this.renderForecastsTable(this.state.forecasts);

    //    return (
    //        <div>
    //            <ul>
    //                {this.state.forecasts.map((studies,guid) =>
    //                    <li key={studies.guid}>{studies.guid}</li>
    //                )}
    //            </ul>
    //        </div>
    //    );

    //}

    static renderForecastsTable(forecasts) {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Temp. (C)</th>
                        <th>Temp. (F)</th>
                        <th>Summary</th>
                    </tr>
                </thead>
                <tbody>
                    {forecasts.map(forecasts =>
                        <tr key={forecasts.dateFormatted}>
                            <td>{forecasts.dateFormatted}</td>
                            <td>{forecasts.temperatureC}</td>
                            <td>{forecasts.temperatureF}</td>
                            <td>{forecasts.summary}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchData.renderForecastsTable(this.state.forecasts);

        return (
            <div>
                <h1>Weather forecast</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }
}
