import style from "./homeWidgetS.css";
import {Visibility} from "@mui/icons-material";
export default function HomeWidgetS() {
  return (
    <div className="smallW">
      <h2 className="title">Your Circle<span className="dot">.</span></h2>
      <div className="w-container">
        {/* <div className="img-container"> */}
        <img className="avi" src="https://media.istockphoto.com/id/1007763808/photo/portrait-of-handsome-latino-african-man.jpg?s=612x612&w=0&k=20&c=XPL1ukeC99OY8HBfNa_njDujOPf9Xz4yCEOo7O3evU0=" alt="avi"/>
        {/* </div> */}
        <div className="des">
          <span className="name">Justin Hansson</span>
          <span className="role">Software Engineer</span>
        </div>
        <button className="btn"><Visibility className="eye"/> More</button>
      </div>
      <div className="w-container">
        
        <img className="avi" src="https://media.istockphoto.com/id/1007763808/photo/portrait-of-handsome-latino-african-man.jpg?s=612x612&w=0&k=20&c=XPL1ukeC99OY8HBfNa_njDujOPf9Xz4yCEOo7O3evU0=" alt="avi"/>
  
        <div className="des">
          <span className="name">Justin Hansson</span>
          <span className="role">Software Engineer</span>
        </div>
        <button className="btn"><Visibility className="eye"/> More</button>
      </div>
      <div className="w-container">
        {/* <div className="img-container"> */}
        <img className="avi" src="https://media.istockphoto.com/id/1007763808/photo/portrait-of-handsome-latino-african-man.jpg?s=612x612&w=0&k=20&c=XPL1ukeC99OY8HBfNa_njDujOPf9Xz4yCEOo7O3evU0=" alt="avi"/>
        {/* </div> */}
        <div className="des">
          <span className="name">Justin Hansson</span>
          <span className="role">Software Engineer</span>
        </div>
        <button className="btn"><Visibility className="eye"/> More</button>
      </div>
      <div className="w-container">
        
        <img className="avi" src="https://media.istockphoto.com/id/1007763808/photo/portrait-of-handsome-latino-african-man.jpg?s=612x612&w=0&k=20&c=XPL1ukeC99OY8HBfNa_njDujOPf9Xz4yCEOo7O3evU0=" alt="avi"/>
        
        <div className="des">
          <span className="name">Justin Hansson</span>
          <span className="role">Software Engineer</span>
        </div>
        <button className="btn"><Visibility className="eye"/> More</button>
      </div>
    </div>
  )
}
