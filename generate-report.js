const marge = require('mochawesome-report-generator');
const { merge } = require('mochawesome-merge');

async function generateReport() {
  const jsonReport = await merge({
    files: ['./mochawesome-report/*.json'],
  });
  await marge.create(jsonReport, {
    reportDir: './mochawesome-report',
  });
}

generateReport();
