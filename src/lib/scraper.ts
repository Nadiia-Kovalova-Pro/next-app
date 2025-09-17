import axios from 'axios';
import fs from 'fs';

async function scrapeAsteroidData() {
    try {
        const url = 'https://ssd-api.jpl.nasa.gov/cad.api';
        console.log('Fetching asteroid close approach data...');
        const response = await axios.get(url);
        const data = response.data;

        // Save as JSON
        fs.writeFileSync('asteroid_data.json', JSON.stringify(data, null, 2));
        console.log('Saved data to asteroid_data.json');

        // Convert to CSV
        const fields = data.fields;
        const rows = data.data;
        let csv = fields.join(',') + '\n';
        for (const row of rows) {
            csv += row.map((field: any) => `"${field}"`).join(',') + '\n';
        }
        fs.writeFileSync('asteroid_data.csv', csv);
        console.log('Saved data to asteroid_data.csv');

        console.log(`Processed ${data.count} asteroid close approaches.`);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

scrapeAsteroidData();