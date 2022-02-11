import { useRef, useState } from 'react';
import './App.css';
import FormInput from './components/FormInput';

function App() {

  const [values, setValues] = useState({
    username:"",
    email:"",
    birthday:"",
    password:"",
    confirmPassword:"",
  });
  //const usernameRef = useRef();
  const inputs = [
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"Username",
      errorMessage:"Username should be 4 to 16 character and shouldn't include any special character!",
      label:"Username",
      pattern:"^[A-Za-z0-9]{4,16}$",
      required:true,
    },
    {
      id:2,
      name:"email",
      type:"email",
      placeholder:"Email",
      errorMessage:"It should be a valid email address",
      label:"Email",
      required:true,
    },
    {
      id:3,
      name:"birthday",
      type:"date",
      placeholder:"Birthday",
      label:"Birthday",
    },
    {
      id:4,
      name:"password",
      type:"text",
      placeholder:"Password",
      errorMessage:"Password should be 8 to 20 characters and include at least 1 letter, 1 number and 1 special character!",
      label:"Password",
      pattern:"^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      required:true,
    },
    {
      id:5,
      name:"confirmPassword",
      type:"password",
      placeholder:"Confirm Password",
      errorMessage:"Password don't match",
      label:"Confirm Password",
      pattern:[values.password],
      required:true,
    }
  ]
  console.log("re-rendered");
  const handlesubmit = (e) => {
    e.preventDefault();
  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]:e.target.value });
  }
  console.log(values);
  return (
    <div className="App">
      <form onSubmit={handlesubmit}>
        <h1>Register</h1>
        {inputs.map(input => (
          <FormInput 
            key={input.id} 
            {...input} 
            value={values[input.name]} 
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
