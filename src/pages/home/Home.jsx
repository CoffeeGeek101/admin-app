import Chart from "../../components/chart/Chart";
import Featureinfo from "../../components/featureinfo/Featureinfo";
import {userData} from "../../dummyData";
import style from "./home.css";
import HomeWidgetS from "../../components/homeWidgetS/HomeWidgetS";
import LhomeWid from "../../components/LhomeWid/LhomeWid";

export default function home() {
  return (
    <div className="home">
      <Featureinfo/>
      <Chart title="Active User" data={userData} dataKey="active user" grid/>
      <div className="homeWidget">
        <HomeWidgetS/>
        <LhomeWid/>
      </div>
    </div>
  )
}
