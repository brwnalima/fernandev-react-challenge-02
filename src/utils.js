
export function login({ email, password}) 
/* é um objeto com dois componentes e não um atributo */ {
  const delay = (0.2  + Math.random() * 2) * 1000;

  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (password === 'password123' && !!email) {
        resolve({ message: 'Login realizado com sucesso!' });
      }
      else {
        reject({ message: 'E-mail ou senha não encontrado.' });
      }
    }, delay);
  })
}

