
function selectHome(){
    console.log("Test");
}

function showSnackBar() {
    var sb = document.getElementById("snackbar");
    sb.className = "show";
    setTimeout(()=>{ sb.className = sb.className.replace("show", ""); }, 3000);
}

function copyToClipboard(event, url) {
    event.stopPropagation();
    navigator.clipboard.writeText(url).then(() => {
      showSnackBar();
    }).catch((err) => {
      console.error("Failed to copy text: ", err);
    });
}

function navigateTo(url) {
    window.location.href = url;
}

document.getElementById('navto-etsy').addEventListener('click', () => navigateTo("https://mellowpawstudio.etsy.com"));
document.getElementById('navto-bsky').addEventListener('click', () => navigateTo("https://bsky.app/profile/mannyvalentine.bsky.social"));

document.getElementById("copy-etsy").addEventListener("click", (event) => copyToClipboard(event, "https://mellowpawstudio.etsy.com"));
document.getElementById("copy-bsky").addEventListener("click", (event) => copyToClipboard(event, "https://bsky.app/profile/mannyvalentine.bsky.social"));
