import { API, sampleErrorData, sampleSuccessData } from './coffee.mjs';

/**
 * Fungsi processData:
 * 1. Mengembalikan data dari pemanggilan API.fetch berdasarkan argumen `data` yang diberikan.
 * 2. Membangkitkan error jika API.fetch mengembalikan Promise reject.
 */
function processData(data) {
  return Promise.all(
    data.map(item => API.fetch(item.delay, item.simulateError))
  );
}

// Test case
processData(sampleErrorData)
  .then(console.log)
  .catch(console.log); 
// → Throw exception: Error from delay 50

processData(sampleSuccessData)
  .then(console.log)
  .catch(console.log); 
// → expected output: ['Data from delay 100', 'Data from delay 50']
