# API Web QR Code Generator

Um desafio proposto pelo curso de Introdução ao JavaScript do MBA em Data Science e Analytics da USP, este projeto consiste no desenvolver de uma API Web geradora de código QR usando o NodeJS.

<br>

<div align="center">

![QR Code Generator](https://user-images.githubusercontent.com/104532249/226786735-c4874692-bec3-45fa-ae2f-53e94fb8b34a.gif)

</div>


<br>

---
### Execução

Para executar este microsserviço, primeiramente, é necessário instalar o módulo *express* para criação de APIs Web executando o comando **1**. E então, instalar o módulo gerador de QR Code por meio do comando **2**. Para iniciar a API execute o comando **3**. 

**1.** `npm install express`

**2.** `npm install easyqrcodejs-nodejs`

**3.** `node index_express.js`

<br>

---
### Métodos
Esta API possui dois métodos, o GET e o POST. Por meio do método GET é possível verificar se a rota está funcionado. E, o método POST possibilita gerar o código QR do texto informado na requisição (vide exemplo a seguir).   
<br>

```
{
  "text": "github.com/Mariana-Alvim"
}
```

---
### Acesso
Esta API pode ser acessada na porta `3000`. 
<br>

---
### Endpoints
<div align="center">

|Endpoint|Método|
|---|---|
|/|GET|
|/qrcode|POST|

</div>

<br>
