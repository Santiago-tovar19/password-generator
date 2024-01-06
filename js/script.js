//variables y objetos generales

const d = document;
let $btnSimbolos = d.getElementById("btn-simbolos");
let $btnNumeros = d.getElementById("btn-numeros");
let $btnMayusculas = d.getElementById("btn-mayusculas");
let $inputPassword = d.getElementById("input-password");
let $app = d.getElementById("app"),
  //
  //
  $inputCaracteres = d.getElementById("numero-caracteres"),
  $configuracion = {
    caracteres: parseInt($inputCaracteres.value),
    simbolos: true,
    numeros: true,
    mayusculas: true,
    minusculas: true,
  };

let $caracteres = {
  numeros: "0 1 2 3 4 5 6 7 8 9",
  simbolos: "! @ # $ % ^ & * ( ) _ - + = { [ } ] ; : < , > . ? /",
  mayusculas: "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z",
  minusculas: "a b c d e f g h i j k l m n o p q r s t u v w x y z",
};

//eventos

$app.addEventListener("submit", (e) => {
  e.preventDefault();
});

d.addEventListener("click", (e) => {
  if (e.target.matches(".btn-mas-uno")) {
    $configuracion.caracteres++;
    $inputCaracteres.value = $configuracion.caracteres;
  }

  if (e.target.matches(".btn-mas-uno i")) {
    $configuracion.caracteres++;
    $inputCaracteres.value = $configuracion.caracteres;
  }

  if (e.target.matches(".btn-menos-uno")) {
    if ($configuracion.caracteres > 1) {
      $configuracion.caracteres--;
      $inputCaracteres.value = $configuracion.caracteres;
    }
  }

  if (e.target.matches(".btn-menos-uno i")) {
    if ($configuracion.caracteres > 1) {
      $configuracion.caracteres--;
      $inputCaracteres.value = $configuracion.caracteres;
    }
  }

  //para incluir simbolos

  if (e.target.matches("#btn-fast *")) {
    btnTogggle($btnSimbolos);
    $configuracion.simbolos = !$configuracion.simbolos;
  }

  //para incluir numeros

  if (e.target.matches("#btn-fast2 *")) {
    btnTogggle($btnNumeros);
    $configuracion.numeros = !$configuracion.numeros;
  }

  //para incluir masyusculas
  if (e.target.matches("#btn-fast3 *")) {
    btnTogggle($btnMayusculas);
    $configuracion.mayusculas = !$configuracion.mayusculas;
  }

  //boton generar
  if (e.target.matches("#btn-generarG *")) {
    generarPassword();
  }

  //copiar contraseña
  if (e.target.matches("#input-password")) {
    copiarPassword();
  }
});

//funciones

function btnTogggle(elemento) {
  elemento.classList.toggle("false");
  elemento.childNodes[0].classList.toggle("fa-check");
  elemento.childNodes[0].classList.toggle("fa-times");
}

function generarPassword() {
  let caracteresFinales = "",
    password = "";

  for (propiedad in $configuracion) {
    if ($configuracion[propiedad] === true) {
      caracteresFinales += $caracteres[propiedad];
    }
  }

  caracteresFinales = caracteresFinales.trim();

  caracteresFinales = caracteresFinales.split(" ");

  for (let i = 0; i < $configuracion.caracteres; i++) {
    password =
      password + caracteresFinales[Math.floor(Math.random() * caracteresFinales.length)];
  }
  console.log(password);

  $inputPassword.value = password;
}

function copiarPassword() {
  $inputPassword.select();
  d.execCommand("copy");
  d.querySelector(".alerta-copiado").classList.add("active");

  setTimeout(function () {
    d.querySelector(".alerta-copiado").classList.remove("active");
  }, 1265);
}

generarPassword();
