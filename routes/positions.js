var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');

var db = mongojs('mongodb://euclide:1234@ds229878.mlab.com:29878/transituc_db', ['positions']);


// GET all Positions
router.get('/positions', function(req, res, next){
    db.positions.find(function(err, positions){
        if(err){
            res.send(err);
        }
        res.json(positions);
    });
});

// GET all Devices
router.get('/devices', function(req, res, next){
    db.positions.distinct('imei', {}, function(err, devices){
        if(err){
            res.send(err);
        }
        res.json(devices);
    });
});

// Get Single Position
router.get('/position/:id', function(req, res, next){
    db.positions.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, position){
        if(err){
            res.send(err);
        }
        res.json(position);
    });
});

// Get positions by IMEI, order by 'data_read_utc_time'
router.get('/positions/:imei(\\d+)/', function(req, res, next){
    db.positions.find({ imei: parseInt(req.params.imei)}).sort({data_read_utc_time:1}).limit(160, function(err, positions){
        if(err){
            res.send(err);
        }
        res.json(positions);
    });
});

//Save Position
router.post('/position', function(req, res, next){
    var position = req.body;
    if(!position.imei || !position.gps_utc_time || !position.data_read_utc_time){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.positions.save(position, function(err, position){
            if(err){
                res.send(err);
            }
            res.json(position);
        });
    }
});

// Delete Position
router.delete('/position/:id', function(req, res, next){
    db.positions.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, position){
        if(err){
            res.send(err);
        }
        res.json(position);
    });
});

// Update Position
router.put('/position/:id', function(req, res, next){
    var position = req.body;
    var updPosition = {};

    if(position.imei) {
        updPosition.imei = position.imei;
    }

    if(position.gps_utc_time) {
        updPosition.gps_utc_time = position.gps_utc_time;
    }

    if(position.data_read_utc_time) {
        updPosition.data_read_utc_time = position.data_read_utc_time;
    }
    
    if(!updPosition){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    } else {
        db.positions.update({_id: mongojs.ObjectId(req.params.id)},updPosition, {}, function(err, position){
        if(err){
            res.send(err);
        }
        res.json(position);
    });
    }
});

module.exports = router;