function appendToApp(element) {
  document.getElementById("app").appendChild(element);
}

function getATagElement(url) {
  const loginLink = document.createElement("a");
  loginLink.innerText = "Login";
  loginLink.href = url;
  return loginLink;
}

function getUrl({ client_id, redirect_uri, scope }) {
  return encodeURI(
    `https://api.instagram.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&response_type=code`,
  );
}

function main() {
  document.getElementById("authbutton").addEventListener("click", (event) => {
    event.preventDefault();
    const options = {
      client_id: document.getElementById("client_id").value,
      redirect_uri: window.location.toString() + "static/index.html",
      scope: "user_profile",
    };

    const url = getUrl(options);
    const aElement = getATagElement(url);
    appendToApp(aElement);
  });
}

main();
