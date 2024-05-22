<h1 align="center" style="font-weight: bold;">C.A.P</h1>

<p align="center">
 <a href="#technologies">Tecnologias</a> • 
 <a href="#started">Começando</a> • 
  <a href="#routes">API Endpoints</a> •
 <a href="#colab">Contribuidores</a> •
 <a href="#contribute">Contribuir</a>
</p>

<p align="center">
    <b>Criado pela equipe em favor do projeto,  o “C.A.P – Cadê a Perua?” é uma 
empresa fictícia que desempenha o papel de intermediador do contato diário dos 
pais e responsáveis, disponibilizando-o para a geolocalização o uso da API’S do 
GOOGLE MAPS e a notificação de eventos inesperados que terá um registro a 
parte em um banco de dados nuvem, o FIREBASE . 
Para realizar esse projeto, foi necessário a criação para a plataforma ANDROID, 
já que a plataforma é mais utilizada que o celular, diferente do computador, 
executa das mais diversas operações na palma de sua mão com a pressa de 
estar em diferentes lugares, podendo monitorar a caminho do trabalho e outros. 
O fim do projeto realizado é poder por meio dele facilitar e automatizar o 
processo de mediar a segurança dos menores aos responsáveis por eles. 
Padronizar esses processos, automatizar o que é maçante e ao mesmo garantir 
a segurança de todos os envolvidos não é só um papel da equipe envolvida, mas 
é o que a tecnologia de uns tempos para cá sempre buscou concretizar. Isto 
garantirá que muitos erros decorrentes ao cansaço, desatenção e falta de tempo 
possam enfim terem sua devida análise para um melhor serviço prestado.</b>
</p>

<h2 id="technologies">💻 Tecnologias</h2>

- NodeJS
- JavaScript
- Express
- Axios
- Sequelize
- React Native
- Formik
- Yup 
- Sql Server
- FireBase

<h2 id="started">🚀 Começando</h2>

Here you describe how to run your project locally

<h3>Pré-requisitos</h3>

- [NodeJS](https://nodejs.org/dist/v20.13.1/node-v20.13.1.tar.gz)
- [Axios](https://www.npmjs.com/package/axios/v/1.3.4)
- [Express](https://www.npmjs.com/package/express/v/4.18.2)
- [MsSql](https://www.npmjs.com/package/mssql/v/9.1.1)
- [Nodemon](https://www.npmjs.com/package/nodemon/v/2.0.20)
- [Sequelize](https://www.npmjs.com/package/sequelize/v/6.29.3)

<h3>Clonagem</h3>

```bash
git clone https://github.com/Developers2023/C.A.P.git
```

<h3>Iniciando</h3>

```bash
cd C.A.P
npm i
node index.js
```

<h2 id="routes">📍 API Endpoints</h2>

| rotas               | descrição                                          
|----------------------|-----------------------------------------------------
| <kbd>GET /pessoa/buscarTodos</kbd>       | busca todos os usuários onde o nome for similar ao digitado
| <kbd>POST /pessoa/cadastrar</kbd>        | cadastra um tipo "usuario"
| <kbd>POST /pessoa/login</kbd>            | authentica o usuário
| <kbd>POST /crianca/cadastrar</kbd>       | cadastra um usuário do tipo "crianca"
| <kbd>POST /veiculo/cadastrar/:id</kbd>   | cadastra um tipo "veiculo"
| <kbd>PATCH /pessoa/deletar/:id</kbd>     | deleta os tipos usuario, veiculo e crianca
| <kbd>PATCH /pessoa/atualizar/:id</kbd>   | atualiza os dados de todos od tipos


<h3 id="get-auth-detail">GET /pessoa/buscarTodos</h3>

**REQUEST**
```json
{
  "name": "Keven",
}
```

**RESPONSE**
```json
{
  "nome": "Keven Felix"
}
{
  "nome": "Keven Silva"
}
```

<h3 id="post-auth-detail">POST /pessoa/cadastrar</h3>

**REQUEST**
```json
{
  "tipo": "pessoa",
  "nome": "Keven Felix",
  "sexo": "Masculino",
  "cpf": "44444444444",
  "nascimento": "44/44/4444",
  "email": "Keven@hotmail.com",
  "telefone": "1194444444",
  "senha": "4444444"
}
```

**RESPONSE**
```json
{
  "code": "444444"
}
```

<h3 id="post-auth-detail">POST /pessoa/login</h3>

**REQUEST**
```json
{
  "email": "Keven@hotmail.com",
  "senha": "4444444"
}
```

<h3 id="post-auth-detail">POST /crianca/cadastrar</h3>

**REQUEST**
```json
{
  "nome": "Keven Felix",
  "sexo": "Masculino",
  "instituicao":"etec",
  "nascimento": "44/44/4444",
  "periodo": "manha"
}
```

<h3 id="post-auth-detail">POST /veiculo/cadastrar/:id</h3>

**REQUEST**
```json
{
  "marca": "marca",
  "placa": "xpt4444",
  "ano": "4444",
  "modelo": "modelo",
}
```

<h3 id="post-auth-detail">PATCH /pessoa/deletar/:id</h3>

**REQUEST**
```json
{
}
```
<h3 id="post-auth-detail">PATCH /pessoa/atualizar/:id</h3>

**REQUEST**
```json
{
  "tipo": "pessoa",
  "nome": "Keven Felix",
  "sexo": "Masculino",
  "cpf": "44444444444",
  "nascimento": "44/44/4444",
  "email": "Keven@hotmail.com",
  "telefone": "1194444444",
  "senha": "4444444"
}
```

<h2 id="colab">🤝 Contribuidores</h2>

Um agradecimento especial a todas as pessoas que contribuíram para este projeto.

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/114019476?s=400&u=1e39e9c0aa4d3e05940a718b8090f5eba40dd7eb&v=4" width="100px;" alt="Keven Felix Picture"/><br>
        <sub>
          <b>Keven Felix</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/135772515?v=4" width="100px;" alt="Rafaela Picture"/><br>
        <sub>
          <b>Rafaela</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/103754398?v=4" width="100px;" alt="Foto do Miguel Arcanjo"/><br>
        <sub>
          <b>Miguel Arcanjo</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/102185510?v=4" width="100px;" alt="Foto do Luiz"/><br>
        <sub>
          <b>Luiz</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/135722451?v=4" width="100px;" alt="Foto do Pedro"/><br>
        <sub>
          <b>Pedro</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/109253438?v=4" width="100px;" alt="Foto do Sabrina"/><br>
        <sub>
          <b>Sabrina</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

<h2 id="contribute">📫 Contribuir</h2>

1. `git clone https://github.com/Developers2023/C.A.P.git`
2. `git checkout -b feature/NAME`
3. Siga os padrões de commit
4. Abra um Pull Request explicando o problema resolvido ou recurso realizado, se existir, anexe a captura de tela das modificações visuais e aguarde a revisão!
