import style from './user.css'
import{PersonPin, Cake, LocalPhone,Email,LocationOn, Phone, AddAPhoto
} from "@mui/icons-material";
import {Link} from 'react-router-dom'
export default function User() {
  return (
    <div className='profile'>
        <div className='user-title'>
            <h1 className='head'>EditProfile<span className='dot'>.</span></h1>
            <Link to="/newUser">
            <button className='create-user'>ADD ACCOUNT</button>
            </Link>
        </div>
        <div className="user-container">
        <div className='user-card'>
            <img className='user-dp' src='https://image.cnbcfm.com/api/v1/image/102828635-GettyImages-479833756.jpg?v=1436791568&w=929&h=523&vtcrop=y'></img>
            <AddAPhoto className='change-photo'/>
        <h2 className='user-name'>Alon Musk</h2>
        <p className='user-role'>Entrepreneur</p>
         <div className='card-details'>
            <PersonPin className='user-logo'/>
            <p className='card-font'>theycallmeelon</p>
         </div>
         <div className='card-details'>
            <Cake className='user-logo'/>
            <p className='card-font'>07-05-1988</p>
         </div>
         <div className='card-details'>
            <Phone className='user-logo'/>
            <p className='card-font'>+1-972046103</p>
         </div>
         <div className='card-details'>
            <Email className='user-logo'/>
            <p className='card-font'>alon@rich.in</p>
         </div>
         <div className='card-details'>
            <LocationOn className='user-logo'/>
            <p className='card-font'>Downtown, LA</p>
         </div>
        </div>
        <div className='user-edit'>
         <span className='edit-title'>Update your Info</span>
         <form className='form-main'>
            <div className='formLeft'>
               <div className='form-item'>
                  <label>username.</label>
                  <input
                    type="text"
                    placeholder='Username'
                    className='form-item-child'
                  />
               </div>
               <div className='form-item'>
                  <label>name</label>
                  <input
                    type="text"
                    placeholder='Name'
                    className='form-item-child'
                  />
               </div>
               <div className='form-item'>
                  <label>role</label>
                  <input
                    type="text"
                    placeholder='Role'
                    className='form-item-child'
                  />
               </div>
            </div>
            <div className='formRight'>
            <div className='form-item'>
                  <label>DOB</label>
                  <input
                    type="text"
                    placeholder='DOB'
                    className='form-item-child'
                  />
               </div>
               <div className='form-item'>
                  <label>phone</label>
                  <input
                    type="text"
                    placeholder='Phone'
                    className='form-item-child'
                  />
               </div>
               <div className='form-item'>
                  <label>email</label>
                  <input
                    type="email"
                    placeholder='Email'
                    className='form-item-child'
                  />
               </div>
               <div className='form-item'>
                  <label>location</label>
                  <input
                    type="text"
                    placeholder='Location'
                    className='form-item-child'
                  />
               </div>
            </div>
         </form>
         <button className='update-btn'>Update</button>
         <span className='copyright'> © copyrights under Shoumyadeep Narayan</span>
        </div>
        </div>
    </div>
  )
}
