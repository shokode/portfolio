

function sortSections(order) {
    const container = document.getElementById("portfolio");
    const sections = Array.from(container.querySelectorAll("section"));

    sections.sort((a, b) => {
    const dateA = new Date(a.getAttribute('data-date'));
    const dateB = new Date(b.getAttribute('data-date'));
    console.log(dateA, dateB);
    return order === 'asc' ? dateA - dateB : dateB - dateA;
    });

    sections.forEach(section => container.appendChild(section));
}

      
function openPdfModal(pdfUrl) {
    document.getElementById('pdfViewer').src = pdfUrl;
    $('#pdfModal').modal('show');
}

// 閉じた時にPDFをリセット（再読み込みされるように）
$('#pdfModal').on('hidden.bs.modal', function () {
    document.getElementById('pdfViewer').src="pdf/YFFdesign.pdf";
});

function openPdfModal2(pdfUrl) {
    document.getElementById('pdfViewer2').src = pdfUrl;
    $('#pdfModal2').modal('show');
}

$('#pdfModal2').on('hidden.bs.modal', function () {
    document.getElementById('pdfViewer2').src = '';
});
