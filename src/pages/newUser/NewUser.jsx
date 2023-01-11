import style from './newUser.css';
import {Air, Google,Apple,Phone} from '@mui/icons-material';
export default function newUser() {
  return (
    <div className='new-user'>
        <div className='hero'>
            <div className='img-container'>
                <img className='hero-1' src='https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' alt='img'/>
                <img className='hero-2' src='https://images.unsplash.com/photo-1590098563176-07884b06d7f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80' alt='img-b'/>
            </div>
            <div className='txt-container'>
                <div className='tag-line'>
                    <h1>We Made</h1>
                    <h2>it <span className='highlight'>easy.</span><Air className='air'/></h2>
                </div>
            </div>
            <div className='hero-text'>
                <h1>Join Us Now For <span className='highlight'>Free.</span></h1>
                <button className='newsletter'>Get Updates</button>
            </div>
        </div>
        <div className='form-container'>
            <div className='signup-title'>Get Started.</div>
            <form className='signup-form'>
                <div className='left-form'>
                    <div className='form-item-sign'>
                        <label>First Name</label>
                        <input
                            type="text"
                            placeholder='first name'
                            className='form-sign-child'
                        />
                    </div>
                    <div className='form-item-sign'>
                        <label>Last Name</label>
                        <input
                            type="text"
                            placeholder='last name'
                            className='form-sign-child'
                        />
                    </div>
                    <div className='form-item-sign'>
                        <label>Email</label>
                        <input
                            type="text"
                            placeholder='email'
                            className='form-sign-child'
                        />
                    </div>
                    <div className='form-item-sign'>
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder='password'
                            className='form-sign-child'
                        />
                    </div>
                </div>
                <button className='done'>Continue</button>
                <div className='bridge'>
                        <h2 className='bridge-txt'>-Another Methods-</h2>
                    </div>
                <div className='right-form'>
                    <button className='another-med'><Google className='another-logo'/> Get started with Google</button>
                    <button className='another-med'><Apple className='another-logo'/> Get started with Apple ID</button>
                    <button className='another-med'><Phone className='another-logo'/> Get started with Phone Number</button>
                </div>
            </form>
        </div>
    </div>
  )
}
