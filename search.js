$(document).ready(function() {
    var csv = "../downloads/Metro_invt_fs_uc_sfrcondo_sm_month";
    // var data = $.csv.toArrays(csv);
    // console.log("data:", data)
    var myForm = document.getElementById("form"); // Added missing element with ID "form"

    myForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const input = csvFile.files[0];
       // const input = myForm.querySelector('input[type="file"]').files[0]; // Replaced "csvFile" with "myForm.querySelector('input[type="file"]')"

        const reader = new FileReader();
        reader.onload = function (e) {
           const text = e.target.result;
           document.write(text);
        };
        reader.readAsText(input);
     });
});