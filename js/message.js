const messages = [
  "Baby ang ganda mo.",
  "Baby miss na miss kita.",
  "Baby proud ako sayo.",
  "Baby smile ka lagi.",
  "Baby ikaw lang sapat na.",
  "Baby good morning, my love.",
  "Baby good night, sweet dreams.",
  "Baby mahal na mahal kita.",
  "Baby ikaw ang lakas ko.",
  "Baby sana araw-araw kasama kita.",
  "Baby wag ka magpuyat ha.",
  "Baby inom ka ng tubig lagi.",
  "Baby ikaw forever ko.",
  "Baby ang cute mo sobra.",
  "Baby ikaw ang mundo ko.",
  "Baby you’re my happiness.",
  "Baby sobrang thankful ako sayo.",
  "Baby ang bait mo sobra.",
  "Baby love na love kita.",
  "Baby ikaw pinaka special sakin.",
  "Baby gusto ko makita lagi ang smile mo.",
  "Baby ikaw inspiration ko.",
  "Baby sobrang importante ka sakin.",
  "Baby kahit ano mangyari, ikaw lang.",
  "Baby ikaw reason ng bawat ngiti ko.",
  "Baby andito lang ako para sayo kahit anong mangyari.",
  "Baby huwag kang iiyak, nandito ako.",
  "Baby kaya natin to, sabay tayo.",
  "Baby hawak kamay, di kita bibitawan.",
  "Baby kapag pagod ka na, ako muna sandalan mo.",
  "Baby huwag mong solohin problema mo, andito ako.",
  "Baby wag mong kalimutan na mahal na mahal kita.",
  "Baby hindi kita iiwan kahit mahirap.",
  "Baby wag kang matakot, kasama mo ako.",
  "Baby kahit anong lungkot, lalaban tayo magkasama.",
  "Baby ako ang cheerleader mo palagi.",
  "Baby di ka nag-iisa, ako kakampi mo.",
  "Baby kapag malungkot ka, andito ako para patawanin ka.",
  "Baby kahit bagsak ang mundo, tayo tatayo pa rin.",
  "Baby hindi kita susukuan.",
  "Baby kahit mahirap, kasama mo ako sa laban.",
  "Baby ikaw ang lakas ko, kaya gusto kitang palakasin din.",
  "Baby huwag kang mawalan ng pag-asa.",
  "Baby kahit umiiyak ka, para sakin maganda ka pa rin.",
  "Baby kapag hindi mo na kaya, ako na gagawa para sayo.",
  "Baby magtiwala ka sakin, di kita pababayaan.",
  "Baby kahit tahimik ka, ramdam ko ang nararamdaman mo.",
  "Baby wag mong isarado puso mo, ako papasok dyan para pasayahin ka.",
  "Baby hindi ko hahayaang masaktan ka mag-isa.",
  "Baby kahit madilim ngayon, sisikatan tayo ng liwanag magkasama."
];

// Clone messages into a pool we can use up
let availableMessages = [...messages];

const messageText = document.getElementById("messageText");
const newMessageBtn = document.getElementById("newMessageBtn");

newMessageBtn.addEventListener("click", () => {
  if (availableMessages.length === 0) {
    // All messages shown — reset the pool or disable button
    availableMessages = [...messages]; // reset
    // newMessageBtn.disabled = true;   // or disable button instead
  }

  // Pick random from available pool
  const randomIndex = Math.floor(Math.random() * availableMessages.length);
  const selectedMessage = availableMessages.splice(randomIndex, 1)[0];

  // Show it
  messageText.textContent = selectedMessage;
});
