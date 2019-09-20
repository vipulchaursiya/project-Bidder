const express =require('express');
const cors =require('cors');
const bodyParser= require('body-parser');
const MongoClient =require('mongodb').MongoClient;
 

const app =express();
app.use(cors()); 
let client = new MongoClient('mongodb://localhost:27017/bidder',{useNewUrlParser:true})
let connection;
client.connect( (err,conn) =>{
    if(!err){
        connection=conn;
        console.log("database connection establishded");
   }
   else{
       console.log("not established");
   }
})
///////// check sign up email
app.post('/checkmail',bodyParser.json(),(req,res) => {    
    var collection=connection.db('bidder').collection('userdata');
    collection.find({email:req.body.email}).toArray( (err,doc) =>{
        if(!err && doc.length>0){
            res.send({ status:"true"})        
        }
        else {
            res.send({ status:"false"})           
        }
    })
})
  

//////sign up data
app.post('/signupformdata',bodyParser.json(),(req,res)=> {
   // console.log(req.body);
    var collection=connection.db('bidder').collection('userdata');
    collection.insertOne( req.body, (err,doc)=>{
        if(!err){
            res.send({status:"ok",docs:doc})
            }
    })
})



///// login api
app.post('/userformdata',bodyParser.json(), (req,res) =>{
    
    var collection=connection.db('bidder').collection('userdata');
    //console.log(req.body);
    collection.find({email:req.body.email,password:req.body.password}).toArray((err,docs)=>{
         
         //console.log(req.body);
        // console.log(docs);
        if( !err && docs.length>0){
            res.send({status:"okkk",doc:docs})
        }}  
    )}
)

////// create new plan api
app.post('/planformdata',bodyParser.json(), (req,res) =>{    
    
    var collection=connection.db('bidder').collection('plandata');
        collection.insertOne(req.body, (err,doc) =>{
            if(!err){
                res.send({status:"ok",std:doc})                
               console.log(doc);
            }
        })
})

////show  plan api
app.get('/showplandata',bodyParser.json(),(req,res) =>{
    collection=connection.db('bidder').collection('plandata');
    collection.find({}).toArray((err,doc)=>{
        if(!err && doc.length>0){
            res.send({docs:doc})
           // console.log(doc);
        }
        else{
            res.send({status:"failed", message:"no document found"});
        }
    })
})
// app.use(bodyParser.urlencoded({
//     extended: true
//   }));

/////for deleteplam from show plan API
app.post('/deleteplan',bodyParser.json(),(req,res) =>{
    collection=connection.db('bidder').collection('plandata') 
    console.log("in 91");
    console.log(req.body);
    collection.remove({Planname:req.body.planName}, (err,r) =>{
     console.log("insertion result");
        console.log(r);
        
        if(!err){
            res.send({status:"ok",docs:r})
        }
        else{
            res.send({status:"failed", docs:err})
        }
                      
                       })
})


app.listen(4100,() =>{console.log("API started runnning on 4100 port")});