var map = L.map('map').setView([20, 0], 2); // This centers the map around lat 20, long 0 with a zoom level of 2.

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © OpenStreetMap contributors',
}).addTo(map);
// High School Education
L.marker([21.1458, 79.0882]).addTo(map)
    .bindPopup('<h3>High School Education</h3><p>Seventh-Day Adventist Higher Secondary School, 2013</p>');

// Junior College
L.marker([21.1458, 79.0882]).addTo(map)
    .bindPopup('<h3>Junior College</h3><p>Tuli Public School, 2015</p>');

// Bachelor in Biotechnology (I & II semester)
L.marker([27.8974, 78.0880]).addTo(map)
.bindPopup('<h3>Bachelor in Biotechnology (I & II semester)</h3><p>Mangalayatan University, 2016-2017</p>');

// Bachelor in Biotechnology (III & VIII semester)
L.marker([28.4744, 77.5040]).addTo(map)
.bindPopup('<h3>Bachelor in Biotechnology (III & VIII semester)</h3><p>Sharda University, 2017-2020</p>');

// Master in Biotechnology-Genetic Engineering
L.marker([28.4744, 77.5040]).addTo(map)
.bindPopup('<h3>Master in Biotechnology-Genetic Engineering</h3><p>Sharda University, 2020-2022</p>');

// PhD in Biomedicine
L.marker([41.3874, 2.1686]).addTo(map)
.bindPopup('<h3>PhD in Biomedicine</h3><p>University of Barcelona, 2022-2026</p>');