require('isomorphic-fetch');
var Airtable = require('airtable');
var base = new Airtable({ apiKey: process.env.GATSBY_AIRTABLE_API_KEY }).base(
  process.env.GATSBY_AIRTABLE_BASE_ID
);

async function appendSpreadsheet(row) {
  try {
    return await base('Quiz').create(row);
  } catch (err) {
    return err.message;
  }
}

exports.handler = async (event, context, callback) => {
  const data = JSON.parse(event.body);
  const newRow = {
    Départements: data.department,
    Réponses: data.answer,
    Date: data.date,
  };
  const res = await appendSpreadsheet(newRow);
  callback(null, {
    statusCode: res.id ? 200 : 500,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
