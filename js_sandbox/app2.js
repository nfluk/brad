const firstName = 'Daniel';
const age = 17;
const job = 'karateka';
const city = 'Los Angeles';
let html = '';

html = `
<ul>
  <li>Name: ${firstName}</li>
  <li>Age: ${age}</li>
  <li>Job: ${job}</li>
  <li>City: ${city}</li>
</ul>
`;

document.body.innerHTML = html;
