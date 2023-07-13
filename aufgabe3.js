let res3 = document.getElementById("result3");

function istPangramm() {
  let word3 = document.getElementById("c").value;

  let alphabet = "abcdefghijklmnopqrstuvwxyz ";
  let wordsmall = word3.toLowerCase();

  for (i = 0; i < alphabet.length; i++) {
    let char = true;
    char = wordsmall.includes(alphabet[i]);
    if (char == false) {
      res3.textContent = `Sorry,kein Pangramm. Mindestens "${alphabet[i]}" ist nicht in  "${word3}" vorhanden.`;
      console.log(
        `Sorry,kein Pangramm. Mindestens "${alphabet[i]}" ist nicht in  "${word3}" vorhanden.`
      );
      return;
    }
  }
  res3.textContent = `YESSSS!!!! Der Satz "${word3}" ist ein Pangramm !!`;
  console.log(`YESSSS!!!! Der Satz "${word3}" ist ein Pangramm !!`);
}

// istPangramm("The quick brown fox jumps over the lazy dog");
