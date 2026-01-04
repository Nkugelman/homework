import { Link, useNavigate } from 'react-router'

export default function PageNotFound() {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate('..'); // or \
  }, 5000)

  return (
    <>
      <h1>404 - PageNotFound</h1>
      <h2>This is NOT the page you are looking for...</h2>
      <Link to="/" style={{textDecoration: 'underline'}}>check out our home page instead</Link>
    </>
  )
}
