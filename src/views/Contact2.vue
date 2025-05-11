<template>
  <form action="https://formsubmit.co/leo-maran1@hotmail.com" method="POST">
    <label for="name">Nome</label>
    <input id="name" type="text" name="name" required />
    <label for="email">E-mail</label>
    <input id="email" type="email" name="email" required />
    <button type="submit">Enviar</button>
    <input type="hidden" name="_captcha" value="false" />
    <input type="hidden" name="_subject" value="consulta" />
    <input type="hidden" name="_template" value="table" />
  </form>
</template>
<style scoped>
input {
  display: block;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-bottom: 10px;
}
</style>