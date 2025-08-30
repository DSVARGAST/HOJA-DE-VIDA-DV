// Descargar en PDF
function descargarPDF() {
  const cv = document.getElementById("cv");
  const opciones = {
    margin: 0.5,
    filename: "Hoja_de_Vida_David_Vargas.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" }
  };
  html2pdf().set(opciones).from(cv).save();
}

// Descargar versión ATS (texto plano sin estilos)
function descargarATS() {
  const cvText = document.getElementById("cv").innerText;
  const blob = new Blob([cvText], { type: "text/plain;charset=utf-8" });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "Hoja_de_Vida_David_Vargas_ATS.txt";
  link.click();
}
