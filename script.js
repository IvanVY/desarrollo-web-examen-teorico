document.addEventListener('DOMContentLoaded', function() {
    // Función de búsqueda
    const searchButton = document.getElementById('searchButton');
    const searchTerm = document.getElementById('searchTerm');
    
    searchButton.addEventListener('click', searchTable);
    searchTerm.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            searchTable();
        }
    });
    
    function searchTable() {
        const filter = searchTerm.value.toUpperCase();
        const table = document.querySelector('.terms-table');
        const tr = table.getElementsByTagName('tr');
        
        for (let i = 1; i < tr.length; i++) {
            const tdTerm = tr[i].getElementsByTagName('td')[1];
            const tdDefinition = tr[i].getElementsByTagName('td')[2];
            
            if (tdTerm || tdDefinition) {
                const termText = tdTerm.textContent || tdTerm.innerText;
                const definitionText = tdDefinition.textContent || tdDefinition.innerText;
                
                if (termText.toUpperCase().indexOf(filter) > -1 || 
                    definitionText.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                    tr[i].classList.add('highlight');
                    setTimeout(() => tr[i].classList.remove('highlight'), 1000);
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
    
    // Efecto de resaltado para las filas al cargar
    const rows = document.querySelectorAll('.terms-table tbody tr');
    rows.forEach((row, index) => {
        setTimeout(() => {
            row.classList.add('fade-in');
        }, index * 50);
    });
});