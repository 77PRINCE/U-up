const options = {
  method: 'POST',
  headers: {'X-API-Key': '<api-key>', 'Content-Type': 'application/json'},
  body: '{"amount":1000,"phoneNumber":"237650000000"}'
};

fetch('https://api.pay.staging.mynkwa.com/collect', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));