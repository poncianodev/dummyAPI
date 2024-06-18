// Consumindo Dummy API

// FUNÇÃO PARA BUSCAR TODOS OS USUARIOS DA API

async function getUsers() {
  const response = await fetch("https://dummyapi.io/data/v1/user?created=1", {
    headers: {
      "app-id": "6670d473d59dcdf163a4932d",
    },
  });
  const dados = await response.json();

  console.log(dados.data);
}

getUsers();

// FUNÇÃO PARA BUSCAR UM USUÁRIO ESPECÍFICO PELO ID

async function getUser() {
  const response = await fetch(
    "https://dummyapi.io/data/v1/user/6670df7f17660c46615ec467",
    {
      headers: {
        "app-id": "6670d473d59dcdf163a4932d",
      },
    }
  );

  const dados = await response.json();
  console.log(dados);
}

getUser();

// FUNÇÃO PARA CRIAR UM NOVO USUÁRIO

async function createUser() {
  const userData = {
    firstName: "Inarai",
    lastName: "Silva",
    email: "inaraifsilva@gmail.com",
  };

  try {
    await fetch("https://dummyapi.io/data/v1/user/create/", {
      headers: {
        "app-id": "6670d473d59dcdf163a4932d",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
      method: "POST",
    });
  } catch (e) {
    console.log("Deu erro!:", e);
  }
}

createUser();

// FUNÇÃO PARA DELETAR UM USUÁRIO

async function deleteUser() {
  await fetch("https://dummyapi.io/data/v1/user/6670e00817660c8dca5ec49b", {
    method: "DELETE",
    headers: {
      "app-id": "6670d473d59dcdf163a4932d",
    },
  });
}

deleteUser();
