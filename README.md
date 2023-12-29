Esse é o backend da aplicação

Para o backend eu utilizei NODEJS + EXPRESSJS + TYPESCRIPT e MONGODB/MONGOOSE

Foi utilizado o padrão MVC para melhor organização de codigo 
Foi separado duas pastas e dois modelos (user e cars) onde fazemos uma relação entre eles, e dizemos que o usuario é dono de X carro
Para melhor organização, fiz cada rota em um arquivo separado
Utilizei Cloudinary para fazer o upload de fotos


Ao fazer login é criado um token, não há limites para expirar

Na parte do front end, está setado três coisas no localstorage ao fazer login: TOKEN, NOME E ID 

Caso a gente receba um token, então será feita a autorização, caso não for, não será autorizado.
