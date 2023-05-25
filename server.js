const jsonServer = require('json-server');
const app = jsonServer.create();
const router = jsonServer.router('db.json');
const middleware = jsonServer.defaults();


app.use(middleware);
app.use(router);

app.listen('8080',()=>{
    console.log(`Json server is running at the port 8080`);
})