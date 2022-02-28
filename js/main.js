document
    .getElementById("get-ip-address")
    .addEventListener("click", function () {
        document.getElementById("spinner2").style.display = "inline";
        document.getElementById("get-ip-address").style.display = "none";
        setTimeout(function () {
            document.getElementById("spinner2").style.display = "none";
            document.getElementById("ip-address").style.display = "inline";
            document.getElementById("show-details").style.display = "block";
            document.getElementById("ip-address-header").style.display =
                "block";
        }, 1500);
    });

let getInnerText = (htmlId) => document.getElementById(htmlId).innerText;

document.getElementById("show-details").addEventListener("click", function () {
    document.getElementById("spinner").style.display = "inline";
    document.getElementById("show-details").style.display = "none";

    setTimeout(function () {
        let url = `https://geo.ipify.org/api/v2/country?apiKey=at_ndfowvocVMuwA06j6iVqiyKmUnnTV&ipAddress=${getInnerText(
            "ip-address"
        )}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => processData(data));
    }, 1500);
});

let processData = (data) => {
    console.log(data);
    let parent = document.getElementById("show-details-section");
    parent.innerText = "";
    let div = document.createElement("div");
    div.classList.add("text-center");
    let text = `
    <h4>IP address: ${data.ip}</h4>
    <h4>Route: ${data.as.route}</h4>
    <h4 class="mb-4 pb-3 border-bottom">ASN: ${data.as.name}</h4>
    <h4  class="mb-3 pb-4 border-bottom text-primary">ISP Name: ${data.isp}</h4>
    <h4>Country: ${data.location.country}</h4>
    <h4>Region: ${data.location.region}</h4>
    <h5>Timezone: ${data.location.timezone}</h5>
    <button id="hide-details" onclick="hideDetails()" class="btn btn-danger mt-4">
    Hide Details</button>
    <p class="mt-4 fs-6 fst-italic"> Developed by: @rakibulmd </P>`;
    div.innerHTML = text;
    document.getElementById("spinner").style.display = "none";
    parent.appendChild(div);
};

let hideDetails = () => {
    let parent = document.getElementById("show-details-section");
    parent.innerText = "";
    document.getElementById("show-details").style.display = "inline";
};
