const $fetchAsync = document.getElementById("asincrono"),
  $fragment = document.createDocumentFragment();

  //   solicito una respuesta de parte de la pagina web

async function getData() {
  try {
    let sol = await fetch("https://jsonplaceholder.typicode.com/comments"),
      json = await sol.json();

    console.log(sol, json);


    json.forEach((el) => {
      const $li = document.createElement("li");
      $li.innerHTML = `${el.name} -- ${el.email}`;
      $fragment.appendChild($li);
    });

    $fetchAsync.appendChild($fragment);
  } catch (f) {
    console.log(f);
    let message = f.statusText || "Ocurrió algun  error";
    $fetchAsync.innerHTML = `Error ${f.status}: ${message}`;
  } finally {
    console.log("Esto se ejecutará independientemente del try... catch");
  }
}

getData();

