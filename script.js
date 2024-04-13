<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Conversor de Moedas</title>
<style>
    body {
        font-family: Arial, sans-serif;
        background-color: #f5f5f5;
    }
    .container {
        max-width: 400px;
        margin: 50px auto;
        background-color: #f9f9f9;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    h1 {
        text-align: center;
        color: #333;
    }
    input[type="number"] {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
    select {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
    button {
        width: 100%;
        padding: 10px;
        background-color: #FFB6C1;
        border: none;
        color: white;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
    }
    button:hover {
        background-color: #FF69B4;
    }
    .result {
        margin-top: 20px;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
</style>
</head>
<body>

<div class="container">
    <h1>Conversor de Moedas</h1>
    <input type="number" id="amount" placeholder="Digite o valor">
    <select id="fromCurrency">
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
    </select>
    <select id="toCurrency">
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
    </select>
    <button onclick="convertCurrency()">Converter</button>
    <div class="result" id="result"></div>
</div>

<script>
    function convertCurrency() {
        var amount = document.getElementById('amount').value;
        var fromCurrency = document.getElementById('fromCurrency').value;
        var toCurrency = document.getElementById('toCurrency').value;

        fetch('https://api.exchangerate-api.com/v4/latest/' + fromCurrency)
            .then(response => response.json())
            .then(data => {
                var exchangeRate = data.rates[toCurrency];
                var result = amount * exchangeRate;
                document.getElementById('result').innerHTML = amount + ' ' + fromCurrency + ' = ' + result.toFixed(2) + ' ' + toCurrency;
            })
            .catch(error => {
                console.log('Error:', error);
            });
    }
</script>

</body>
</html>
