const betragInEuro = document.querySelector("#betrag-in-euro");
const mehrwertSteuer = document.querySelector(
  "input[name='brutto-netto']:checked"
).value;
const betragNettoBrutto = document.querySelector(".betrag-netto-brutto");

//* Funktion um den Text zu Netto zuändern
changeTextNetto = () => {
  betragInEuro.innerHTML = "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro";
  betragNettoBrutto.innerHTML = "Bruttobetrag (Endpreis)";
};
//* Funktion um den Text zu Netto zuändern
changeTextBrutto = () => {
  betragInEuro.innerHTML =
    "Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro";
  betragNettoBrutto.innerHTML = "Nettobetrag";
};

//* Funktion für das Berechnen
berechnen = () => {
  const steuerSatz = document.querySelector(
    "input[name='steuersatz']:checked"
  ).value;
  const betrag = document.querySelector("#betrag").value;
  const outputMehrwert = document.querySelector(".mehrwertsteuerbetrag");
  const outputBetrag = document.querySelector(".betrag-ergebnis");

  // von Netto auf Brutto
  if (mehrwertSteuer == "netto-zu-brutto") {
    // bei 19%
    if (steuerSatz == 19) {
      const bruttoBetrag = betrag * 1.19;
      const bruttoBetragFixed = bruttoBetrag.toFixed(2);
      const steuerBetrag = bruttoBetrag - betrag;
      const steuerBetragFixed = steuerBetrag.toFixed(2);

      outputMehrwert.innerHTML = steuerBetragFixed;
      outputBetrag.innerHTML = bruttoBetragFixed;
      // bei 7%
    } else {
      const bruttoBetrag = betrag * 1.07;
      const bruttoBetragFixed = bruttoBetrag.toFixed(2);
      const steuerBetrag = bruttoBetrag - betrag;
      const steuerBetragFixed = steuerBetrag.toFixed(2);

      outputMehrwert.innerHTML = steuerBetragFixed;
      outputBetrag.innerHTML = bruttoBetragFixed;
    }
    // von Brutto auf Netto
  } else {
    // bei 19%
    if (steuerSatz == 19) {
      const nettoBetrag = betrag / 1.19;
      const nettoBetragFixed = nettoBetrag.toFixed(2);
      const steuerBetrag = betrag - nettoBetrag;
      const steuerBetragFixed = steuerBetrag.toFixed(2);

      outputMehrwert.innerHTML = steuerBetragFixed;
      outputBetrag.innerHTML = nettoBetragFixed;
      // bei 7%
    } else {
      const nettoBetrag = betrag / 1.07;
      const nettoBetragFixed = nettoBetrag.toFixed(2);
      const steuerBetrag = betrag - nettoBetrag;
      const steuerBetragFixed = steuerBetrag.toFixed(2);

      outputMehrwert.innerHTML = steuerBetragFixed;
      outputBetrag.innerHTML = nettoBetragFixed;
    }
  }
};
