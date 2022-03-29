const express= require('express');
const app=express();

app.use(express.static(__dirname+ '/dist'));

app.all('*',(re,res)=>{
res.status(200).sendFile(__dirname+ '/dist/index.html');
});

const port =process.env.PORT || 8080;

app.listen(port);
