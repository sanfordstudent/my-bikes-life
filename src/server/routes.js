var fs          = require('fs'),
    path        = require('path'),
    express     = require('express'),
    bodyParser  = require('body-parser'),
    app         = express();


app.set('port', (3000));

app.use('/', express.static(path.join(__dirname, '../client/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});

app.get('/data', function(req, res){
  var fakeData =  [
    {
    "id": "b105767",
    "primary": false,
    "name": "Softail POS Trek Garbage Bike",
    "distance": 47612.8,
    "resource_state": 3,
    "brand_name": "Cannondale",
    "model_name": "Slice",
    "frame_type": 4,
    "description": "Best bike EVER!!",
    "See rides": "http://fakelink"
  },
  {
    "id": "b105763",
    "primary": false,
    "name": "Cannondale TT",
    "distance": 476612.8,
    "resource_state": 3,
    "brand_name": "Surly",
    "model_name": "Long Haul Trucker",
    "frame_type": 4,
    "description": "Second best bike EVER!!",
    "See rides": "http://notreal"
  }
  ];

  res.json(fakeData);
});
