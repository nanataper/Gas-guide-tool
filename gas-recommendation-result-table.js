<style type="text/css">
    @media only screen and (max-width: 600px) {
        #gas-guide-table {
            display: table;
            /* border: 1px solid #D2CDCD;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.43); */
            width: 100%;
            margin: 0 auto;
            font-family: LindeDaxOffice;
            text-align: center;
            margin-top: 5%;
            margin-bottom: 5%;
            padding: 20px;
            border-collapse: collapse;
            text-decoration: none;
        }
 
        #gas-guide-table tr {
            border: solid #f1f1f1;
            border-width: 0.2px 0;
            cursor: pointer;
            height: 40px;
            vertical-align: baseline;
            display: table;
            width: 100%;
        }
 
        #gas-guide-table tr a {
            width: 50%;
            margin-left: 3%;
            float: left;
        }
 
        #gas-guide-table th {
            /* color: #00305c;
  font-size: 13px;
  padding: 10px;
  text-align: -webkit-center; */
            display: none;
        }
 
        table td {
            color: #00305c;
            font-family: LindeDaxOffice;
            font-size: 12px;
            padding-left: 2%;
            text-align: left;
            text-decoration: underline;
        }
 
 
 
        #recommended {
            color: green;
            font-size: 16px;
            text-align: center;
            font-weight: 400;
        }
 
        #notRec {
            color: #CDD2CD;
            font-size: 20px;
            text-align: center;
            font-weight: 400;
        }
 
        #headingForResult {
            color: #00305c;
            font-family: LindeDaxOffice;
            text-align: center;
            margin-bottom: 2%;
            font-size: 15px;
            margin-top: 5%;
        }
 
        #explanation {
            display: none;
        }
 
        #Explanationtext {
            display: none;
        }
 
        #buttonsDiv {
            width: 70%;
            float: right;
            display: initial;
            margin-bottom: 10%;
        }
 
        #backButton,
        #satisfied {
            padding: 2%;
            border: none;
            color: white;
            font-size: 16px;
            font-family: LindeDaxOffice;
            border-radius: 5px;
 
        }
 
        #backButton {
            background-color: #00305c;
            margin-right: 2%;
            text-align: center;
            width: 40%;
        }
 
        #satisfied {
            background-color: #00A0E1;
            text-align: center;
            width: 50%;
 
        }
 
        #useFulLinksToContinue {
            position: absolute;
            background-color: white;
            padding: 2%;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            top: 2%;
            width: 90%;
            height: 300px;
            border-radius: 8px;
            color: #00305c;
            font-family: LindeDaxOffice;
        }
 
        #closeDialog {
            cursor: pointer;
            position: absolute;
            padding: 12px 16px;
            transform: translate(0%, -50%);
            font-size: xx-large;
            float: right;
            left: 85%;
            margin-top: 8%;
 
        }
 
        #closeDialog:hover {
            background-color: #EBF0F2;
        }
 
        #dialogHeading {
            display: inline-flex;
            margin-bottom: 3%;
        }
 
        #quickLinks {
            margin-top: 5%;
        }
 
        #targetBlankLinks,
        #contactSupportButton {
            border-radius: 6px;
            background-color: #00A0E1;
            padding: 2%;
            border: none;
            margin-right: 5px;
            width: -webkit-fill-available;
            margin-top: 2%;
        }
 
        #targetBlankLinks a,
        #contactSupportButton a {
            color: white;
        }
 
        #subHeadingResults {
            color: #00305c;
            font-family: LindeDaxOffice;
            text-align: center;
            margin-bottom: 2%;
            font-size: 13px;
        }
 
        #table-description-div {
            width: 100%;
            background: #FFFFFF;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            padding: 10px;
            font-family: LindeDaxOffice;
            font-size: 12px;
            margin-bottom: 3%;
        }
 
        #descriprion-table-p {
            line-height: 20px;
        }
 
        #notRec {
            display: none;
        }
 
        #recommended,
        #alternative,
        #fartherBenefits {
            visibility: hidden;
            position: initial;
            float: right;
            text-align: center;
        }
 
        #recommended::after {
            visibility: visible;
            content: "Recommdend";
            float: right;
            color: #009B3C;
            font-size: 16px;
            text-align: center;
            font-weight: 500;
            box-sizing: unset;
 
 
        }
 
        #alternative::after {
            color: #FFD200;
            visibility: visible;
            content: "Alternative";
            float: right;
            font-size: 16px;
            text-align: center;
            font-weight: 500;
 
        }
 
        #fartherBenefits::after {
            color: #DC7800;
            visibility: visible;
            content: "Further Benefits";
            float: right;
            font-size: 16px;
            text-align: center;
            font-weight: 500;
        }
 
        tbody {
            display: none;
        }
 
        #ratingCardDiv {
            background-color: white;
            border: 1px solid white;
            border-radius: 8px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            padding: 2%;
            width: 400px;
            height: 150px;
            color: #00305c;
            display: block;
            line-height: 30px;
            margin-top: 2%;
            margin-bottom: 2%;
        }
 
        #ratingWidget {
            width: 90%;
            display: inline-block;
            margin-bottom: 5%;
            margin-top: 3%;
        }
 
        #userConsent {
            opacity: 1;
            width: 40px;
            padding: 2%;
            height: 15px;
 
        }
 
        .modal-content {
            width: 98%;
            margin: 0 auto;
            margin-top: 5%;
            padding: 2%;
            height: auto;
        }
 
        #myBtn {
            float: right;
            margin-bottom: 3%;
            border-radius: 6px;
            background-color: #00A0E1;
            padding: 1%;
            width: 160px;
            border: none;
            margin-right: 5px;
            color: white;
            font-size: 19px;
        }
 
        #formbutton {
            width: 90%;
 
        }
 
        .close-modal {
            float: right;
            cursor: pointer;
            font-size: 19px;
        }
 
        #contactUsText {
            font-size: 19px;
            font-family: LindeDaxOffice;
            color: #00305c;
            margin-top: 5%;
        }
 
        #submitRating {
            float: right;
            border-radius: 6px;
            background-color: #00A0E1;
            padding: 1%;
            width: 150px;
            border: none;
            margin-right: 5px;
            color: white;
            font-size: 19px;
        }
 
        #phone-number {
            padding: 1%;
            width: 200px;
            border-radius: 3px;
            border: 1px solid rgb(199, 199, 199);
 
        }
    }
 
    @media only screen and (min-width: 601px) and (max-width: 800px) {
        #gas-guide-table {
            display: table;
            border: 1px solid #D2CDCD;
            box-sizing: border-box;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.43);
            width: 100%;
            margin: 0 auto;
            font-family: LindeDaxOffice;
            text-align: center;
            margin-top: 4%;
            margin-bottom: 3%;
            padding: 20px;
            border-collapse: collapse;
            text-decoration: none;
 
 
        }
 
        #gas-guide-table tr {
            border: solid #CDD2CD;
            border-width: 1px 0;
            cursor: pointer;
            height: 40px;
            vertical-align: baseline;
        }
 
        #gas-guide-table th {
            color: #00305c;
            font-size: 13px;
            padding: 10px;
            text-align: -webkit-center;
 
        }
 
        table td {
            color: #00305c;
            font-family: LindeDaxOffice;
            font-size: 12px;
            padding-left: 2%;
            text-align: left;
            text-decoration: underline;
        }
 
 
 
        #recommended,
        #alternative,
        #fartherBenefits {
            color: green;
            font-size: 16px;
            text-align: center;
            font-weight: 400;
        }
 
        #notRec {
            color: #CDD2CD;
            font-size: 20px;
            text-align: center;
            font-weight: 400;
        }
 
        #headingForResult {
            color: #00305c;
            font-family: LindeDaxOffice;
            text-align: center;
            margin-bottom: 2%;
            font-size: 15px;
            margin-top: 5%;
        }
 
        #explanation {
            display: none;
        }
 
        #Explanationtext {
            display: none;
        }
 
        #buttonsDiv {
            width: 40%;
            float: right;
            display: initial;
            margin-bottom: 10%;
        }
 
        #backButton,
        #satisfied {
            padding: 2%;
            border: none;
            color: white;
            font-size: 16px;
            font-family: LindeDaxOffice;
            border-radius: 5px;
 
        }
 
        #backButton {
            background-color: #00305c;
            margin-right: 2%;
            text-align: center;
            width: 45%;
        }
 
        #satisfied {
            background-color: #00A0E1;
            text-align: center;
            width: 50%;
 
        }
 
        #useFulLinksToContinue {
            position: absolute;
            background-color: white;
            padding: 2%;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            top: 30%;
            left: 10%;
            width: 80%;
            height: 220px;
            border-radius: 8px;
            color: #00305c;
            font-family: LindeDaxOffice;
        }
 
        #closeDialog {
            cursor: pointer;
            position: absolute;
            padding: 12px 16px;
            transform: translate(0%, -50%);
            font-size: large;
            float: right;
            left: 90%;
            margin-top: 3%;
 
        }
 
        #closeDialog:hover {
            background-color: #EBF0F2;
        }
 
        #dialogHeading {
            display: inline-flex;
            margin-bottom: 3%;
        }
 
        #quickLinks {
            margin: 0 auto;
            margin-top: 3%;
            width: 80%;
 
        }
 
        #targetBlankLinks,
        #contactSupportButton {
            border-radius: 6px;
            background-color: #00A0E1;
            padding: 1%;
            /* width: 150px; */
            border: none;
            margin-right: 5px;
        }
 
        #targetBlankLinks a,
        #contactSupportButton a {
            color: white;
        }
 
        #subHeadingResults {
            color: #00305c;
            font-family: LindeDaxOffice;
            text-align: center;
            margin-bottom: 2%;
            font-size: 15px;
        }
 
        #table-description-div {
            width: 80%;
            background: #FFFFFF;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            padding: 20px;
            margin: auto;
            color: #00305c;
            font-family: LindeDaxOffice;
            font-size: 18px;
            margin-bottom: 3%;
        }
 
        #descriprion-table-p {
            line-height: 30px;
        }
    }
 
    @media only screen and (min-width: 801px) {
        #gas-guide-table {
            display: table;
            border: 1px solid #D2CDCD;
            box-sizing: border-box;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.43);
            border-radius: 10px;
            width: 80%;
            margin: 0 auto;
            font-family: LindeDaxOffice;
            text-align: center;
            margin-top: 4%;
            margin-bottom: 3%;
            padding: 20px;
            border-collapse: collapse;
            text-decoration: none;
 
 
        }
 
        #gas-guide-table tr {
            border: solid #CDD2CD;
            border-width: 1px 0;
            cursor: pointer;
        }
 
        #gas-guide-table th {
            color: #00305c;
            font-size: 20px;
            padding: 10px;
            text-align: -webkit-center;
        }
 
        /* 
 table td {
  color: #00305c;
  font-family: LindeDaxOffice;
  font-size: 20px;
  padding-left: 2%;
  text-align: left;
 } */
 
        table a {
            text-decoration: underline;
            color: #00305c;
            font-family: LindeDaxOffice;
            font-size: 20px;
            padding-left: 2%;
            text-align: left;
 
        }
 
 
 
        #recommended,
        #alternative,
        #fartherBenefits {
            color: green;
            font-size: 40px;
            text-align: center;
            font-weight: 400;
        }
 
        #notRec {
            color: #CDD2CD;
            font-size: 30px;
            text-align: center;
            font-weight: 400;
        }
 
        #headingForResult {
            color: #00305c;
            font-family: LindeDaxOffice;
            text-align: center;
            margin-bottom: 2%;
            font-size: 30px;
            margin-top: 5%;
        }
 
        #explanation {
            border: 1px solid #00A0E1;
            border-radius: 50%;
            padding-left: 3%;
            padding-right: 3%;
            padding-bottom: 1%;
            color: white;
            background-color: #00A0E1;
            font-size: initial;
            cursor: pointer;
        }
 
        #Explanationtext {
            display: none;
        }
 
        #explanation:hover~#Explanationtext {
            position: absolute;
            width: 300px;
            height: 100px;
            background: #FFFFFF;
            border: 1px solid #CDD2CD;
            box-sizing: border-box;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 4px;
            display: block;
            color: #00305c;
            transition: ease-in-out 750ms;
            font-size: 13px;
            padding: 1%;
            text-align: left;
 
        }
 
 
        #buttonsDiv {
            width: 50%;
            float: right;
            display: initial;
            margin-right: 2.5%;
            margin-bottom: 10%;
        }
 
        #backButton,
        #satisfied {
            padding: 2%;
            border-radius: 8px;
            border: none;
            color: white;
            font-size: 25px;
            font-family: LindeDaxOffice;
        }
 
        #backButton {
            background-color: #00305c;
            margin-right: 2%;
            text-align: center;
            width: 40%;
        }
 
        #satisfied {
            background-color: #00A0E1;
            text-align: center;
            width: 40%;
 
        }
 
        #useFulLinksToContinue {
            position: absolute;
            background-color: white;
            padding: 2%;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            top: 30%;
            left: 20%;
            width: 70%;
            height: 250px;
            border-radius: 8px;
            color: #00305c;
            font-family: LindeDaxOffice;
        }
 
        #closeDialog {
            cursor: pointer;
            position: absolute;
            padding: 12px 16px;
            transform: translate(0%, -50%);
            font-size: large;
            float: right;
            left: 90%;
            margin-top: 3%;
 
        }
 
        #closeDialog:hover {
            background-color: #EBF0F2;
        }
 
        #dialogHeading {
            display: inline-flex;
            margin-bottom: 3%;
        }
 
        #quickLinks {
            margin: 0 auto;
            margin-top: 3%;
            width: 80%;
            text-align: -webkit-center;
 
        }
 
        #targetBlankLinks,
        #contactSupportButton {
            border-radius: 6px;
            background-color: #00A0E1;
            padding: 1%;
            /* width: 150px; */
            border: none;
            margin-right: 5px;
        }
 
        #targetBlankLinks a,
        #contactSupportButton a {
            color: white;
        }
 
        #contactSupportButton {
            color: white;
        }
 
        #subHeadingResults {
            color: #00305c;
            font-family: LindeDaxOffice;
            text-align: center;
            margin-bottom: 2%;
            font-size: 22px;
        }
 
        #table-description-div {
            width: 80%;
            background: #FFFFFF;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            padding: 20px;
            margin: auto;
            color: #00305c;
            font-family: LindeDaxOffice;
            font-size: 18px;
            margin-bottom: 3%;
        }
 
        #descriprion-table-p {
            line-height: 40px;
        }
 
        #ratingCardDiv {
            background-color: white;
            border: 1px solid white;
            border-radius: 8px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            padding: 2%;
            width: 400px;
            height: 150px;
            color: #00305c;
            display: block;
            line-height: 30px;
            margin-top: 2%;
            margin-bottom: 2%;
            float: right;
        }
 
        #ratingWidget {
            width: 90%;
            display: inline-block;
            margin-bottom: 5%;
            margin-top: 3%;
        }
 
        #userConsent {
            opacity: 1;
            width: 40px;
            padding: 2%;
            height: 15px;
 
        }
 
        #formbutton {
            width: 90%;
 
        }
 
        #contactUsText {
            font-size: 19px;
            font-family: LindeDaxOffice;
            color: #00305c;
            text-align: center;
            width: 80%;
            margin: 0 auto;
        }
 
        #submitRating {
            float: right;
            border-radius: 6px;
            background-color: #00A0E1;
            padding: 1%;
            width: 150px;
            border: none;
            margin-right: 5px;
            color: white;
            font-size: 19px;
        }
 
 
    }
 
    .icon-bar {
        position: fixed;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        transform: rotate(90deg);
        right: 0;
        font-style: normal;
        margin-right: -50px;
        height: 8px;
        z-index: 1;
 
    }
 
    .icon-bar a {
        display: block;
        text-align: center;
        padding: 12px;
        transition: all 0.3s ease;
        color: white;
 
 
    }
 
    .icon-bar a:hover {
        background-color: #00A0E1;
        text-decoration: none;
    }
 
    .LindeGas {
        background: #00305c;
        color: white;
        font-family: LindeDaxOffice;
        font-style: normal;
        font-size: 16px;
    }
 
    #usefulLinks {
        width: 80%;
        margin: 0 auto;
        display: block;
    }
 
    #usefulLinks p {
        color: #00305c;
        font-size: 20px;
    }
 
    /* rating style */
    .rate {
       width: 200px;
       float: left;
       height: 46px;
       padding: 0 10px;
       margin: auto;
    }
 
    .rate:not(:checked)>input {
        display: none;
    }
 
    .rate:not(:checked)>label {
        float: right;
        width: 1em;
        overflow: hidden;
        white-space: nowrap;
        cursor: pointer;
        font-size: 30px;
        color: #ccc;
    }
 
    .rate:not(:checked)>label:before {
        content: '★ ';
    }
 
    .rate>input:checked~label {
        color: #ffc700;
    }
 
    .rate:not(:checked)>label:hover,
    .rate:not(:checked)>label:hover~label {
        color: #deb217;
    }
 
    .rate>input:checked+label:hover,
    .rate>input:checked+label:hover~label,
    .rate>input:checked~label:hover,
    .rate>input:checked~label:hover~label,
    .rate>label:hover~input:checked~label {
        color: #c59b08;
    }
 
    #modalForm {
        display: none;
    }
 
    #moreInfoHeading {
        color: #00305c;
        font-weight: 500;
        font-size: 25px;
        text-align: center;
    }
 
    #modalForm,
    #modalFormMison {
        background-color: white;
        padding: 16px 20px;
        border: none;
        width: 50%;
        margin: 0 auto;
        position: absolute;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        top: 20%;
        left: 25%;
        z-index: 1;
    }
 
    .close-modal,
    .close-modal-mison {
        float: right;
        width: 8%;
        cursor: pointer;
        text-align: left;
        color: #00305c;
    }
 
    #firstName,
    #lastName,
    #message,
    #messageMison,
    #company,
    #phoneNumber,
    #emailAddress,
    #contactRequestTime,
    #emailAddressNonMison,
    #emailAddressMison,
    #lastNameMison,
    #firstNameMison {
        display: block;
        width: 100%;
        padding: .375rem .75rem;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        border-radius: 5px;
    }
 
    #firstName,
    #lastName,
    #company,
    #phoneNumber,
    #emailAddress,
    #emailAddressNonMison,
    #emailAddressMison,
    #lastNameMison,
    #firstNameMison {
        height: 45px;
    }
 
    #message,
    #messageMison {
        height: 150px;
    }
 
    #sendNewsDiv,
    #contactMeDiv {
        display: flex;
    }
 
    #contactMe,
    #sendNews,
    #sendNewsMison {
        opacity: 1;
        border: 1px solid;
        padding: 0;
        width: 30px;
    }
 
    #modalFormHeading {
        display: flex;
        width: 100%;
    }
 
    #modalFormHeading h3 {
        width: 90%;
        color: #00305c;
        font-weight: 500;
        font-size: 22px;
    }
 
    #modalFormHeadingHr {
        border: 0;
        border-top: 1px solid #b9b9b9;
        width: 100%;
        margin-bottom: 5%;
    }
 
    .submitContactForm,
    .submitRating {
        float: right;
        color: white;
        background-color: #00A0E1;
        border: none;
        padding: 1%;
        border-radius: 5px;
        width: 100px;
    }
 </style>
 
 <div>
 
    <h1 id="headingForResult"></h1>
    <p id="subHeadingResults">Klicka på gasnamnet för att läsa mer om produkten</p>
 
    <table id="gas-guide-table">
        <th>Gas</th>
        <th>Rekommenderad <span style="color:#009B3C; font-size: 50px; vertical-align: middle;">&#9679;</span></th>
        <th>Alternativ <span style="color:#FFD200; font-size: 50px; vertical-align: middle;">&#9679;</span></th>
        <th>Kan ge fördelar <span style="color:#DC7800; font-size: 50px; vertical-align: middle;">&#9679;</span>
        </th>
    </table>
 
    <div id="table-description-div">
        <p id="descriprion-table-p"><span
                style="color:#009B3C; font-size: 70px; vertical-align: middle;">&#9679;</span><span
                style="width: 85%;display: inline-flex;">Det bästa valet som alltid fungerar. Det är en
                PREMIUMPRODUKT som
                alltid överträffar standardprodukterna när det gäller produktivitet, kvalitet och
                arbetsmiljö.</span> </p>
        <p id="descriprion-table-p"> <span
                style="color:#FFD200; font-size: 70px; vertical-align: middle;">&#9679;</span><span
                style="width: 85%;display: inline-flex;">En alternativ standardprodukt som får jobbet gjort men
                saknar
                fördelarna med premiumprodukterna.</span></p>
        <p id="descriprion-table-p"><span
                style="color:#DC7800; font-size: 70px; vertical-align: middle;">&#9679;</span><span
                style="width: 85%;display: inline-flex;">Produkter som kan ge kvalitets- och produktivitetsfördelar
                i
                speciella fall (klicka på gasnamnet för att läsa mer om produkten).</span></p>
    </div>
 
    <h3 id="moreInfoHeading">Vill du veta mer?</h3>
 
    <!-- Quick links -->
    <div id="quickLinks">
        <button id="contactSupportButton" onclick="contactUsForm()">Kontakta vår
            support</button>
        <button id="targetBlankLinks"> <a href="https://www.linde-gas.se/sv/customer_service_ren/agent_finder/"
                target="_blank">Hitta försäljningsställe </a></button>
        <button id="targetBlankLinks"> <a
                href="https://www.linde-gas.se/shop/sv/se-ig/home?utm_source=aga.se&utm_medium=aga_referral&utm_content=link&utm_campaign=se-main-page_navigation_eng"
                target="_blank">Besök vår onlineshop</a></button>
        <p style="color: #00305c;font-size: 20px; margin-top: 2%; margin-bottom: 3%; font-weight: 700;">Ytterligare information finns
            på
            Lindes hemsida. Klicka<a href="https://www.linde-gas.se/en/processes_ren/welding/index.html" target="_blank"
                style="color: #00A0E1"> här</a></p>
    </div>
    <p id="contactUsText">Kontakta Linde WELDONOVA® process support team om du vill veta mer. Du kan även söka efter
        ditt närmaste
        försäljningsställe eller besöka Lindes Online shop via länkarna nedan. </p>
 
    <!-- non-Mison user form -->
 
    <form id="nonMisonUserForm">
        <div id="modalForm" style="display: none;">
            <div id="modalFormHeading">
                <h3>Fyll i uppgifterna för att bli kontaktad</h3>
                <p class="close-modal">&#x2715;</p>
            </div>
            <hr id="modalFormHeadingHr">
            <label>Förnamn*</label><br>
            <input type="text" id="firstName" required></input><br>
            <label>Efternamn*</label><br>
            <input type="text" id="lastName" required></input><br>
            <label>Företag*</label><br>
            <input type="text" id="company" required></input><br>
            <label>E-post*</label><br>
            <input type="text" id="emailAddress" required></input><br>
            <div id="contactMeDiv">
                <input type="checkbox" id="contactMe" name="contactMe"><br>
                <label for="contactMe">Jag vill bli kontaktad</label><br>
            </div><br>
            <div id="contactMeDivAdditional" style="display: none;">
                <label>Telefonnummer*</label><br>
                <input type="text" id="phoneNumber"></input><br>
                <label>Önskad tid att bli kontaktad*</label>
                <select name="contactRequestTime" id="contactRequestTime">
                    <option value="" selected>Välj ett alternativ*</option>
                    <option value="8:00 - 12:00">8:00 - 12:00</option>
                    <option value="12:00 - 16:00">12:00 - 16:00</option>
                    <option value="12:00 - 16:00">12:00 - 16:00</option>
                </select><br>
            </div>
            <label>Meddelande</label><br>
            <textarea id="message"></textarea><br>
            <div id="sendNewsDiv">
                <input type="checkbox" id="sendNews"><br>
                <label for="sendNews">Ja tack, håll mig uppdaterad med relevanta nyheter och tips om svetsning, skärning
                    och värmning via e-post</label><br>
            </div>
            <button type="submit" class="submitContactForm" id="submitButton">Skicka</button>
        </div>
    </form>
 
    <!-- Mison user form -->
 
    <form id="MisonUserForm">
        <div id="modalFormMison" style="display: none;">
            <div id="modalFormHeading">
                <h3>Fyll i uppgifterna för att bli kontaktad</h3>
                <p class="close-modal-mison">&#x2715;</p>
            </div>
            <hr id="modalFormHeadingHr">
            <label>Förnamn*</label><br>
            <input type="text" id="firstNameMison" required></input><br>
            <label>Efternamn*</label><br>
            <input type="text" id="lastNameMison" required></input><br>
            <label>E-post*</label><br>
            <input type="text" id="emailAddressMison" required></input><br>
            <label>Meddelande*</label><br>
            <textarea id="messageMison"></textarea><br>
            <div id="sendNewsDiv">
                <input type="checkbox" id="sendNewsMison"><br>
                <label for="sendNewsMison">Ja tack, håll mig uppdaterad med relevanta nyheter och tips om svetsning,
                    skärning och värmning via e-post</label><br>
            </div>
            <button type="submit" class="submitContactForm" id="submitButton">Skicka</button>
        </div>
    </form>
 
    <!-- TODO BUG position change (top) on selection, can't figure out why, CSS class related  -->
 
    <form id="ratingForm">
        <div id="ratingCardDiv">
            <h4 id="ratingArea1"></h4>
            <p id="ratingArea2"></p>
            <div class="rate">
                <input type="radio" id="star5" name="rate" value="5" />
                <label for="star5" title="text">5 stars</label>
                <input type="radio" id="star4" name="rate" value="4" />
                <label for="star4" title="text">4 stars</label>
                <input type="radio" id="star3" name="rate" value="3" />
                <label for="star3" title="text">3 stars</label>
                <input type="radio" id="star2" name="rate" value="2" />
                <label for="star2" title="text">2 stars</label>
                <input type="radio" id="star1" name="rate" value="1" />
                <label for="star1" title="text">1 star</label>
            </div>
            <button type="submit" class="submitRating" id="submitButton">Skicka</button>
    </form>
 
    <!-- TODO what is this for? -->
    <p id="userEmail" hidden></p>
    <p></p>
    <div style="display: inline-flex; margin-top: 1%;">
 
    </div>
    <div style="float: right; margin-bottom: 2%;">
        <div id="server-results">
            <!-- For server results -->
        </div>
        <p style="margin-bottom: 5%;"></p>
    </div>
    <br>
 
 </div>
 </div>
 </div>
 
 <script type="text/javascript">
 
    // general variables and translations
    const formLanguage = "se";
    const ratingCardDivResponse = "Tack, vi har tagit emot ditt svar!";
    const ratingArea1 = "Hur nöjd är du?";
    const ratingArea2 = "Låt oss veta vad du tycker om vår skyddsgasguide";
    const formSubmitPage = "https://www.linde-gas.se/shop/sv/se-ig/respons?language=" + formLanguage;
 
    const dialog = document.getElementById("useFulLinksToContinue");
    const background = document.getElementById("gas-guide-table");
    const buttonsDiv = document.getElementById("buttonsDiv");
    const tableDescription = document.getElementById("table-description-div");
 
    // TODO parse URL args: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const userEmail = urlParams.get('email');
    const misonUserCheck = urlParams.get('misonUserCheck');
 
    var modal = document.getElementById("modalForm");
    let phoneNum = "";
 
    const nonMisonUser = document.getElementById("modalForm");
    const misonUser = document.getElementById("modalFormMison");
    const emailInputMison = document.getElementById("emailAddress");
    const userConsent = "1";
    let contactFirstName = document.getElementById("firstName");
    let contactLastName = document.getElementById("lastName");
 
    // TODO
    function contactUsForm() {
        // display non-Mison user form if "misonUserCheck" = 1, otherwise display full form
 
        if (misonUserCheck) {
            document.getElementById("modalFormMison").style.display = "block";
            document.getElementById("emailAddressMison").value = userEmail;
        }
        else {
            // non-Mison form
            document.getElementById("modalForm").style.display = "block";
            document.getElementById("emailAddress").value = userEmail;
        }
    }
 
    var span = document.getElementsByClassName("close-modal")[0];
    var span2 = document.getElementsByClassName("close-modal-mison")[0];
 
    span.onclick = function () {
        modal.style.display = "none";
    }
    span2.onclick = function () {
        misonUser.style.display = "none";
    }
 
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    window.onclick = function (event) {
        if (event.target == misonUser) {
            misonUser.style.display = "none";
        }
    }
 
    const getPhoneElement = document.getElementById("phoneNumber");
    getPhoneElement.addEventListener('change', phoneNumValue);
 
    function phoneNumValue(e) {
        phoneNum = e.target.value;
        console.log(phoneNum);
    }
 
    var table = document.getElementById("gas-guide-table");
    var url = document.URL;
    var linkSplit = url.split("?");
    var parameterSide = linkSplit[1];
    var proccessAndGas = parameterSide.split("&");
    var process = proccessAndGas[0].split("=");
    var processParam = decodeURI(process[1]);
    var gas = proccessAndGas[1].split("=");
    var gasParam = decodeURI(gas[1]);
    var lowerGas = gasParam.toLowerCase();
    document.getElementById("headingForResult").append("Rätt gas för \n" + processParam + " av " + lowerGas);
 
    const gasProducts = {
        "ROTSKYDD": {
            "Olegerat/låglegerat stål": {
                "recommended": [
                    "FORMIER®10"
                ],
                "alternative": [
                    "NITROGEN",
                    "ARGON"
                ],
                "futher benefits": [
 
                ]
 
            },
            "Rostfritt stål, austenitiskt": {
                "recommended": [
                    "FORMIER®10"
                ],
                "alternative": [
                    "NITROGEN",
                    "ARGON",
                    "VARIGON® H5"
                ],
                "futher benefits": [
 
                ]
            },
            "Rostfritt stål, duplex": {
                "recommended": [
                    "FORMIER®10"
                ],
                "alternative": [
                    "NITROGEN",
                    "ARGON",
                ],
                "futher benefits": [
 
                ]
            },
            "Aluminium och aluminiumlegeringar": {
                "recommended": [
                    "ARGON"
                ],
                "alternative": [
                    "NITROGEN",
                ],
                "futher benefits": [
 
                ]
            },
            "Koppar och kopparlegeringar": {
                "recommended": [
                    "ARGON"
                ],
                "alternative": [
                    "NITROGEN",
                ],
                "futher benefits": [
 
                ]
            },
            "Titan": {
                "recommended": [
                    "ARGON 4.8 premium"
                ],
                "alternative": [
                    "ARGON",
                ],
                "futher benefits": [
 
                ]
            },
 
        },
        "PLASMA": {
            "Olegerat/låglegerat stål": {
                "recommended": [
                    "ARGON"
                ],
                "alternative": [
 
                ],
                "futher benefits": [
                    "ARGON 4.8 premium"
                ]
 
            },
            "Rostfritt stål, austenitiskt": {
                "recommended": [
                    "VARIGON® H5",
                ],
                "alternative": [
                    "ARGON",
 
                ],
                "futher benefits": [
 
                ]
            },
            "Rostfritt stål, duplex": {
                "recommended": [
                    "ARGON"
                ],
                "alternative": [
 
                ],
                "futher benefits": [
 
                ]
            },
            "Aluminium och aluminiumlegeringar": {
                "recommended": [
                    "ARGON"
                ],
                "alternative": [
 
                ],
                "futher benefits": [
 
                ]
            },
            "Koppar och kopparlegeringar": {
                "recommended": [
                    "ARGON"
                ],
                "alternative": [
 
                ],
                "futher benefits": [
 
                ]
            },
            "Titan": {
                "recommended": [
                    "ARGON 4.8 premium"
                ],
                "alternative": [
                    "ARGON",
                ],
                "futher benefits": [
 
                ]
            },
 
        },
        "MIG/MAG": {
            "Olegerat/låglegerat stål": {
                "recommended": [
                    "MISON®18"
                ],
                "alternative": [
                    "MISON®25",
                    "CORGON®18",
                    "CORGON®25",
                    "KOLDIOXID",
 
                ],
                "futher benefits": [
                    "MISON®8"
                ]
 
            },
            "Rostfritt stål, austenitiskt": {
                "recommended": [
                    "MISON®2"
                ],
                "alternative": [
 
                ],
                "futher benefits": [
                    "MISON®2HE"
                ]
            },
            "Rostfritt stål, duplex": {
                "recommended": [
                    "MISON®2HE"
                ],
                "alternative": [
 
                ],
                "futher benefits": [
 
                ]
            },
            "Aluminium och aluminiumlegeringar": {
                "recommended": [
                    "MISON®AR"
                ],
                "alternative": [
                    "ARGON"
                ],
                "futher benefits": [
                    "MISON®HE30",
                    "ARIGON®HE50",
                    "VARIGON®HE70",
                ]
            },
            "Koppar och kopparlegeringar": {
                "recommended": [
                    "MISON®AR"
                ],
                "alternative": [
                    "ARGON"
                ],
                "futher benefits": [
                    "MISON®HE30",
                    "ARIGON®HE50",
                    "VARIGON®HE70",
                ]
            },
        },
        "MIG lödning": {
            "Olegerat/låglegerat stål": {
                "recommended": [
                    "MISON®AR"
                ],
                "alternative": [
                    "ARGON",
 
                ],
                "futher benefits": [
                ],
 
            },
            "Elförzinkat stål": {
                "recommended": [
                    "MISON®AR"
                ],
                "alternative": [
                    "ARGON",
 
                ],
                "futher benefits": [
                ],
            },
            "Varmförzinkat stål": {
                "recommended": [
                    "MISON®2HE"
                ],
                "alternative": [
                    "MISON®AR",
                    "ARGON"
                ],
                "futher benefits": [
 
                ],
            },
        },
 
        "TIG": {
            "Olegerat/låglegerat stål": {
                "recommended": [
                    "MISON®AR"
                ],
                "alternative": [
                    "ARGON"
 
                ],
                "futher benefits": [
                    "MISON®HE30",
                    "VARIGON®HE50",
                ]
 
            },
            "Rostfritt stål, austenitiskt": {
                "recommended": [
                    "MISON®AR"
                ],
                "alternative": [
                    "ARGON"
 
                ],
                "futher benefits": [
                    "MISON®H2",
                    "MISON®HE30",
                    "VARIGON®HE50",
                    "VARIGON®H5",
                ]
            },
            "Rostfritt stål, duplex": {
                "recommended": [
                    "MISON®AR"
                ],
                "alternative": [
                    "ARGON"
 
                ],
                "futher benefits": [
                    "MISON®N2",
                    "MISON®HE30",
                    "VARIGON®HE50",
                ]
            },
            "Aluminium och aluminiumlegeringar": {
                "recommended": [
                    "MISON®AR"
                ],
                "alternative": [
                    "ARGON"
 
                ],
                "futher benefits": [
                    "MISON®HE30",
                    "VARIGON®HE50",
                    "VARIGON®HE70",
                ]
            },
            "Koppar och kopparlegeringar": {
                "recommended": [
                    "MISON®AR"
                ],
                "alternative": [
                    "ARGON"
 
                ],
                "futher benefits": [
                    "MISON®HE30",
                    "VARIGON®HE50",
                    "VARIGON®HE70",
                ]
            },
            "Titan": {
                "recommended": [
                    "ARGON 4.8 premium"
                ],
                "alternative": [
                    "ARGON"
 
                ],
                "futher benefits": [
                    "VARIGON®HE50",
                    "VARIGON®HE70",
                ]
            },
 
        },
    }
 
    const gasLinks = {
        "MISON®AR": "https://www.linde-gas.se/shop/sv/se-ig/mison%C2%AE-ar-flaska",
        "MISON®HE30": "https://www.linde-gas.se/shop/sv/se-ig/mison%C2%AE-he30-flaska",
        "MISON®H2": "https://www.linde-gas.se/shop/sv/se-ig/mison%C2%AE-h2-flaska",
        "MISON®N2": "https://www.linde-gas.se/shop/sv/se-ig/mison%C2%AE-n2-flaska",
        "MISON®2": "https://www.linde-gas.se/shop/sv/se-ig/industrigaser-industrialgas/skyddsgaser-ig-shielding-gas/mison%C2%AE-2-flaska",
        "MISON®2HE": "https://www.linde-gas.se/shop/sv/se-ig/mison%C2%AE-2he-flaska",
        "MISON®8": "https://www.linde-gas.se/shop/sv/se-ig/1001-108",
        "MISON®18": "https://www.linde-gas.se/shop/sv/se-ig/industrigaser-industrialgas/skyddsgaser-ig-shielding-gas/mison%C2%AE-18-flaska",
        "MISON®25": "https://www.linde-gas.se/shop/sv/se-ig/mison%C2%AE-25-flaska",
        "ARGON": "https://www.linde-gas.se/shop/sv/se-ig/argon-flaska",
        "ARGON 4.8 premium": "https://www.linde-gas.se/shop/sv/se-ig/argon-48-premium-flaska",
        "VARIGON®H5": "https://www.linde-gas.se/shop/sv/se-ig/varigon%C2%AE-h5-flaska",
        "VARIGON®HE50": "https://www.linde-gas.se/shop/sv/se-ig/varigon%C2%AE-he50-flaska",
        "VARIGON®HE70": "https://www.linde-gas.se/shop/sv/se-ig/varigon%C2%AE-he70-flaska",
        "CORGON®18": "https://www.linde-gas.se/shop/sv/se-ig/corgon%C2%AE-18-flaska",
        "CORGON®25": "https://www.linde-gas.se/shop/sv/se-ig/corgon%C2%AE-25-flaska",
        "FORMIER®10": "https://www.linde-gas.se/shop/sv/se-ig/formier%C2%AE-10-flaska",
        "NITROGEN": "https://www.linde-gas.se/shop/sv/se-ig/nitrogen-flaska",
        "KOLDIOXID": "https://www.linde-gas.se/shop/SearchDisplay?searchTerm=CARBON+DIOXIDE&categoryId=&storeId=715846435&catalogId=3074457345616681568&langId=108&sType=SimpleSearch&resultCatEntryType=2&showResultsPage=true&searchSource=Q&pageView=&actualItem=CARBONDIOXIDE&beginIndex=0&pageSize=12&promoOnlySearch=&seractermMobDupl=CARBON+DIOXIDE&seractermDesDupl=CARBON+DIOXIDE"
 
    }
 
    const recommended = gasProducts[processParam][gasParam]['recommended'];
    const alternative = gasProducts[processParam][gasParam]['alternative'];
    const furtherBenefits = gasProducts[processParam][gasParam]['futher benefits'];
 
    function drawTable(recommended, alternative, furtherBenefits) {
        recommended.forEach(i => {
            var link = gasLinks[i];
            var aHref = document.createElement("a");
            aHref.setAttribute("href", link);
            var tr = document.createElement("tr");
            var td = document.createElement("td");
            var tdTxt = document.createTextNode(i);
            console.log(tdTxt);
            var tdrecommened = document.createElement("td");
            tdrecommened.id = "recommended";
            var tdTxtrecommened = document.createTextNode("\u2714");
            var tdAlt = document.createElement("td");
            tdAlt.id = "notRec";
            var tdtxtAlt = document.createTextNode("\u2716");
            var tdBenefits = document.createElement("td");
            tdBenefits.id = "notRec";
            var tdtxtBenefits = document.createTextNode("\u2716");
            table.append(tr);
            aHref.append(td);
            tr.append(aHref);
            tr.append(tdrecommened);
            tr.append(tdAlt);
            tr.append(tdBenefits);
            td.append(tdTxt);
            tdrecommened.append(tdTxtrecommened);
            tdAlt.append(tdtxtAlt);
            tdBenefits.append(tdtxtBenefits);
 
        });
 
        alternative.forEach(i => {
            console.log(alternative, i);
            var link2 = gasLinks[i];
            var aHref2 = document.createElement("a");
            aHref2.setAttribute("href", link2);
            var tr2 = document.createElement("tr");
            var td2 = document.createElement("td");
            var tdTxt2 = document.createTextNode(i);
            var tdrecommened = document.createElement("td");
            tdrecommened.id = "notRec";
            var tdTxtrecommened = document.createTextNode("\u2716");
            var tdAlt = document.createElement("td");
            var tdtxtAlt = document.createTextNode("\u2714");
            tdAlt.id = "alternative";
            var tdBenefits = document.createElement("td");
            tdBenefits.id = "notRec";
            var tdtxtBenefits = document.createTextNode("\u2716");
            table.append(tr2);
            aHref2.append(td2)
            tr2.append(aHref2);
            td2.append(tdTxt2);
            tr2.append(tdrecommened);
            tr2.append(tdAlt);
            tr2.append(tdBenefits);
            tdrecommened.append(tdTxtrecommened);
            tdAlt.append(tdtxtAlt);
            tdBenefits.append(tdtxtBenefits);
 
        });
        furtherBenefits.forEach(i => {
            console.log(furtherBenefits, i);
            var link3 = gasLinks[i];
            var aHref3 = document.createElement("a");
            aHref3.setAttribute("href", link3);
            var tr3 = document.createElement("tr");
            var td3 = document.createElement("td");
            var tdTxt3 = document.createTextNode(i);
            var tdrecommened = document.createElement("td");
            tdrecommened.id = "notRec";
            var tdTxtrecommened = document.createTextNode("\u2716");
            var tdAlt = document.createElement("td");
            tdAlt.id = "notRec";
            var tdtxtAlt = document.createTextNode("\u2716");
            var tdBenefits = document.createElement("td");
            tdBenefits.id = "fartherBenefits";
            var tdtxtBenefits = document.createTextNode("\u2714");
            table.append(tr3);
            aHref3.append(td3);
            tr3.append(aHref3);
            td3.append(tdTxt3);
            tr3.append(tdrecommened);
            tr3.append(tdAlt);
            tr3.append(tdBenefits);
            tdrecommened.append(tdTxtrecommened);
            tdAlt.append(tdtxtAlt);
            tdBenefits.append(tdtxtBenefits);
 
 
        });
    }
 
    drawTable(recommended, alternative, furtherBenefits);
 
 </script>
 
 <script type="text/javascript">
    // move all jquery code outside of the main element and initialize properly
    $(document).ready(function () {
 
        // rating logic
        let rating = "No rating";
        document.getElementById("star1").addEventListener("click", function () {
            rating = "1";
        });
        document.getElementById("star2").addEventListener("click", function () {
            rating = "2";
        });
        document.getElementById("star3").addEventListener("click", function () {
            rating = "3";
        });
        document.getElementById("star4").addEventListener("click", function () {
            rating = "4";
        });
        document.getElementById("star5").addEventListener("click", function () {
            rating = "5";
        });
 
        // apply local translations
        $("#ratingArea1").html(ratingArea1);
        $("#ratingArea2").html(ratingArea2);
 
        // non-Mison user form
        $("#nonMisonUserForm").submit(function (event) {
            console.log("submit event");
            event.preventDefault();
 
            // value for marketing consent is either "on" or null
            if ($('#sendNews').is(':checked')) {
                var contactSendNews = "on";
            } else {
                var contactSendNews = "";
            }
 
            // value for marketing consent is either "on" or null
            if ($('#contactMe').is(':checked')) {
                var contactMeValue = "on";
            } else {
                var contactMeValue = "";
            }
 
            $.ajax({
                url: "https://s1512530243.t.eloqua.com/e/f2",
                type: "POST",
                data:
                {
                    // eloqua base
                    elqFormName: "MisonCampaignGatedGasGuideForm2021",
                    elqSiteID: "1512530243",
                    marketingOptinSource1: "Gas Guide",
                    misonCampaignGasGuideUser1: "1",
                    misonUserCheck: "0",
                    language: formLanguage,
                    // user input
                    marketingConsent: contactSendNews,
                    firstName: $("#firstName").val(),
                    lastName: $("#lastName").val(),
                    emailAddress: $("#emailAddress").val(),
                    company: $("#company").val(),
                    busPhone: $("#phoneNumber").val(),
                    messageBox: $("#message").val(),
                    contactRequestTime: $("#contactRequestTime").val(),
                    contactMe: contactMeValue,
                }
            }).fail(function (jqXHR, textStatus, errorThrown) {
                console.log('call failed');
            }).done(function (data, textStatus, jqXHR) {
                $("#submitButton").attr("disabled", true);
                window.location.replace(formSubmitPage);
            });
        });
 
        // Mison user form
        $("#MisonUserForm").submit(function (event) {
            console.log("submit event");
            console.log($("#messageMison").val());
            event.preventDefault();
 
            // value for marketing consent is either "on" or null, default not supported
            if ($('#sendNewsMison').is(':checked')) {
                var contactSendNews = "on";
            } else {
                var contactSendNews = "";
            }
 
            $.ajax({
                url: "https://s1512530243.t.eloqua.com/e/f2",
                type: "POST",
                data:
                {
                    // eloqua base
                    elqFormName: "MisonCampaignGatedGasGuideForm2021",
                    elqSiteID: "1512530243",
                    marketingOptinSource1: "Gas Guide",
                    misonCampaignGasGuideUser1: "1",
                    misonUserCheck: "1",
                    language: formLanguage,
                    // user input
                    marketingConsent: contactSendNews,
                    firstName: $("#firstNameMison").val(),
                    lastName: $("#lastNameMison").val(),
                    emailAddress: $("#emailAddressMison").val(),
                    messageBox: $("#messageMison").val(),
                }
            }).fail(function (jqXHR, textStatus, errorThrown) {
                console.log('call failed');
                location.reload();
            }).done(function (data, textStatus, jqXHR) {
                $("#submitButton").attr("disabled", true);
                window.location.replace(formSubmitPage);
            });
        });
 
        // rating form
        $("#ratingForm").submit(function (event) {
            event.preventDefault();
 
            $.ajax({
                url: "https://s1512530243.t.eloqua.com/e/f2",
                type: "POST",
                data: {
                    elqFormName: "MisonCampaign2021-GasGuideRatingcollector",
                    elqSiteID: "1512530243",
                    rating: rating,
                    language: formLanguage,
                }
            }).fail(function (jqXHR, textStatus, errorThrown) {
                console.log('call failed');
                location.reload();
            }).done(function (data, textStatus, jqXHR) {
                $("#ratingCardDiv").html(ratingCardDivResponse);
            });
 
        });
 
        $(function () {
 
            // show additional contact fields if "i want to be contacted" is selected - make phone number field required
            $("#contactMe").on('click', function () {
                if ($(this).prop('checked')) {
                    $("#contactMeDivAdditional").show();
                    $("#phoneNumber").prop('required', true);
                    $("#contactRequestTime").prop('required', true);
                } else {
                    $("#contactMeDivAdditional").hide();
                }
            });
 
        });
 
    });
 </script>
 
