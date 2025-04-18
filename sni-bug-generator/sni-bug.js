
// Load countries from countries.json and populate the dropdown
fetch('sni-bug-generator/countries.json')
  .then(response => response.json())
  .then(countries => {
    const countryBox = document.getElementById("country-box");

    // Populate dropdown with country names
    countries.forEach(country => {
      const option = document.createElement("option");
      option.value = country;
      option.textContent = country;
      countryBox.appendChild(option);
    });
  })
  .catch(error => console.error("Error loading countries.json:", error));

// Handle Generate button click
document.getElementById("generate-button").addEventListener("click", () => {
  const selectedCountry = document.getElementById("country-box").value;

  if (!selectedCountry) {
    // Show error if no country is selected
    document.getElementById("result-box").innerHTML = `
      <p style="color: red; font-weight: bold;">Please select a country!</p>
    `;
    return;
  }

  // Fetch country-specific SNI data from country_data.json
  fetch('sni-bug-generator/country_data.json')
    .then(response => response.json())
    .then(data => {
      // Filter data for the selected country
      const countryData = data.filter(item => item.Country === selectedCountry);

      if (countryData.length > 0) {
        // Generate and display SNI data grouped by ISP
        let resultHTML = `<p>SNIs for <strong>${selectedCountry}</strong>:</p>`;
        countryData.forEach(item => {
          resultHTML += `<p><strong>${item.ISP}:</strong></p>`;
          resultHTML += `<p>${item.SNI.join('<br>')}</p>`;
        });

        document.getElementById("result-box").innerHTML = resultHTML;
      } else {
        // No data available for the selected country
        document.getElementById("result-box").innerHTML = `
          <p style="color: red; font-weight: bold;">NO SNI FOUND FOR!!! <nav style="color: #00ff18">${selectedCountry}!</nav></p>
        `;
      }
    })
    .catch(error => {
      console.error("Error loading country_data.json:", error);
      document.getElementById("result-box").innerHTML = `
        <p style="color: red; font-weight: bold;">An error occurred while fetching data!</p>
      `;
    });
});

//
