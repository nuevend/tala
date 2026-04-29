<!DOCTYPE html>
<html>
<head>
<title>Fuel Dashboard</title>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">

<style>

/* RESET */
*{margin:0;padding:0;box-sizing:border-box;}

body{
  font-family: Inter, sans-serif;
  color:white;
  min-height:100vh;

  background:
    radial-gradient(circle at 20% 30%, rgba(16,185,129,0.35), transparent 40%),
    radial-gradient(circle at 80% 20%, rgba(255,255,255,0.15), transparent 40%),
    radial-gradient(circle at 70% 80%, rgba(34,197,94,0.30), transparent 45%),
    radial-gradient(circle at 10% 80%, rgba(255,255,255,0.10), transparent 40%),
    radial-gradient(circle at center, #064e3b, #022c22);

  background-blend-mode: screen, screen, screen, screen, normal;
}

/* LAYOUT */
.container{
  display:flex;
  gap:20px;
  padding:120px 40px;
}

/* BOX STYLE */
.box{
  background: rgba(255,255,255,0.12);
  border:1px solid rgba(255,255,255,0.25);
  backdrop-filter:blur(10px);
  border-radius:16px;
  padding:25px;
}

/* LEFT (60%) */
.left{
  flex:0.6;
}

/* RIGHT (40%) */
.right{
  flex:0.4;
}

/* TITLE */
h2{
  font-family:"Playfair Display";
  margin-bottom:15px;
}

/* VEHICLE */
.vehicle-buttons button{
  margin:5px;
}

/* INPUT */
input{
  padding:10px;
  margin:8px 5px 8px 0;
  width:180px;
}

/* BUTTONS */
button{
  padding:10px 14px;
  border:none;
  background:#16a34a;
  color:white;
  border-radius:6px;
  cursor:pointer;
}

button:hover{
  background:#15803d;
}

/* ACTIONS */
.actions{
  margin-top:15px;
}

.actions button{
  margin:5px;
}

/* OUTPUT */
.output{
  margin-top:10px;
  background:#000;
  padding:15px;
  border-radius:10px;
  height:350px;
  overflow:auto;
}

pre{
  color:#00ff88;
  font-size:13px;
}

/* BACK BUTTON */
.back{
  margin-top:20px;
  display:inline-block;
}

/* RESPONSIVE */
@media(max-width:900px){
  .container{
    flex-direction:column;
  }
}

</style>
</head>

<body>

<div class="container">

<!-- LEFT PANEL -->
<div class="box left">

<h2>Fuel Monitoring System</h2>

<!-- VEHICLE -->
<p>Select Vehicle:</p>
<div class="vehicle-buttons">
  <button onclick="setVehicle('motorcycle')">MOTOR</button>
  <button onclick="setVehicle('sedan')">SEDAN</button>
  <button onclick="setVehicle('suv')">SUV</button>
  <button onclick="setVehicle('truck')">TRUCK</button>
</div>

<!-- INPUT -->
<div>
  <input id="distance" placeholder="Distance (km)">
  <input id="fuel" placeholder="Fuel Used (L)">
  <button onclick="addRecord()">Add Record</button>
</div>

<!-- ACTIONS -->
<div class="actions">
  <button onclick="showHistory()">View History</button>
  <button onclick="showSummary()">Summary</button>
  <button onclick="analyzeTrend()">Trend</button>
  <button onclick="exportReport()">Export</button>
</div>

<a href="index.html" class="back">⬅ Back</a>

</div>

<!-- RIGHT PANEL -->
<div class="box right">

<h2>Results</h2>

<div class="output">
  <pre id="output">System ready...</pre>
</div>

</div>

</div>

<script src="app.js"></script>
</body>
</html>