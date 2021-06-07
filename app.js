// DOM Elements
let list = document.getElementById("directory-list");
let form = document.getElementById("directory-form");
// User List
let listDirec = [];

// Get Datas

let datas = db.collection("directory").onSnapshot((snapshot) =>
  snapshot.docs.map((doc) => {
    const newUser = {
      name: doc.data().name,
      number: doc.data().number,
      personId: doc.data().personId,
      specId: doc.id,
    };
    listDirec.push(newUser);
    renderDirectory();
  })
);

// Render Persons

function renderDirectory() {
  let uniqItems = listDirec.filter(
    (v, i, a) =>
      a.findIndex((t) => t.place === v.place && t.name === v.name) === i
  );
  listHTML = uniqItems
    .map((item) => {
      return `
        <li data-id=${item.specId}><span>${item.name}</span><span class="number">${item.number}</span><i class="fas fa-trash-alt"></i></li>
        `;
    })
    .join(" ");
  list.innerHTML = listHTML;
}

// Add Person

form.addEventListener("submit", (e) => {
  e.preventDefault();
  db.collection("directory").add({
    name: form.name.value.trim(),
    number: form.number.value.trim(),
    personId: Math.random() * 4 - 0.5,
  });
  clearInput();
});

// Clear Input

function clearInput() {
  form.name.value = "";
  form.number.value = "";
}

// Remove person

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-trash-alt")) {
    let personId = e.target.parentElement.dataset.id;
    db.collection("directory").doc(personId).delete();
  }
});
