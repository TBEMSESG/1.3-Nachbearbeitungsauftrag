function schaltjahr(jahr) {
  if (jahr % 4 != 0) {
    console.log(`NEIN, das Jahr ${jahr} ist KEIN Schaltjahr.`);
    return;
  }
  if (jahr % 100 == 0) {
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
