var CreateUsuarios = function () {
  this.up = function (next) {
    var def = function (t) {
          t.column('login', 'string');
          t.column('password', 'string');
          t.column('lastName', 'string');
          t.column('firstName', 'string');
        }
      , callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.createTable('usuario', def, callback);
  };

  this.down = function (next) {
    var callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.dropTable('usuario', callback);
  };
};

exports.CreateUsuarios = CreateUsuarios;
