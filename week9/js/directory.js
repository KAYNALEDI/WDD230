

var companies = [
  {
      name: "Wynwood Brewing Company",
      address: "565 NW 24th St, Miami, FL 33127",
      phone: "(305) 982-8732",
      website: "http://wynwoodbrewing.com/",
      activities: ["Craft Beer Tasting", "Brewery Tours"]
  },
  {
      name: "The Biltmore Hotel",
      address: "1200 Anastasia Ave, Coral Gables, FL 33134",
      phone: "(855) 311-6903",
      website: "https://www.biltmorehotel.com/",
      activities: ["Golf Course", "Spa & Wellness", "Historical Tours"]
  },
  {
      name: "Marlins Park",
      address: "501 Marlins Way, Miami, FL 33125",
      phone: "(305) 480-1300",
      website: "https://www.mlb.com/marlins/ballpark",
      activities: ["Baseball Games", "Stadium Tours"]
  },
  {
      name: "Vizcaya Museum and Gardens",
      address: "3251 S Miami Ave, Miami, FL 33129",
      phone: "(305) 250-9133",
      website: "https://vizcaya.org/",
      activities: ["Historic House Tours", "Garden Walks", "Special Events"]
  },
  {
      name: "Cooking with Kids Miami",
      address: "123 NW 23rd St, Miami, FL 33127",
      phone: "(305) 111-2222",
      website: "https://www.cookingwithkids.com/",
      activities: ["Kids Cooking Classes", "Culinary Camps"]
  },
  {
      name: "Perez Art Museum Miami",
      address: "1103 Biscayne Blvd, Miami, FL 33132",
      phone: "(305) 375-3000",
      website: "https://www.pamm.org/",
      activities: ["Art Exhibitions", "Educational Programs"]
  },
  {
      name: "The Salty Donut",
      address: "50 NW 23rd St, Miami, FL 33127",
      phone: "(305) 639-8501",
      website: "https://www.saltydonut.com/",
      activities: ["Donut Tastings", "Coffee Pairings"]
  },
  {
      name: "Coral Gables Art Cinema",
      address: "260 Aragon Ave, Coral Gables, FL 33134",
      phone: "(786) 385-9689",
      website: "https://www.gablescinema.com/",
      activities: ["Independent Film Screenings", "Film Festivals"]
  },
  {
      name: "Exquisito Chocolates",
      address: "2606 SW 8th St, Miami, FL 33135",
      phone: "(305) 635-6626",
      website: "https://exquisitochocolates.com/",
      activities: ["Chocolate Tastings", "Bean-to-Bar Workshops"]
  },
  {
      name: "Books & Books",
      address: "265 Aragon Ave, Coral Gables, FL 33134",
      phone: "(305) 442-4408",
      website: "https://booksandbooks.com/",
      activities: ["Author Readings", "Book Signings"]
  },
  {
      name: "Candle Land",
      address: "154 Giralda Ave, Coral Gables, FL 33134",
      phone: "(305)-397-8471",
      website: "https://www.candlelandmiami.com/",
      activities: ["Candle Making", "Scent Pairings"]
  },
  {
      name: "Miami Water Sports",
      address: "50 NW 23rd St, Miami, FL 33127",
      phone: "(786)-713-8006",
      website: "https://www.miamiwatersports.com/",
      activities: ["Sunrise/Sunset Cruise", "Jet-Skiing and Paddleboard"]
  },
  
];


function generateCompanyItem(company) {
  var activities = company.activities.map(function(activity) {
      return `<li>${activity}</li>`;
  }).join('');

  return `
      <li class="company-list-item">
          <h3>${company.name}</h3>
          <p><strong>Address:</strong> ${company.address}</p>
          <p><strong>Phone:</strong> ${company.phone}</p>
          <p><strong>Website:</strong> <a href="${company.website}">${company.website}</a></p>
          <p><strong>Activities:</strong></p>
          <ul>${activities}</ul>
      </li>
  `;
}

// Function to generate the HTML for each company item in grid view
function generateCompanyCard(company) {
  var activities = company.activities.map(function(activity) {
      return `<li>${activity}</li>`;
  }).join('');

  return `
      <div class="company-card">
          <h3>${company.name}</h3>
          <p><strong>Address:</strong> ${company.address}</p>
          <p><strong>Phone:</strong> ${company.phone}</p>
          <p><strong>Website:</strong> <a href="${company.website}">${company.website}</a></p>
          <p><strong>Activities:</strong></p>
          <ul>${activities}</ul>
      </div>
  `;
}

// populate the company list
function populateCompanyList() {
  var companyList = document.getElementById("company-list");
  var companyItems = "";

  companies.forEach(function(company) {
      companyItems += generateCompanyItem(company);
  });

  companyList.innerHTML = companyItems;
}

// Function to populate the company grid
function populateCompanyGrid() {
  var companyGrid = document.getElementById("company-grid");
  var companyCards = "";

  companies.forEach(function(company) {
      companyCards += generateCompanyCard(company);
  });

  companyGrid.innerHTML = companyCards;
}

// switch between list and grid views
function switchView(view) {
  var listViewBtn = document.getElementById("list-view-btn");
  var gridViewBtn = document.getElementById("grid-view-btn");
  var companyList = document.getElementById("company-list");
  var companyGrid = document.getElementById("company-grid");

  if (view === "list") {
      listViewBtn.classList.add("active");
      gridViewBtn.classList.remove("active");
      companyList.style.display = "block";
      companyGrid.style.display = "none";
  } else if (view === "grid") {
      listViewBtn.classList.remove("active");
      gridViewBtn.classList.add("active");
      companyList.style.display = "none";
      companyGrid.style.display = "grid";
  }
}

//  populate the company list and grid
populateCompanyList();
populateCompanyGrid();
