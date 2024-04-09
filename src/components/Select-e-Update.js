const recuperarNome = async() =>
{
  try {
       const nome = await AsyncStorage.getItem('nome');
       if (nome !== null) {
       setNome(nome);
       }
    } catch (error) {
       console.error('Erro:', error);
       return false;
    }
}

const recuperarEmail = async() =>
{
try {
   const email = await AsyncStorage.getItem('email');
   if (email !== null) {
     setEmail(email);
   }
} catch (error) {
   console.error('Erro:', error);
   return false;
} 
}

const recuperarSenha = async() =>
{
try {
   const senha = await AsyncStorage.getItem('senha');
   if (senha !== null) {
     setSenha(senha);
   }
} catch (error) {
   console.error('Erro:', error);
   return false;
}
}

const recuperarIdade = async() =>
{
try {
   const idade = await AsyncStorage.getItem('idade');
   if (idade !== null) {
     setIdade(idade);
   }
} catch (error) {
   console.error('Erro:', error);
   return false;
}
}

const [dadosUsuario, setDadosUsuario] = useState({
nome: '',
senha: '',
email: '',
idade: '',
});

const atualizarDadosUsuario = async () => {
try {
// Atualizar os dados do usuário com os valores dos campos de entrada
const novosDados = {
 ...dadosUsuario,
 nome: dadosUsuario.nome,
 senha: dadosUsuario.senha,
 email: dadosUsuario.email,
 idade: dadosUsuario.idade
};

await AsyncStorage.setItem('dados_usuario', JSON.stringify(novosDados));
setDadosUsuario(novosDados);

Alert.alert('Sucesso', 'Dados do usuário atualizados com sucesso!');
} catch (error) {
console.error('Erro ao atualizar dados do usuário no AsyncStorage:', error);
Alert.alert('Erro', 'Erro ao atualizar dados do usuário. Por favor, tente novamente.');
}
};

//Executar funções assim que a página for carregada
useEffect(() => {
recuperarNome();
recuperarEmail();
recuperarIdade();
recuperarSenha();
console.log('Recuperando dados');
}, []);