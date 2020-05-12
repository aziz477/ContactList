const express = require('express');
const app = express();
const {MongoClient,ObjectID} = require('mongodb');
const assert=require('assert');
const bodyParser = require('body-parser');


//middleweare

app.use(bodyParser.json());

// connect to database

const mongoUrl = "mongodb://localhost:27017";
const dataBase = "contactList";
MongoClient.connect(mongoUrl, { useUnifiedTopology: true }, (err, client) => {
    assert.equal(err, null, "... dataBase Connection failed ...");
    const db = client.db(dataBase);

    // API
    // Get contact list read all contacts)
    app.get("/contact_list", (req, res) => {
        db.collection("contacts")
            .find()
            .toArray((err, data) => {
                if (err) res.send("can not get contact list");
                else res.send(data);
            });
    });

    // read one contact

    app.get("/contact_list/:id",(request,response)=>{
        let id = ObjectID(request.params.id);
        db.collection("contact").find({_id:id}).then(data=>response.send(data)).catch(err=>console.error(err))

    });

    // Add a contact
    app.post("/add_contact", (req, res) => {
        let newContact = req.body;
        db.collection("contacts")
            .insertOne({ ...newContact })
            .then((data) =>
                res.send({
                        message: "Contact added succesfully",
                        data: data,
                    })
                    .catch((err) => console.error(err))
            );
    });

    // request Update a contact
    app.put("/update_contact/:id", (requeste, respoonse)=>{

        const id = ObjectID(requeste.params.id);
        let ContactToUpdate = requeste.body;
        db.collection("contacts").findOneAndUpdate({_id:id},{$set:{...ContactToUpdate}})
            .then(data=>respoonse.send({message:'contact is updated',data:data}))
            .catch(err=>console.error(err));

    });

    //request delete a contact

    app.delete('/delete_contact/:id',(requeste,response)=>{

        const id = ObjectID(requeste.params.id);

        db.collection('contacts')
            .findOneAndDelete({_id:id})
            .then(data=>response.send({message:'contact is delete with sucessfully',data:data})
                .catch(err=>console.error(err)));


    });

});

// create server

app.listen(8000 , (err)=>{

    if(err) console.log('server is not working');
    else console.log('server is connected');

});

