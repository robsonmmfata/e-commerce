const  express  =  require ( 'express' ) ;
const  env  =  require('dotenv');
const  app  =  express ( ) ;
const bodyParser =  require ( 'body-parser');
const mongoose =  require ( 'mongoose');
const User = require ( './models/user');

//rotas
const userRoutes =  require ( './routes/user');


//variável de ambiente ou você pode dizer constante
env.config();

//mongodb conexão
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@apicluster.um6zp.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      }
    
    )
    
    .then(() =>{
        console.log('conectado ao mongodb');
    }) 
      
    
    
    ;
//mongodb+srv://robsonmmf:<password>@apicluster.um6zp.mongodb.net/?retryWrites=true&w=majority


app.use(bodyParser());

app.use('/api', userRoutes);


app.listen(process.env.PORT,() =>{
console.log(`server ta on na ${process.env.PORT}`);

})