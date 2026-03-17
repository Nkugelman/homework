import React from 'react'
import useForm from './useForm';

export default function LogIn(props) {
    const {setUserName}=props;

    const [formData, setFormData] = useForm({
        userName:'',
        password:''
    });
    function login(e){
        e.preventDefault();
        setUserName(formData.userName);
    }
  return (
    <form  onSubmit={login}>
  <label>name: 
    <input name="userName" required value={formData.userName} onChange={setFormData}/>
    </label>
  
  <label>password: 
    <input type="password" name="password" required value={formData.password} onChange={setFormData}/>
    </label>
  
  <button >login</button>

  <button type='button'>register</button>
</form>
  )
}
