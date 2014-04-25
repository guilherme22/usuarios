var Usuarios = function () {
  this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

  this.index = function (req, resp, params) {
    var self = this;

    geddy.model.Usuario.all(function(err, usuarios) {
      if (err) {
        throw err;
      }
      self.respondWith(usuarios, {type:'Usuario'});
    });
  };

  this.add = function (req, resp, params) {
    this.respond({params: params});
  };

  this.create = function (req, resp, params) {
    var self = this
      , usuario = geddy.model.Usuario.create(params);

    if (!usuario.isValid()) {
      this.respondWith(usuario);
    }
    else {
      usuario.save(function(err, data) {
        if (err) {
          throw err;
        }
        self.respondWith(usuario, {status: err});
      });
    }
  };

  this.show = function (req, resp, params) {
    var self = this;

    geddy.model.Usuario.first(params.id, function(err, usuario) {
      if (err) {
        throw err;
      }
      if (!usuario) {
        throw new geddy.errors.NotFoundError();
      }
      else {
        self.respondWith(usuario);
      }
    });
  };

  this.edit = function (req, resp, params) {
    var self = this;

    geddy.model.Usuario.first(params.id, function(err, usuario) {
      if (err) {
        throw err;
      }
      if (!usuario) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        self.respondWith(usuario);
      }
    });
  };

  this.update = function (req, resp, params) {
    var self = this;

    geddy.model.Usuario.first(params.id, function(err, usuario) {
      if (err) {
        throw err;
      }
      usuario.updateProperties(params);

      if (!usuario.isValid()) {
        self.respondWith(usuario);
      }
      else {
        usuario.save(function(err, data) {
          if (err) {
            throw err;
          }
          self.respondWith(usuario, {status: err});
        });
      }
    });
  };

  this.remove = function (req, resp, params) {
    var self = this;

    geddy.model.Usuario.first(params.id, function(err, usuario) {
      if (err) {
        throw err;
      }
      if (!usuario) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        geddy.model.Usuario.remove(params.id, function(err) {
          if (err) {
            throw err;
          }
          self.respondWith(usuario);
        });
      }
    });
  };

};

exports.Usuarios = Usuarios;
