const path = require('path');

module.exports = function (app) {
    
    app.get('/', function(req,res){
        console.log("hitting home html");
        res.sendFile(path.join(__dirname, '../publicFacing/home.html'));
    });

    app.get('/reserve', function(req, res){
        console.log("hitting reserve html");
        res.sendFile(path.join(__dirname, '../publicFacing/reserve.html'));
    });

    app.get('/table', function(req, res){
        console.log("hitting table html");
        res.sendFile(path.join(__dirname, '../publicFacing/table.html'));

    });

    app.get('/api/userData', function (req, res) {
        console.log("getting userData");
        return res.json(userData);
    })
    app.get('/api/waitListData', function (req, res) {
        console.log("hitting waitlist data");
        return res.json(waitListData);
    })
    
    app.post('/api/userData', function(req, res){
        if (userData.length < 5){
            userData.push(req.body);
            console.log("pushed userdata");
            res.json(true);
        }
        else{
            waitListData.push(req.body);
            console.log("pushed waitlistdata");
            res.join(false);
        }
    });

    app.post('/api/clear', function(req, res){
        userData.length = 0;
        waitListData.length = 0;

        res.join({ok: true});
    });


};



// //api router
// //====================================================
// const userData = require('../data/userData');
// const waitListData = require('../data/waitListData');

// module.exports = function (app){

//     app.get('/api/userData', function (req, res) {
//         return res.json(userData);
//     })
//     app.get('/api/waitListData', function (req, res) {
//         return res.json(waitListData);
//     })
    
//     app.post('/api/userData', function(req, res){
//         if (userData.length < 5){
//             userData.push(req.body);
//             res.json(true);
//         }
//         else{
//             waitListData.push(req.body);
//             res.join(false);
//         }
//     });

//     app.post('/api/clear', function(req, res){
//         userData.length = 0;
//         waitListData.length = 0;

//         res.join({ok: true});
//     });

// };

