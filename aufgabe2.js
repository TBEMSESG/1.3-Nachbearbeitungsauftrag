function schaltjahr(jahr) {
  //Die durch 4 ganzzahlig teilbaren Jahre sind Schaltjahre.
  if (jahr % 4 != 0) {
    console.log(`NEIN, das Jahr ${jahr} ist KEIN Schaltjahr.`);
    return;
  }
  // Jahre, die ein Jahrhundert abschliessen (z. B. 1800, 1900, 2100 und 2200) sind keine Schaltjahre.
  if (jahr % 100 == 0) {
    //Die durch 400 ganzzahlig teilbaren Jahre sind doch Schaltjahre.
    if (jahr % 400 == 0) {
      console.log(`JA, das Jahr ${jahr} ist ein Schaltjahr.`);
      return;
    }
    console.log(`NEIN, das Jahr ${jahr} ist KEIN Schaltjahr.`);
    return;
  }

  console.log(`JA, das Jahr ${jahr} ist ein Schaltjahr.`);
}

schaltjahr(1996);
