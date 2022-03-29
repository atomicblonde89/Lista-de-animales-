"use strict";

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/web.dom-collections.iterator.js");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Propietario = /*#__PURE__*/function () {
  function Propietario(nombre, direccion, telefono) {
    _classCallCheck(this, Propietario);

    this._nombre = nombre;
    this._direccion = direccion;
    this._telefono = telefono;
  }

  _createClass(Propietario, [{
    key: "nombre",
    get: function get() {
      return this._nombre;
    },
    set: function set(nombre) {
      this._nombre = nombre;
    }
  }, {
    key: "direccion",
    get: function get() {
      return this._direccion;
    },
    set: function set(direccion) {
      this._direccion = direccion;
    }
  }, {
    key: "telefono",
    get: function get() {
      return this._telefono;
    },
    set: function set(telefono) {
      this._telefono = telefono;
    }
  }, {
    key: "datosPropietarios",
    value: function datosPropietarios() {
      return "El nombre del due\xF1o es: ".concat(this.nombre, ". El domicilio es: ").concat(this.direccion, ", y el n\xFAmero telef\xF3nico de contacto: ").concat(this.telefono);
    }
  }]);

  return Propietario;
}();

;

var Animal = /*#__PURE__*/function (_Propietario) {
  _inherits(Animal, _Propietario);

  var _super = _createSuper(Animal);

  function Animal(nombre, direccion, telefono, tipo) {
    var _this;

    _classCallCheck(this, Animal);

    _this = _super.call(this, nombre, direccion, telefono);
    _this._tipo = tipo;
    return _this;
  }

  _createClass(Animal, [{
    key: "tipo",
    get: function get() {
      return this._tipo;
    },
    set: function set(tipo) {
      this._tipo = tipo;
    }
  }, {
    key: "getTipo",
    value: function getTipo() {
      return "\n El tipo de animal es un ".concat(this.tipo, ",");
    }
  }]);

  return Animal;
}(Propietario);

;

var Mascota = /*#__PURE__*/function (_Animal) {
  _inherits(Mascota, _Animal);

  var _super2 = _createSuper(Mascota);

  function Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
    var _this2;

    _classCallCheck(this, Mascota);

    _this2 = _super2.call(this, nombre, direccion, telefono, tipo);
    _this2._nombreMascota = nombreMascota;
    _this2._enfermedad = enfermedad;
    return _this2;
  }

  _createClass(Mascota, [{
    key: "nombreMascota",
    get: function get() {
      return this._nombreMascota;
    },
    set: function set(nombreMascota) {
      this._nombreMascota = nombreMascota;
    }
  }, {
    key: "enfermedad",
    get: function get() {
      return this._enfermedad;
    },
    set: function set(enfermedad) {
      this._enfermedad = enfermedad;
    }
  }, {
    key: "getNombreEnfermedadMascota",
    value: function getNombreEnfermedadMascota() {
      return "mientras que el nombre de la mascota es: ".concat(this.nombreMascota, " y la enfermedad es: ").concat(this.enfermedad);
    }
  }]);

  return Mascota;
}(Animal);

var obtenerValoresInputs = function obtenerValoresInputs(valueIdNameElement) {
  return document.getElementById(valueIdNameElement).value;
};

document.getElementsByTagName('button')[0].addEventListener('click', function (event) {
  event.preventDefault();
  var propietario = obtenerValoresInputs('propietario');
  var telefono = obtenerValoresInputs('telefono');
  var direccion = obtenerValoresInputs('direccion');
  var nombreMascota = obtenerValoresInputs('nombreMascota');
  var tipo = obtenerValoresInputs('tipo');
  var enfermedad = obtenerValoresInputs('enfermedad');
  var objMascota = new Mascota(propietario, direccion, telefono, tipo, nombreMascota, enfermedad);
  var resultElementUl = document.getElementById('resultado').children[0];
  var liDatosPropetario = document.createElement("li");
  var liTipoNombreEnfermedadMascota = document.createElement("li");
  liDatosPropetario.innerHTML = "".concat(objMascota.datosPropietarios());
  liTipoNombreEnfermedadMascota.innerHTML = "".concat(objMascota.getTipo(), " ").concat(objMascota.getNombreEnfermedadMascota());
  resultElementUl.appendChild(liDatosPropetario);
  resultElementUl.appendChild(liTipoNombreEnfermedadMascota);
});