function istPangramm(word) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz ";
  let wordsmall = word.toLowerCase();

  for (i = 0; i < alphabet.length; i++) {
    let char = true;
    char = wordsmall.includes(alphabet[i]);
    if (char == false)
      return console.log(
        `the letter "${alphabet[i]}" is not in "${word}". Sorry, not a Pangramm`
      );
  }

  console.log(`YESSSS!!!! The string "${word}" is a Pangramm !!`);
}

istPangramm("The quick brown fox jumps over the lazy dog");
