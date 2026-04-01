import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Login() {
  const [form,setForm]=useState({email:'',password:''});
  const [error,setError]=useState('');
  const {login}=useAuth();
  const navigate=useNavigate();

  const onChange=(e)=>setForm(p=>({...p,[e.target.name]:e.target.value}));
  const onSubmit=(e)=>{e.preventDefault();setError('');try{login(form);navigate('/');}catch(err){setError(err.message);} }; 

  return(
    <div className="form-panel">
      <h1>Iniciar Sesión</h1>
      <p>Ingrese su cuenta para continuar.</p>
      <form onSubmit={onSubmit}>
        <input name="email" type="email" placeholder="Email" required value={form.email} onChange={onChange} />
        <input name="password" type="password" placeholder="Contraseña" required value={form.password} onChange={onChange} />
        <button className="btn btn-primary" type="submit">Entrar</button>
        {error&&<p className="error-message">{error}</p>}
      </form>
      <p>¿No tienes cuenta? <Link to="/register">Regístrate</Link></p>
    </div>
  );
}
