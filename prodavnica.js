// Podaci o artiklima (simulacija baze)
let artikli = [
  { naziv: "Monitor", cena: 165, opis: "LED monitor 24 inča" },
  { naziv: "TV", cena: 650, opis: "Smart TV 50 inča" },
  { naziv: "Miš", cena: 20, opis: "Bežični optički miš" }
];

const tbody = document.querySelector("#artikli tbody");
const detaljiDiv = document.getElementById("detalji");
const nazivInput = document.getElementById("naziv");
const cenaInput = document.getElementById("cena");
const opisInput = document.getElementById("opis");
const dodajBtn = document.getElementById("dodaj");

// Funkcija za iscrtavanje tabele
function prikaziTabelu() {
  tbody.innerHTML = ""; // očisti staru tabelu
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

// Prikaz detalja artikla
function prikaziDetalje(index) {
  const artikal = artikli[index];
  detaljiDiv.innerHTML = `
    <p>Naziv: ${artikal.naziv}</p>
    <p>Cena: ${artikal.cena}</p>
    <p>Opis: ${artikal.opis}</p>
  `;
}

// Dodavanje novog artikla
dodajBtn.addEventListener("click", () => {
  const naziv = nazivInput.value.trim();
  const cena = parseFloat(cenaInput.value);
  const opis = opisInput.value.trim();

  if (!naziv || isNaN(cena) || !opis) {
    alert("Sva polja moraju biti popunjena!");
    return;
  }

  artikli.push({ naziv, cena, opis });

  // Očisti formu
  nazivInput.value = "";
  cenaInput.value = "";
  opisInput.value = "";

  prikaziTabelu();
});

prikaziTabelu(); // inicijalno prikaz