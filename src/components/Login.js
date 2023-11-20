import React, { useState } from 'react';
import Dados from './dados.json'
import styled from 'styled-components'
import Button from './Button'

const FormLogin = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    height: 70vh;

    form {
      display:flex;
      padding: 40px 180px 40px 180px;
      width: 30%;
      height: 55%;
      background-color: #fff;
      flex-direction: column;
      justify-content:center;
      font-size: 18px;

      input {
        height: 35px;
      }
    }
`

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simula uma chamada assíncrona para validar as credenciais
    try {
      const usuarioValido = Dados.usuarios.find((user) => user.username === username && user.senha === password)

      if (usuarioValido) {
        onLogin(username);
        setError('');
      } else {
        setError('Credenciais inválidas. Tente novamente.');
      }
    } catch (error) {
      setError('Erro ao carregar os dados. Tente novamente mais tarde.');
    }
  };

  return (
    <FormLogin>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            />
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
          {/* <button type="submit"> Login </button> */}
          <Button/>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    </FormLogin>
  );
};

export default LoginForm;