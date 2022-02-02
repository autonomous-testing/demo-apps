function runApp() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const user = urlParams.get("user");

  if (user == "marcel.veselka@tesena.com") {
    document.getElementById("login").style.display = "none";
    document.getElementById("logedin").style.display = "inline";
    document.getElementById("user").innerHTML = user;
  }

  if (buggy === true) {
    document.getElementById("bgwidget").style.display = "inline";
    document.getElementById("css").href = "buggy.css";
  }
}
