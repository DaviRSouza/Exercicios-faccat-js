export function faccat38() {
    alert("Verificação de Código de Usuário e Senha");

    let codigoUsuario = parseInt(prompt("Digite o código de usuário:"));

    if (codigoUsuario === 1234) {
    let senha = parseInt(prompt("Digite a senha:"));
    if (senha === 9999) {
        alert("Acesso permitido");
    } else {
        alert("Senha incorreta");
    }
    } else {
        alert("Usuário inválido");
    }
}