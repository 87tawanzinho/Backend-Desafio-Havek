Esse é o backend da aplicação

Clone o repositorio e use npm i, mas certifique-se de usar suas credenciais 

Para o backend eu utilizei NODEJS + EXPRESSJS + TYPESCRIPT e MONGODB/MONGOOSE

Crie uma conta no MONGODB, crie um banco de dados e pegue a string de conexão, se conecte usando as credenciais 
A mesma coisa com o cloudinary


Foi utilizado o padrão MVC para melhor organização de codigo 
Foi separado duas pastas e dois modelos (user e cars) onde fazemos uma relação entre eles, e dizemos que o usuario é dono de X carro
Para melhor organização, fiz cada rota em um arquivo separado
Utilizei Cloudinary para fazer o upload de fotos


Ao fazer login é criado um token, não há limites para expirar

Na parte do front end, está setado três coisas no localstorage ao fazer login: TOKEN, NOME E ID 

Caso a gente receba um token, então será feita a autorização, caso não for, não será autorizado.


Rotas:

router.post("/createUser", registerUser); // cria um usuario <br>
router.post("/loginUser", loginUser); // faz login <br>
router.get("/userCars/:id", getCarByUser); // pega os carros que o usuario criou pelo id <br>
router.post("/createCar", verifyToken, upload.single("photo"), createCar); // cria o carro (precisa de token) <br>
router.get("/", getCar); // pega todos os carros <br>
router.delete("/user/:userId/car/:carId", verifyToken, deleteCar); // deleta um carro (precisa de token) <br>
router.put("/editCar/:carId/:userId", verifyToken, editCar);  // edita o carro do usuario (precisa de token) <br>

https://backend-desafio-havek.vercel.app/
