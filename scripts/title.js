var curr_link = window.location.href;

if (curr_link == "https://itmasc.github.io/"){
  document.title = "ITmasc";
  $('meta[name="description"]').attr("content", "ITmasc");
} else if (curr_link == "https://itmasc.github.io/andr_proj/home.html"){
  document.title = "ITmasc - Android";
  $('meta[name="description"]').attr("content", "ITmasc - Android");
}

