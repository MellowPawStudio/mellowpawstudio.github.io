
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
    if (event.button === 0) {
        navigator.clipboard.writeText(url).then(() => {
            showSnackBar();
          }).catch((err) => {
            console.error("Failed to copy text: ", err);
          });
    }
}

function navigateTo(event, url) {
    if (event.button === 0) {
        window.location.href = url;
    } else if (event.button === 1) {
        window.open(url, '_blank');
    }
}

document.getElementById('navto-etsy').addEventListener('mouseup', (event) => navigateTo(event, "https://mellowpawstudio.etsy.com"));
document.getElementById('navto-bsky').addEventListener('mouseup', (event) => navigateTo(event, "https://bsky.app/profile/mannyvalentine.bsky.social"));

document.getElementById("copy-etsy").addEventListener("mouseup", (event) => copyToClipboard(event, "https://mellowpawstudio.etsy.com"));
document.getElementById("copy-bsky").addEventListener("mouseup", (event) => copyToClipboard(event, "https://bsky.app/profile/mannyvalentine.bsky.social"));
