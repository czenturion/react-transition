import {NavLink} from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="row justify-content-md-center">
      <div className="col col-lg-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid asperiores atque dolore eum? A
        deserunt dignissimos doloremque! Accusamus aperiam consectetur est expedita maxime necessitatibus neque quod
        rerum soluta totam.
      </div>
      <div className="col col-lg-2">
        <NavLink to='/' className='btn btn-secondary'>Home</NavLink>
      </div>
    </div>
  )
}

export default AboutPage
