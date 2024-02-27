today = new Date();
document.getElementsByClassName(
  "dow"
)[0].innerHTML = today.toLocaleString("de-de", { weekday: "long" });
document.getElementsByClassName(
  "mon"
)[0].innerHTML = today.toLocaleString("de-de", { month: "long" });
