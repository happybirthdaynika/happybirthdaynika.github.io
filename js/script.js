var kedua = 211;
var ketiga = 268;
let hScroll;
let charIndex = 0;

$(window).on('load', function() {
  // console.log('oke');
  $('.pKanan').addClass('pmuncul');
});

$(window).scroll(function() { 
  hScroll = $(this).scrollTop();
  console.log(hScroll);
  if (hScroll >= kedua && charIndex >= 227) {
    console.log('jalan')
    $('.container.kedua').addClass('muncul')
  }
  if (hScroll >= ketiga && charIndex >= 227) {
    console.log('jalan ketiga')
    $('.container.ketiga').addClass('muncul')
  }
})

const myText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const textArray = ["Semoga dihari yang spesial ini, jadi hari yang spesial buat kamu Dan selalu di beri umur yang panjang dari yang maha kuasa. Sehat terus yaa!!! ammiiin .... semoga di tahun ini, menjadi pribadi yang lebih baik dari sebelum nya.."];
const typingDelay = 150;
const newTextDelay = 2000;
let textArrayIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursor.classList.contains("typing")) cursor.classList.add("typing")
    myText.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    if (textArray[textArrayIndex].charAt(charIndex) === "." || textArray[textArrayIndex].charAt(charIndex) === ",") {
      setTimeout(type, 500);
    } else {
      setTimeout(type, typingDelay);
    }
  } else {
    cursor.classList.remove("typing")
    $('.container.kanan').addClass('muncul')
  }
}

var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");
var txtArea = document.getElementById("salamHangat") ;

icon.onclick = function() {
  $('.container.hide').addClass('muncul')
  if (mySong.paused) {
    mySong.play()
  }
  setTimeout(type, 3000)
  type()
}