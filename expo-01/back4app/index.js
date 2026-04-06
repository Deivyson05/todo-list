import axios from "axios";

const urlBase = "https://parseapi.back4app.com/classes/Tarefa";
const headers = {
  "X-Parse-Application-Id": "gtUStBBJcKj8YW8GZVg4fSvZd3Ya3Hb9giKMaDyo",
  "X-Parse-JavaScript-Key": "drSgDDjEQkflViBBk8P0D19GmXY8Oi05kXKV6NQ0",
};
const headersJson = {
  ...headers,
  "Content-Type": "application/json",
};

export async function getTarefas() {
  const response = await axios.get(urlBase, {
    headers: headers,
  });
  console.log("dados: ", response.data);
  return response.data.results;
}

export async function adicionarTarefa(novaTarefa) {
  const response = await axios.post(urlBase, novaTarefa, {
    headers: headersJson,
  });
  console.log("dados: ", response.data);
  return response.data;
}

export async function concluirTarefa(id) {
  const response = await axios.put(
    `${urlBase}/${id}`,
    { concluida: true },
    {
      headers: headersJson,
    }
  );
  console.log("dados: ", response.data);
  return response.data;
}

export async function excluirTarefa(id) {
  const response = await axios.delete(`${urlBase}/${id}`, {
    headers: headers,
  });
  console.log("dados: ", response.data);
  return response.data;
}

export async function desmarcarTarefa(id) {
  const response = await axios.put(
    `${urlBase}/${id}`,
    { concluida: false },
    {
      headers: headersJson,
    }
  );
  console.log("dados: ", response.data);
  return response.data;
}