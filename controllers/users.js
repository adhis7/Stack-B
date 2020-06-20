var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('Respond with a resource');
// });

module.exports = {
  index(req, res){
      return res.status(200).send('Respond with a resource - index');
  }//,
  // add(req, res){
  //   return res.send('add User');
// }
}
