import * as SecureStore from 'expo-secure-store';

// Função para salvar o token
async function salvarToken(token: string) {
  try {
    await SecureStore.setItemAsync('userToken', token);
    console.log('Token salvo com sucesso!');
  } catch (error) {
    console.log('Erro ao salvar token:', error);
  }
}

// Função para recuperar o token
async function obterToken() {
  try {
    const token = await SecureStore.getItemAsync('userToken');
    if (token) {
      console.log('Token recuperado:', token);
    } else {
      console.log('Nenhum token encontrado');
    }
    return token;
  } catch (error) {
    console.log('Erro ao recuperar token:', error);
  }
}

// Função para deletar o token
async function removerToken() {
  try {
    await SecureStore.deleteItemAsync('userToken');
    console.log('Token removido com sucesso!');
  } catch (error) {
    console.log('Erro ao remover token:', error);
  }
}
