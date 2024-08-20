const keys = [
	"9ER32tM7-4vgDO703-GJ624Hk3",
	"5t7jA38Z-3Z6Rr28y-4D8Bq6p3",
	"Fdb521S8-2Q6w0tz9-W9c7V65S",
  ];
  
  const headers = {
	'CF-Client-Version': 'a-6.11-2223',
	'Host': 'api.cloudflareclient.com',
	'Connection': 'Keep-Alive',
	'Accept-Encoding': 'gzip',
	'User-Agent': 'okhttp/3.12.1',
  };
  
  async function getKey() {
	// Simulated key generation process
	const key = keys[Math.floor(Math.random() * keys.length)];
	return key;
  }
  
  export default {
	async fetch(request, env, ctx) {
	  const key = await getKey();
  
	  // Generate HTML content
	  const html = `
		<!DOCTYPE html>
		<html lang="en">
		<head>
		  <meta charset="UTF-8">
		  <meta name="viewport" content="width=device-width, initial-scale=1.0">
		  <title>Chocolatecandyman</title>
		  <style>
			body {
			  font-family: Arial, sans-serif;
			  background: #f9f9f9;
			  padding: 20px;
			  text-align: center;
			}
			.container {
			  max-width: 600px;
			  margin: 0 auto;
			  padding: 20px;
			  background-color: #fff;
			  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
			  border-radius: 10px;
			}
			h1 {
			  font-size: 2.5em;
			  color: #333;
			}
			.details {
			  margin: 20px 0;
			  font-size: 1.2em;
			}
			.key {
			  font-size: 1.5em;
			  font-weight: bold;
			  margin: 20px 0;
			  background-color: #e8f4f8;
			  padding: 15px;
			  border-radius: 5px;
			  display: inline-block;
			  color: #007bff;
			}
			.btn {
			  display: inline-block;
			  margin: 20px 0;
			  padding: 10px 20px;
			  background-color: #007bff;
			  color: white;
			  text-decoration: none;
			  border-radius: 5px;
			  font-size: 1em;
			}
			table {
			  width: 100%;
			  margin: 20px 0;
			  border-collapse: collapse;
			}
			table, th, td {
			  border: 1px solid #ddd;
			}
			th, td {
			  padding: 10px;
			  text-align: left;
			}
		  </style>
		</head>
		<body>
		  <div class="container">
			<h1>Support this project</h1>
			<p class="details">See Key details Below</p>
  
			<table>
			  <tr>
				<th>Validity</th>
				<td>Lifetime</td>
			  </tr>
			  <tr>
				<th>Device Limit</th>
				<td>5</td>
			  </tr>
			  <tr>
				<th>Data Traffic</th>
				<td>24PB</td>
			  </tr>
			</table>
  
			<p class="key">${key}</p>
  
			<a href="/" class="btn">GENERATE AGAIN</a>
  
			<h2>Support Me</h2>
			<p>
			  My Public Address to Receive BTC: 
			  <strong>bc1qzd3zj4p9zave80e485p5mm3n09ktm7gxhxaqhu</strong>
			</p>
			<a href="https://link.trustwallet.com/send?coin=0&address=bc1qzd3zj4p9zave80e485p5mm3n09ktm7gxhxaqhu" class="btn">
			  Send using Trust Wallet
			</a>
		  </div>
		</body>
		</html>
	  `;
  
	  return new Response(html, {
		headers: { 'Content-Type': 'text/html' },
	  });
	},
  };
  
