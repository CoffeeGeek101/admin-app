import style from "./featureinfo.css";
import {ArrowDownward, ArrowUpward} from "@mui/icons-material";
export default function Featureinfo() {
  return (
    <div className="ft-conatiner">
        <div className="ft-compare">
            <div className="com-ele">
                <h3 className="com-title">Revenue</h3>
                <div className="com-stat">
                <span className="com-first">$2,879</span>
                <span className="com-sec"> - 11.9</span>
                <ArrowDownward className="icon-a"/>
                </div>
                <p className="com-des">compare to last month.</p>
            </div>
            <div className="com-ele">
                <h3 className="com-title">Sales</h3>
                <div className="com-stat">
                <span className="com-first">$6,879</span>
                <span className="com-sec">  +12.9</span>
                <ArrowUpward className="icon-a positive"/>
                </div>
                <p className="com-des">compare to last month.</p>
            </div>
            <div className="com-ele">
                <h3 className="com-title">Revenue</h3>
                <div className="com-stat">
                <span className="com-first">$1,879</span>
                <span className="com-sec"> - 3.9</span>
                <ArrowDownward className="icon-a"/>
                </div>
                <p className="com-des">compare to last month.</p>
            </div>
        </div>
    </div>
  )
}
