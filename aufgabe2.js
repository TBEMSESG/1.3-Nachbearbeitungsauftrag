let res2 = document.getElementById("result2");

function schaltjahr() {
  let jahr = document.getElementById("b").value;
  const ja = `JA, das Jahr ${jahr} ist ein Schaltjahr.`;
  const nein = `NEIN, das Jahr ${jahr} ist KEIN Schaltjahr.`;

  //Die durch 4 ganzzahlig teilbaren Jahre sind Schaltjahre.
  if (jahr % 4 != 0) {
    console.log(`NEIN, das Jahr ${jahr} ist KEIN Schaltjahr.`);
    res2.textContent = nein;
    return;
  }
  // Jahre, die ein Jahrhundert abschliessen (z. B. 1800, 1900, 2100 und 2200) sind keine Schaltjahre.
  if (jahr % 100 == 0) {
    //Die durch 400 ganzzahlig teilbaren Jahre sind doch Schaltjahre.
    if (jahr % 400 == 0) {
      console.log(`JA, das Jahr ${jahr} ist ein Schaltjahr.`);
      res2.textContent = ja;
      return;
    }
    console.log(`NEIN, das Jahr ${jahr} ist KEIN Schaltjahr.`);
    res2.textContent = nein;
    return;
  }
  res2.textContent = ja;
  console.log(`JA, das Jahr ${jahr} ist ein Schaltjahr.`);
}

// schaltjahr(1996);
