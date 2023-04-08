$(document).ready(function() {
    csv = "/Users/SumaVM/Documents/NCHACK/files/Metro_invt_fs_uc_sfrcondo_sm_month.csv";
    // var data = $.csv.toArrays(csv);
    // console.log("data:", data)
    myForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const input = csvFile.files[0];
        const reader = new FileReader();
        reader.onload = function (e) {
           const text = e.target.result;
           document.write(text);
        };
        reader.readAsText(input);
     });
});