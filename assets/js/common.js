function toggle_menu() {
  var t = document.getElementsByClassName("toggle_icon");
  var nav = document.getElementById("navbar_top");

  if (t[0].classList.contains('hidden')) {
    t[0].classList.remove('hidden');
    t[1].classList.add('hidden');
    t[1].classList.add('hidden_small');
    nav.classList.add('hidden_small');
  }
  else {
    t[0].classList.add('hidden');
    t[1].classList.remove('hidden');
    t[1].classList.remove('hidden_small');
    nav.classList.remove('hidden_small');
  }
}
function close_price_descr() {
  var d = document.getElementsByClassName("price_descr");
  d.classList.add('hidden');
}
function price_descr(i) {

  var d = document.getElementsByClassName("price_descr");
  var m = document.getElementsByClassName("messengers");
  var s = document.getElementsByClassName("arrow");
  m[i].classList.toggle('hidden');
  s[i].classList.toggle('rotate');
  d[i].classList.toggle('hidden');
};