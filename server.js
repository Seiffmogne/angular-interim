const express= require('express');
const { path } = require('express/lib/application');
const app=express();

app.use(express.static('dist/auto'));

app.get('/*',(req,res)=>{
res.status(200).sendFile(path.join(__dirname+'dist/auto-copie/index.html'));
});

//LAst change

const port=process.env.PORT || 8080;

app.listen(process.env.PORT || 8080, ()=>{
    console.log(`Listening on Port ${port} ...`);
});
