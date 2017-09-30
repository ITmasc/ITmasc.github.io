var curr_link = window.location.href;
document.title = curr_link;
if (curr_link == "https://itmasc.github.io/"){
  document.title = "ITmasc";
} else if (curr_link == "https://itmasc.github.io/andr_proj/home.html"){
  document.title = "ITmasc - Android";
} else {
  document.title = "LOL";
}

