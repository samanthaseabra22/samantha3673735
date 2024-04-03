document
  .getElementById("downloadButtonTRANSTORNO")
  .addEventListener("click", function () {
    // URL do arquivo PDF
    var pdfUrl = "../../arquivos/TRANSTORNO.docx";

    // Iniciar o download
    var link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "TRANSTORNO.docx";
    link.click();
  });

document
  .getElementById("downloadButtonMETAVERSO")
  .addEventListener("click", function () {
    // URL do arquivo PDF
    var pdfUrl = "../../arquivos/METAVERSO.docx";

    // Iniciar o download
    var link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "METAVERSO.docx";
    link.click();
  });
