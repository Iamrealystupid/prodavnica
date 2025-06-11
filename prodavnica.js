let artikli = JSON.parse(localStorage.getItem("artikli")) || [];

const tbody = document.querySelector("#artikli tbody");
const detaljiDiv = document.getElementById("detalji");
const nazivInput = document.getElementById("naziv");
const cenaInput = document.getElementById("cena");
const opisInput = document.getElementById("opis");
const dodajBtn = document.getElementById("dodaj");

function prikaziTabelu() {
  tbody.innerHTML = "";
  artikli.forEach((artikal, index) => {
    const red = document.createElement("tr");
    red.innerHTML = `
      <td>${index + 1}</td>
      <td>${artikal.naziv}</td>
      <td>${artikal.cena}</td>
    `;
    red.addEventListener("click", () => prikaziDetalje(index));
    tbody.appendChild(red);
  });
}

function prikaziDetalje(index) {
  const a = artikli[index];
  detaljiDiv.innerHTML = `
    <p>Naziv: ${a.naziv}</p>
    <p>Cena: ${a.cena}</p>
    <p>Opis: ${a.opis}</p>
  `;
}

dodajBtn.addEventListener("click", () => {
  const naziv = nazivInput.value.trim();
  const cena = parseFloat(cenaInput.value);
  const opis = opisInput.value.trim();

  if (!naziv || isNaN(cena) || !opis) {
    alert("Sva polja su obavezna!");
    return;
  }

  artikli.push({ naziv, cena, opis });
  localStorage.setItem("artikli", JSON.stringify(artikli));
  prikaziTabelu();

  nazivInput.value = "";
  cenaInput.value = "";
  opisInput.value = "";
});

document.getElementById("obrisiSve").addEventListener("click", () => {
  localStorage.clear();
  artikli = [];
  prikaziTabelu();
  detaljiDiv.innerHTML = `<p>Naziv: ...</p><p>Cena: ...</p><p>Opis: ...</p>`;
});

prikaziTabelu();