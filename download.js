function downloadPDF(pdfUrl) {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = pdfUrl.substring(pdfUrl.lastIndexOf('/') + 1);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
