function verificar() {
    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;

    let loginValido = /^[13579]{5}$/.test(login); // apenas numeros impares,exatos //
    let senhaValida = /^[02468]{4}$/.test(password); // apenas numeros pares,exatos //

    if (loginValido && senhaValida) {
        alert('login e senha validos!');
    } else {
        alert('login e senha invalidos!\n\nlembre-se:\n- o login deve conter apenas numeros impares');

    }

}
