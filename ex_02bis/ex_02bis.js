document.getElementById('displayBtn').addEventListener('click', function() {
  const dataDisplay = document.getElementById('dataDisplay');
  const csvUrl = 'https://data.giss.nasa.gov/gistemp/tabledata_v4/GLB.Ts+dSST.csv';
  const proxyUrl = 'https://api.allorigins.win/raw?url=';
  fetch(proxyUrl + encodeURIComponent(csvUrl))
      .then(function(response) {
          if (!response.ok) {
              throw new Error('Failed to fetch the CSV file.');
          }
          return response.text();
      })
      .then(function(csvContent) {
          console.log('CSV content fetched successfully');
          const rows = csvContent.split('\n');
          let output = '';
          rows.forEach(function(row, index) {
              if (index === 0) return; // Skip header row
              const columns = row.split(',');
              if (columns.length > 2) {
                  const year = columns[0].trim();
                  const januaryTemp = columns[1].trim();
                  output += `${year}: ${januaryTemp}\n`;
              }
          });
          dataDisplay.textContent = output;
      })
      .catch(function(error) {
          console.error('Error fetching the data:', error);
          dataDisplay.textContent = 'Error fetching the data: ' + error.message;
      });
});
