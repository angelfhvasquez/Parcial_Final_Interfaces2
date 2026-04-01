import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Register() {
  const [form,setForm]=useState({name:'',email:'',password:''});
  const [error,setError]=useState('');
  const [success,setSuccess]=useState('');
  const {register}=useAuth();
  const navigate=useNavigate();

  const onChange=(e)=>setForm(p=>({...p,[e.target.name]:e.target.value}));
  const onSubmit=(e)=>{e.preventDefault();setError('');setSuccess('');try{register(form);setSuccess('Registrado con éxito!');setTimeout(()=>navigate('/login'),900);}catch(err){setError(err.message);} };

  return(
    <div className="form-panel">
      <h1>Registro</h1>
      <p>Crea tu cuenta para ordenar rápido.</p>
      <form onSubmit={onSubmit}>
        <input name="name" placeholder="Nombre" required value={form.name} onChange={onChange} />
        <input name="email" type="email" placeholder="Email" required value={form.email} onChange={onChange} />
        <input name="password" type="password" placeholder="Contraseña" required value={form.password} onChange={onChange} />
        <button className="btn btn-primary" type="submit">Registrar</button>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
      </form>
      <p>¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link></p>
    </div>
  );
}
