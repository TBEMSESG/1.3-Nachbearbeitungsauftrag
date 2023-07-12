function reverse(word) {
  let len = word.length;
  let newWord = "";

  for (let i = len - 1; i >= 0; i--) {
    newWord += word[i];
  }

  console.log(
    `The sting initially was: ${word}. This function changed the string to: ${newWord}`
  );
}

reverse("javascript");
