var curr_link = window.location.href;

if (curr_link == "https://itmasc.github.io/"){
document.getEelementsByTagName('title')[0].innerText = "ITmasc";
} else if (curr_link == "https://itmasc.github.io/andr_proj/home.html"){
document.getEelementsByTagName('title')[0].innerText = "ITmasc - Android";
}
