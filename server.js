const express = require('express');
const app = express();
const path = require('path');
const url = require('url');

app.set(path.join(__dirname));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));



app.get('/getsomedata',function(req,res){
	const url_parts = url.parse(req.url, true);
	let query = String(url_parts.query.showData);
	if(query === 'true'){
		console.log("balleee");
		res.json([2,51,5,46,234,13,325]);
	}
	else
		res.json([]);
})

app.get('/*',function(req,res){
	res.render('./index.ejs');
})
app.listen("3000",()=>{
	console.log("listening to port ");
})