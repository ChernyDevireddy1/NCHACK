$(document).ready(function() {
    console.log("hi");
    myfunc();
    console.log("bye");
});

function myfunc (){
    const filename = "http://github.com/ChernyDevireddy1/NCHACK/blob/main/files/Metro_invt_fs_uc_sfrcondo_sm_month.csv"; // replace with direct link to your desired CSV file
    console.log("start");
    var xhr = new XMLHttpRequest();
    xhr.open('GET', filename);
    console.log("here");
    xhr.onload = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Parse CSV data
            const parsedData = Papa.parse(xhr.responseText, { header: true });
            
            console.log(parsedData.data); // Access parsed data as an array of objects
        }
    };
    xhr.send(null);
    console.log("end");
}



/*$(document).ready(function() {
  const filename = "http://github.com/ChernyDevireddy1/NCHACK/blob/main/files/Metro_invt_fs_uc_sfrcondo_sm_month.csv"; // replace with your desired filename

  var data;
  console.log("hi");
  var xhr = new XMLHttpRequest();
  console.log("output");
  xhr.open('GET', filename);
  xhr.onload = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
          // Parse CSV data
          const parsedData = Papa.parse(xhr.responseText, { header: true });
          
          console.log(parsedData.data); // Access parsed data as an array of objects }
      }
  };
  xhr.send(null);
    // data = $.csv.toArrays(xhr.responseText);
    // console.log(data);
//   fetch(csv)
//     .then(response => response.text())
//     .then(data => {
//       const csvData = [];
//       csv(data)
//         .on('data', row => {
//           csvData.push(row);
//         })
//         .on('end', () => {
//           console.log(csvData);
//           // do something with csvData
//         });
//     })
    // .catch(error => console.error(error));


    // var data = $.csv.toArrays(csv);
    // console.log("check",csv.file[0]);
    // console.log("data:", data);

    // myForm.addEventListener("submit", function (e) {
    //     e.preventDefault();
    //     console.log("button has been clicked");
    //     const input = csv.querySelector('input[type="file"]').files[0];//csvFile.files[0];
    //    // const input = myForm.querySelector('input[type="file"]').files[0]; // Replaced "csvFile" with "myForm.querySelector('input[type="file"]')"

    //     const reader = new FileReader();
    //     reader.onload = function (e) {
    //        const text = e.target.result;
    //        document.write(text);
    //        console.log(text);
    //     };
    //     reader.readAsText(input);
    //  });
});*/