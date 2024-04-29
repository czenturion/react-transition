import {NavLink} from "react-router-dom";

const AboutPage = () => {
  return (
    <div className='container pt-2 pb-2'>
      About
      <NavLink className='btn btn-secondary' to='/'>Home</NavLink>
    </div>
  )
}

export default AboutPage
