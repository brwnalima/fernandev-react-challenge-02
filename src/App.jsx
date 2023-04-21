import { login } from './utils';
import './index.css';
import { useState } from 'react';


// Instruções:
// * Você tem um formulário de login INCOMPLETO
// * Não é permitido adicionar novos elementos HTML
// * Não é permitido usar refs
//
// Tarefas:
// done- O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários.
// done - Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos.
// done - Desabilite o botão de Login equanto você está executando o login.
// done - Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login.
// done - Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição.

export default function LoginForm() {

  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [error, setError] = useState(null);
  const [isRequesting, setIsRequesting] = useState(false);

  const handleSubmit = () => {
    console.log("clicou");

    setError(null);
    setIsRequesting(true);

    let values = { email: input1, password: input2 }

    login(values)
      //tratando a promise
      .then((sucess) => {
        alert(sucess.message)
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message)
      })
      .finally(() => {
        setIsRequesting(false)
      }) // finally roda sempre, independente se cai no then ou catch
  }

  return (
    <div className='wrapper'>
      <div className='login-form'>
        <h1>LOGIN</h1>
        {/* Coloque a mensagem de erro de login na div abaixo. Mostre a div somente se houver uma mensagem de erro. */}
        {error && <div className='errorMessage'>{error}</div>}
        <div className='row'>
          <input placeholder='E-mail' id={'email'} type={'email'} value={input1} onChange={(e) => setInput1(e.target.value)} autoComplete='off' />
        </div>
        <div className='row'>
          <input placeholder='Password' id={'password'} type={'password'} value={input2} onChange={(e) => setInput2(e.target.value)} />
        </div>

        <div className='button'>
          <button id='login' disabled={input2.length < 6 || input1 === "" || isRequesting}
            onClick={handleSubmit}>Login</button>
        </div>
      </div>
    </div>
  );
}
