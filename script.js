let cntrCadastro = document.querySelector(".cntrCadastro")
let cntrLogin = document.querySelector(".cntrLogin")

let cntrConteudoLogin = document.querySelector(".cntrConteudoLogin")
let cntrConteudoCadastro = document.querySelector(".cntrConteudoCadastro")

let molaCadastro = document.querySelector(".molaCadastro")
let molaLogin = document.querySelector(".molaLogin")

let cntrH1TitleEsquerda = document.querySelector(".cntrH1TitleEsquerda")
let cntrH1TitleDireita = document.querySelector(".cntrH1TitleDireita")

let btnModTxt = document.querySelector(".textBtnSignIn")

let tempoMedioAnimation = 2

let esqueceuSenha = document.querySelector(".esqueceuSenha")

let titleConteudo = document.querySelector(".titleConteudo")
let btnSubmit = document.querySelector(".btnSubmit")

let cntrInputNome = document.querySelector(".cntrInputNome")
let cntrInputEmail = document.querySelector(".cntrInputEmail")
let cntrInputSenha = document.querySelector(".cntrInputSenha")

let inputSenha = document.getElementById("senhaCadastrar")
let inputEmail = document.getElementById("emailCadastrar")
let inputNome = document.getElementById("nomeCadastrar")

let alertaNome = document.getElementById("alertaNome")
let alertaEmail = document.getElementById("alertaEmail")
let alertaSenha = document.getElementById("alertaSenha")

let modEntrada = 0

let contador = 0
function bntMod() {

    cntrCadastro.style.animation = "cntrCadastro " + tempoMedioAnimation + "s both"

    setTimeout(() => {
        cntrCadastro.style.animation = ""    
    }, tempoMedioAnimation + "000");

    setTimeout(() => {
        inputSenha.value = ""
        inputEmail.value = ""
        inputNome.value = ""
    
        alertaNome.style.display = "none"
        alertaEmail.style.display = "none"
        alertaSenha.style.display = "none"

        esqueceuSenha.style.borderBottom = "2px solid #ddd"

    }, (tempoMedioAnimation/2) + "000");


    contador++
    if (contador == 1) {

        setTimeout(() => {
            btnModTxt.innerHTML = "Entrar"
            titleConteudo.innerHTML = "Criar conta"
            btnSubmit.innerHTML = "CADASTRAR"
            esqueceuSenha.style.display = "none"
            cntrInputNome.style.display = "flex"
            modEntrada = 1;

        }, (tempoMedioAnimation/2) + "000");
        
        forLogin()

    }
    else if(contador == 2){

        setTimeout(() => {
            btnModTxt.innerHTML = "Cadastrar"
            titleConteudo.innerHTML = "Faça login em sua conta"
            btnSubmit.innerHTML = "Entrar"
            esqueceuSenha.style.display = "block"
            cntrInputNome.style.display = "none"
            modEntrada = 0;

        }, (tempoMedioAnimation/2) + "000");

        forCadastro()

        contador = 0
    }
}

function forCadastro(){
    molaLogin.style.animation = "molaLogin " + tempoMedioAnimation + "s both"
    molaCadastro.style.animation = "molaCadastro " + tempoMedioAnimation + "s both"
    cntrConteudoLogin.style.animation = "widthLogin " + tempoMedioAnimation + "s normal"

    cntrH1TitleDireita.style.animation = "cntrH1TitleDireita " + tempoMedioAnimation + "s both"
    cntrH1TitleEsquerda.style.animation = "cntrH1TitleEsquerdaReverse " + tempoMedioAnimation + "s both"
    btnModTxt.style.animation = "textBtnSignIn " + tempoMedioAnimation + "s normal"

    setTimeout(() => {
        cntrConteudoLogin.style.animation = ""
        btnModTxt.style.animation = ""
    }, tempoMedioAnimation + "000");


}
function forLogin(){
    molaLogin.style.animation = "molaLoginReverse " + tempoMedioAnimation + "s both"
    molaCadastro.style.animation = "molaCadastroReverse " + tempoMedioAnimation + "s both"
    cntrConteudoLogin.style.animation = "widthLogin " + tempoMedioAnimation + "s normal"

    cntrH1TitleDireita.style.animation = "cntrH1TitleDireitaReverse " + tempoMedioAnimation + "s both"
    cntrH1TitleEsquerda.style.animation = "cntrH1TitleEsquerda " + tempoMedioAnimation + "s both"
    btnModTxt.style.animation = "textBtnSignIn " + tempoMedioAnimation + "s normal"

    setTimeout(() => {
        cntrConteudoLogin.style.animation = ""
        btnModTxt.style.animation = ""
    }, tempoMedioAnimation + "000");


}

