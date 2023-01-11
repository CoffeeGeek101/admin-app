import style from "./LhomeWid.css"

export default function LhomeWid() {

  const Button = ({type}) =>{
    return <button className={"wid-btn" + type}>{type}</button>;
  };

  return (
    <div className="largeW">
      <h2 className="title">Latest Transactions<span className="dot">.</span></h2>
      <div className="tran-container">
        <img className="tran-img" src="https://i.insider.com/5cf1200a11e2052506753045?width=700" alt="avi"/>
        <div className="tran-des">
          <span className="tran-name">Diana James</span>
          <span className="upi-id">dianajames@ybl</span>
        </div>
        <div className="amt-holder">
          <span className="sign">$</span>
          <span className="amt"> 79.7</span>
        </div>
        <span className="date">3-12-22</span>
        <Button className="btn-status" type="Approved"/>
      </div>
      <div className="tran-container">
        <img className="tran-img" src="https://i.insider.com/5cf1200a11e2052506753045?width=700" alt="avi"/>
        <div className="tran-des">
          <span className="tran-name">Diana James</span>
          <span className="upi-id">dianajames@ybl</span>
        </div>
        <div className="amt-holder">
          <span className="sign">$</span>
          <span className="amt"> 79.7</span>
        </div>
        <span className="date">3-12-22</span>
        <Button className="btn-status" type="Approved"/>
      </div>
      <div className="tran-container">
        <img className="tran-img" src="https://i.insider.com/5cf1200a11e2052506753045?width=700" alt="avi"/>
        <div className="tran-des">
          <span className="tran-name">Diana James</span>
          <span className="upi-id">dianajames@ybl</span>
        </div>
        <div className="amt-holder">
          <span className="sign">$</span>
          <span className="amt"> 79.7</span>
        </div>
        <span className="date">3-12-22</span>
        <Button className="btn-status" type="Approved"/>
      </div>
      <div className="tran-container">
        <img className="tran-img" src="https://i.insider.com/5cf1200a11e2052506753045?width=700" alt="avi"/>
        <div className="tran-des">
          <span className="tran-name">Diana James</span>
          <span className="upi-id">dianajames@ybl</span>
        </div>
        <div className="amt-holder">
          <span className="sign">$</span>
          <span className="amt"> 79.7</span>
        </div>
        <span className="date">3-12-22</span>
        <Button className="btn-status" type="Approved"/>
      </div>
      <div className="tran-container">
        <img className="tran-img" src="https://i.insider.com/5cf1200a11e2052506753045?width=700" alt="avi"/>
        <div className="tran-des">
          <span className="tran-name">Diana James</span>
          <span className="upi-id">dianajames@ybl</span>
        </div>
        <div className="amt-holder">
          <span className="sign">$</span>
          <span className="amt"> 79.7</span>
        </div>
        <span className="date">3-12-22</span>
        <Button className="btn-status" type="Approved"/>
      </div>
    </div>
  )
}
