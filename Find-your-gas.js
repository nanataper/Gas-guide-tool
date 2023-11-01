<script type="text/javascript">
    // supported browsers check and disclaimer
    var browser = (function () {
        var test = function (regexp) { return regexp.test(window.navigator.userAgent) }
        switch (true) {
            case test(/edg/i): return "Microsoft Edge";
            case test(/trident/i): return "Microsoft Internet Explorer";
            case test(/firefox|fxios/i): return "Mozilla Firefox";
            case test(/opr\//i): return "Opera";
            case test(/ucbrowser/i): return "UC Browser";
            case test(/samsungbrowser/i): return "Samsung Browser";
            case test(/chrome|chromium|crios/i): return "Google Chrome";
            case test(/safari/i): return "Apple Safari";
            default: return "Other";
        }
    })();

    if (browser == "Microsoft Internet Explorer") {
        var supportedBrowsersText = "Du använder en äldre version av webbläsare eller en webbläsare som vi inte stödjer.<br><br>Vi rekommenderar att du försöker med en annan webbläsare såsom Google Chrome, Apple Safari, Microsoft Edge eller Mozilla Firefox.";
        document.getElementById("parent-div-choice").innerHTML = supportedBrowsersText;
    }

    var tableHiddenDiv = document.getElementById("parent-div-find-gas");
    var choiceDiv = document.getElementById("parent-div-choice");
    console.log(tableHiddenDiv);
    function displayDiv() {
        tableHiddenDiv.style.display = "block";
        choiceDiv.style.display = "none";
    }

    var selectedProcess = "";
    var selectedGas = "";
    function openProcess(gasName) {
        var i;
        var x = document.getElementsByClassName("gas");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        selectedProcess = gasName;
        document.getElementById(gasName).style.display = "block"

        const gasToIndexMap = {
            "ROTSKYDD": 0,
            "PLASMA": 1,
            "MIG/MAG": 2,
            "MIG lödning": 3,
            "TIG": 4

        }
        const selectedGasIndex = gasToIndexMap[gasName]
        var y = document.getElementsByClassName("w3-button");
        let gas;
        var hr = document.getElementsByClassName("hr-class");
        for (gas = 0; gas < y.length; gas++) {
            if (gas === selectedGasIndex) {
                y[gas].style.color = "#00A0E1";
                hr[gas].style.display = "block";
            } else {
                y[gas].style.color = "#00305c";
                hr[gas].style.display = "none";

            }
        }

    }

    function getResults(gas) {
        if (!selectedProcess) {
            const message = document.getElementById("chooseProccess");
            const errorMessage = document.getElementById("warningMessage");
            message.style.display = "none";
            errorMessage.style = "display: block; font-size: 23px; font-weight: 700; color: red;";
            return
        }
        var x = document.getElementsByClassName("gas").value;
        var y = document.getElementsByClassName("listOfMaterials").value;
        selectedGas = gas;

        // "Mison user check" (email + "mison user") - if originating from Eloqua site - parse and append property
        // parse URL args: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const misonUserCheck = urlParams.get('misonUserCheck');
        const email = urlParams.get('email');

        // just e-mail is not enough, we also need to know if visit originated from "IG page" - for this they pass "misonUserCheck"
        if (misonUserCheck) {
            window.location.href = "/shop/sv/se-ig/Skyddsgassökare-resultat?process=" + selectedProcess + "&gas=" + selectedGas + "&email=" + email + "&misonUserCheck=" + misonUserCheck;
        }
        else {
            window.location.href = "/shop/sv/se-ig/Skyddsgassökare-resultat?process=" + selectedProcess + "&gas=" + selectedGas + "&email=" + email;
        }

    }

    // supported browsers check and disclaimer
    var browser = (function () {
        var test = function (regexp) { return regexp.test(window.navigator.userAgent) }
        switch (true) {
            case test(/edg/i): return "Microsoft Edge";
            case test(/trident/i): return "Microsoft Internet Explorer";
            case test(/firefox|fxios/i): return "Mozilla Firefox";
            case test(/opr\//i): return "Opera";
            case test(/ucbrowser/i): return "UC Browser";
            case test(/samsungbrowser/i): return "Samsung Browser";
            case test(/chrome|chromium|crios/i): return "Google Chrome";
            case test(/safari/i): return "Apple Safari";
            default: return "Other";
        }
    })();

    if (browser == "Microsoft Internet Explorer") {
        var supportedBrowsersText = "Du använder en äldre version av webbläsare eller en webbläsare som vi inte stödjer.<br><br>Vi rekommenderar att du försöker med en annan webbläsare såsom Google Chrome, Apple Safari, Microsoft Edge eller Mozilla Firefox.";
        document.getElementById("parent-div-choice").innerHTML = supportedBrowsersText;
    }
</script>
