# Desafio adicionando segurança em APIs na AWS com Amazon Cognito
# Serviços AWS utilizados

# Amazon Cognito
# Amazon DynamoDB
# Amazon API Gateway
# AWS Lambda


Integração de Amazon Cognito, AWS Lambda e DynamoDB
Este projeto é um exemplo de como integrar as ferramentas Amazon Cognito, AWS Lambda e DynamoDB para criar um sistema de registro e autenticação de usuários, permitindo o acesso a endpoints de API autorizados e a realização de operações de CRUD em um banco de dados NoSQL.

Configuração
Amazon Cognito
Crie um pool de usuários no Amazon Cognito e configure as políticas de senha, e-mail e outras configurações relevantes.

Registre seu aplicativo no Amazon Cognito e configure o fluxo de autenticação, como o fluxo de login do usuário.

AWS Lambda
Crie uma nova função AWS Lambda e selecione a linguagem de programação de sua preferência.

Adicione as permissões necessárias para a função Lambda acessar outros serviços AWS, como DynamoDB.

Escreva o código para sua função Lambda, como criar, atualizar ou excluir itens no DynamoDB.

DynamoDB
Crie uma tabela DynamoDB e defina as chaves de partição e ordenação.

Configure as políticas de acesso e segurança da tabela para permitir que a função Lambda acesse os dados.

Uso
Use o SDK do Amazon Cognito para registrar e autenticar usuários em seu aplicativo.

Use os autorizadores do Amazon Cognito para permitir o acesso a endpoints de API restritos a usuários autenticados.

Use a função Lambda para realizar operações de CRUD no DynamoDB, como criar, atualizar ou excluir itens.

Licença
Este projeto é dedicado ao domínio público sob os termos da licença Unlicense. Veja o arquivo UNLICENSE para mais detalhes.
