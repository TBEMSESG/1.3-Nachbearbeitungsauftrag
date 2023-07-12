let res = document.getElementById("result1");

function reverse() {
  let word = document.getElementById("a").value;
  let len = word.length;
  let newWord = "";

  for (let i = len - 1; i >= 0; i--) {
    newWord += word[i];
  }

  console.log(
    `The sting initially was: ${word}. This function changed the string to:  ${newWord}`
  );

  res.textContent = `${newWord}`;
  return;
}

// call reverse function with any string as argument.
//reverse("javascript");
