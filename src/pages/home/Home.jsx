import {NavLink} from "react-router-dom";

const HomePage = () => {
  return (

    <div className="page row justify-content-center">
      <img src="/images/photo.jpg" alt="avatar" className="avatar"/>
      <div className="col col-md-4">
        <p>Full Name: Maxim Arefev</p>
        <p>Role: Frontend Developer</p>
        <p>Location: Moscow</p>
        <p className="text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dicta dignissimos expedita explicabo, facere iusto laboriosam libero perspiciatis sequi!</p>
        <NavLink to='/about' className='btn btn-secondary'>About</NavLink>
      </div>
    </div>
  )
}

export default HomePage
