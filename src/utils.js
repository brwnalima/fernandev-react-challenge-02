const e = document.getElementById("email")
const p = document.getElementById("password")
const btnLogin = document.getElementById("login")

e.addEventListener('input', verificarDados)
p.addEventListener('input', verificarDados)

function verificarDados() {
  const emailValue = e.value;
  const senhaValue = p.value;

  if (senhaValue.length < 6 || emailValue.trim() === "") {
    btnLogin.setAttribute("disabled", "true")
  } else {
    btnLogin.removeAttribute("disabled")
  }
}

export function login({ email, password }) {
  const delay = (0.1 + Math.random() * 2) * 1000;

  // Instruções:
  // * Você tem um formulário de login INCOMPLETO
  // * Não é permitido adicionar novos elementos HTML
  // * Não é permitido usar refs
  //
  // Tarefas:
  // done- O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários.
  // todo - Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos.
  // todo - Desabilite o botão de Login equanto você está executando o login.
  // todo - Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login.
  // todo - Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição.

  return new Promise((resolve, reject) => {


    setTimeout(function () {
      if (password === 'password123' && !!email) {
        resolve();
      }
      else {
        reject({ message: 'e-mail or password wrong.' });
      }
    }, delay);
  })
}