function visibilidadeSenha(classOlho){
    
    document.querySelectorAll(".cntrSvgOlhosSenha")[0].style.display = "block"
    document.querySelectorAll(".cntrSvgOlhosSenha")[1].style.display = "block"

    document.querySelector(classOlho).style.display = "none"

    if (classOlho == ".olhoAberto") {
        inputSenha.type = "password";
    }
    else if (classOlho == ".olhoFechado") {
        inputSenha.type = "text";
    }
}

function btnSubmitClick() {
    let iconAlert = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 90 90" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M45.109 58.026a5.733 5.733 0 0 1 5.734 5.74 5.73 5.73 0 0 1-5.734 5.729c-3.167 0-5.734-2.563-5.734-5.729s2.567-5.734 5.734-5.74zm-2.417-37.443h4.839c2.271 0 4.099 2.109 4.099 4.729l-1.438 23.229c0 2.62-1.833 4.729-5.083 4.729s-5.078-2.109-5.078-4.729l-1.438-23.229c.001-2.619 1.829-4.729 4.099-4.729zm2.417-11.426c-19.817 0-35.885 16.063-35.885 35.885 0 19.817 16.067 35.88 35.885 35.88 19.816.006 35.884-16.063 35.884-35.88 0-19.822-16.067-35.885-35.884-35.885z" fill="#000000" data-original="#000000"></path></g></svg>'
    
    if (modEntrada == 0) {
        //entrar

        if (inputEmail.value == '' || inputEmail.value.indexOf("@") == -1 || inputEmail.value.indexOf(".com") == -1) {
            alertaEmail.style.display = "flex"
            alertaEmail.innerHTML = iconAlert + "Preencha seu email corretamente"
            cntrInputEmail.style.backgroundColor = "#fdd3d3"
        }
        else if (inputSenha.value == '') {
            alertaEmail.style.animation = ""
            alertaEmail.style.display = "none"
            cntrInputEmail.style.backgroundColor = "#eee"

            alertaSenha.style.display = "flex"
            alertaSenha.innerHTML = iconAlert + "Digite sua senha"
            cntrInputSenha.style.backgroundColor = "#fdd3d3"

        }
        else if (inputSenha.value != localStorage.getItem("Senha")) {
            alertaEmail.style.animation = ""
            alertaEmail.style.display = "none"
            cntrInputEmail.style.backgroundColor = "#eee"
            cntrInputSenha.style.backgroundColor = "#eee"

            alertaSenha.style.display = "flex"
            alertaSenha.innerHTML = iconAlert + "Email ou senha incorreta"
            esqueceuSenha.style.borderBottom = "2px solid #3aa7ae"
        }
        else{
            alertaNome.style.animation = ""
            alertaNome.style.display = "none"
            alertaEmail.style.animation = ""
            alertaEmail.style.display = "none"
            alertaSenha.style.animation = ""
            alertaSenha.style.display = "none"
            cntrInputNome.style.backgroundColor = "#eee"
            cntrInputEmail.style.backgroundColor = "#eee"
            cntrInputSenha.style.backgroundColor = "#eee"

        }
    }
    else if (modEntrada == 1) {
        //cadastrar


        if (inputNome.value == '' || inputNome.value.length <= 5) {
            alertaNome.style.display = "flex"
            alertaNome.innerHTML = iconAlert + "Preencha seu nome corretamente"
            cntrInputNome.style.backgroundColor = "#fdd3d3"

        }
        else if (inputEmail.value == '' || inputEmail.value.indexOf("@") == -1 || inputEmail.value.indexOf(".com") == -1) {
            alertaNome.style.animation = ""
            alertaNome.style.display = "none"
            cntrInputNome.style.backgroundColor = "#eee"
 
            alertaEmail.style.display = "flex"
            alertaEmail.innerHTML = iconAlert + "Preencha seu email corretamente"
            cntrInputEmail.style.backgroundColor = "#fdd3d3"

        }
        else if (inputSenha.value.length <= 5) {
            alertaEmail.style.animation = ""
            alertaEmail.style.display = "none"
            cntrInputEmail.style.backgroundColor = "#eee"

            alertaSenha.style.display = "flex"
            alertaSenha.innerHTML = iconAlert + "Senha muito curta"
            cntrInputSenha.style.backgroundColor = "#fdd3d3"


        }else{
            alertaNome.style.animation = ""
            alertaNome.style.display = "none"
            alertaEmail.style.animation = ""
            alertaEmail.style.display = "none"
            alertaSenha.style.animation = ""
            alertaSenha.style.display = "none"
            cntrInputNome.style.backgroundColor = "#eee"
            cntrInputEmail.style.backgroundColor = "#eee"
            cntrInputSenha.style.backgroundColor = "#eee"
            localStorage.setItem("Senha", inputSenha.value)
        }

    }
}



//ancora