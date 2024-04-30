import {NavLink} from "react-router-dom";

const HomePage = () => {
  return (

      <div className="row justify-content-md-center">
        <div className="col col-lg-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid commodi delectus dolorum eius facere fuga ipsa iure magni molestiae, necessitatibus nisi, perferendis quibusdam quis similique temporibus ullam velit veniam.
        </div>
        <div className="col col-lg-2">
          <NavLink to='/about' className='btn btn-secondary'>About</NavLink>
        </div>
      </div>
  )
}

export default HomePage
