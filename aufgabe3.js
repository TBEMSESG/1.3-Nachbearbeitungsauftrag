let res3 = document.getElementById("result3");

function istPangramm() {
  let word3 = document.getElementById("c").value;

  let alphabet = "abcdefghijklmnopqrstuvwxyz ";
  let wordsmall = word3.toLowerCase();

  for (i = 0; i < alphabet.length; i++) {
    let char = true;
    char = wordsmall.includes(alphabet[i]);
    if (char == false) {
      res3.textContent = `the letter "${alphabet[i]}" is not in "${word3}". Sorry, not a Pangramm`;
      console.log(
        `the letter "${alphabet[i]}" is not in "${word3}". Sorry, not a Pangramm`
      );
      return;
    }
  }
  res3.textContent = `YESSSS!!!! The string "${word3}" is a Pangramm !!`;
  console.log(`YESSSS!!!! The string "${word3}" is a Pangramm !!`);
}

// istPangramm("The quick brown fox jumps over the lazy dog");
