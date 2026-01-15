import { NavLink } from "react-router";
import './home.css';

export default function Home() {
  return (
    <div className="home-container">
      
     
      <section className="hero">
        <h1>Welcome to My Blog</h1>
        <p>Explore our users and their posts. Click below to get started!</p>
        <NavLink to="/users" className="cta-btn">
          View Users
        </NavLink>
      </section>

     
      <section className="info-cards">
        <div className="card">
          <h3>Latest Updates</h3>
          <p>See what’s new on the blog and catch up with the latest posts.</p>
        </div>
        <div className="card">
          <h3>Popular Users</h3>
          <p>Check out the most active users and their contributions.</p>
        </div>
        <div className="card">
          <h3>About This Blog</h3>
          <p>This is a demo blog built with React and React Router.</p>
        </div>
      </section>

    </div>
  );
}
