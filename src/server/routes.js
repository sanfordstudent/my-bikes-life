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
      "id": 0,
      "name": "Mayer Leonard",
      "city": "Kapowsin",
      "state": "Hawaii",
      "country": "United Kingdom",
      "company": "Ovolo",
      "favoriteNumber": 7
    }
  ];

  res.json(fakeData);
});
