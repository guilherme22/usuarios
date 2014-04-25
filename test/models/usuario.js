var assert = require('assert')
  , tests
  , Usuario = geddy.model.Usuario;

tests = {

  'after': function (next) {
    // cleanup DB
    Usuario.remove({}, function (err, data) {
      if (err) { throw err; }
      next();
    });
  }

, 'simple test if the model saves without a error': function (next) {
    var usuario = Usuario.create({});
    usuario.save(function (err, data) {
      assert.equal(err, null);
      next();
    });
  }

, 'test stub, replace with your own passing test': function () {
    assert.equal(true, false);
  }

};

module.exports = tests;
