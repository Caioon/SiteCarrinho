export function verificarConta(email, senha){
    console.log('Verificar conta');

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    let user = usuarios.find(u => u.email === email);

    if (!user) {
        usuarios.push({ email, senha });
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
    }

    return user;
}

export function verificarLogin(email, senha){

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const user = usuarios.find(u => u.email === email && u.senha === senha);

    if(user){
        localStorage.setItem('logado', 'true');
        localStorage.setItem('usuarioAtual', email);
    }

    return user;
}
