import {NavLink} from "react-router-dom";

const HomePage = () => {
  return (
    <div className='container pt-2 pb-2'>
      <div className="background"></div>
      <div className="row">
        <div className="col">

          Home
        </div>
        <div className="col">

          <NavLink to='/about' className='btn btn-secondary'>About</NavLink>
        </div>
      </div>
    </div>
  )
}

export default HomePage
