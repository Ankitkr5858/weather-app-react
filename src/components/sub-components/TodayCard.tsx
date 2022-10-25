import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(fas);

export default class TodayCard extends React.Component<
  {},
  { dataweather: any }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      dataweather: props,
    };
  }
  componentWillReceiveProps(props: any) {
    this.setState({ dataweather: props });
  }

  render() {
    const APIData = this.state.dataweather[0];
    var RunTimeTemperature: any = [];
    Object.keys(APIData).forEach(function (key) {
      RunTimeTemperature.push(APIData[key]);
    });
    const iconList: any = {
      Clouds: "cloud",
      Clear: "sun",
      Thunderstorm: "cloud-bolt",
      Rain: "cloud-showers-water",
      Drizzle: "cloud-rain",
      Snow: "snowflake",
      Mist: "smog",
      Smoke: "smog",
      Haze: "smog",
      Dust: "smog",
      Fog: "smog",
      Sand: "smog",
      Ash: "smog",
      Squall: "wind",
      Tornado: "tornado",
    };
    return (
      <div className="todayContainer">
        <h3>Today </h3>
        <div className="todayContent">
          <div className="img-holder">
            <FontAwesomeIcon
              icon={["fas", iconList[RunTimeTemperature[2][0].main]]}
            />
          </div>
          <div className="text-container hover-animation">
            <span className="bold">{RunTimeTemperature[1].temp}&#176;</span>
            <span className="weather-text">
              {RunTimeTemperature[2][0].main}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
