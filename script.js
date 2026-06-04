document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelector('input[type="password"]').value;

    if(email && password) {
        console.log("Tentativa de login com:", email);
        alert("Login realizado com sucesso!");
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});
