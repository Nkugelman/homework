import './Login.css';
import useForm from './useForm';

export default function Login(props) {
  const { setUserName ,setError} = props;

  const [formData, setFormData] = useForm({
    userName: '',
    password: ''
  })

 async function login(e) {
    e.preventDefault();
     try {
      const response = await fetch('http://localhost:8080', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-type': 'application/json'
        },
        credentials:'include'
      });

     if (!response.ok) {
          const message = await response.text();
          throw new Error(`${response.status} - ${message?? response.statusText}`);
        }
         setUserName(formData.userName);

    } catch (e) {
      setError(e.message)
      console.error(e);
    }
  }
 async function register(e) {
    e.preventDefault();
     try {
      const response = await fetch('http://localhost:8080/register', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-type': 'application/json'
        },
        credentials: 'include'
      });

     if (!response.ok) {
          const message = await response.text();
          throw new Error(`${response.status} - ${message?? response.statusText}`);
        }
         setUserName(formData.userName);
    } catch (e) {   
      setError(e.message)
      console.error(e);
    }
  }
  

  return (
    <form id="login" onSubmit={login}>
      <label>name:
        <input name="userName" required value={formData.userName} onChange={setFormData} />
      </label>

      <label>password:
        <input type="password" name="password" required value={formData.password} onChange={setFormData} />
      </label>

      <button>login</button>

      <button type="button" onClick={register}>register</button>
    </form>
  )
}
