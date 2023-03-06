// Importa o SDK do AWS para utilizar os serviços da plataforma
var AWS = require('aws-sdk');

// Cria um objeto do DocumentClient para interagir com o DynamoDB
const dynamodb = new AWS.DynamoDB.DocumentClient();

// Define a função Lambda
exports.handler = async (event) => {
    
    // Inicializa as variáveis responseBody e statusCode
    let responseBody = ""
    let statusCode = 0
    
    // Extrai o id e o price do corpo da requisição
    let {id, name, price} = JSON.parse(event.body);
    
    // Define as propriedades do item a ser inserido no DynamoDB
    const params = {
      TableName : 'AwsBootCamp',
      /* Item properties will depend on your application concerns */
      Item: {
         id: id,
         name: name,
         price: price
      }
    }
    
    try {
        // Insere o item na tabela do DynamoDB
        await dynamodb.put(params).promise();
        // Define o código de sucesso e uma mensagem de resposta bem-sucedida
        statusCode = 200;
        responseBody = JSON.stringify('Item inserido com sucesso!');
        
    } catch (err) {
        // Se houver um erro, define o código de sucesso e uma mensagem de erro na resposta
        statusCode = 200;
        responseBody = JSON.stringify(err);
        
    }
    
    // Define a resposta com o código de status e o corpo da resposta
    const response = {
        statusCode: statusCode,
        body: responseBody,
    };
    
    // Retorna a resposta
    return response;
};
