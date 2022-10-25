import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(fas);

export default class UpcomingCard extends React.Component<
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
    const weekday = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
    const APIData = this.state.dataweather;
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
      <div className="upcomingContainer flex">
        {RunTimeTemperature.map((e: any, i: any) => {
          const date = weekday[new Date(e.dt_txt).getDay()];
          return (
            i !== 0 &&
            i < 5 && (
              <div key={i} className="upcoming-card">
                <h3>{date.toString()}</h3>
                <FontAwesomeIcon icon={["fas", iconList[e.weather[0].main]]} />

                <span>{e.main.temp}&#176;</span>
              </div>
            )
          );
        })}
      </div>
    );
  }
}
