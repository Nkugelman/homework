const family = {
  couple: {
    husband: { id: 1, name: "Totty", birthday: "1950-01-01" },
    wife: { id: 2, name: "Mommy", birthday: "1952-03-15" }
  },
  children: [
    {
    
          id: 4,
          name: "Devorala",
          birthday: "",
          couple: { husband: { id: 19, name: "Ari Shor", birthday: "" }, wife: { id: 20, name: "Devorala", birthday: "" } },
          children: [
            { id: 21, name: "Bassy", birthday: "" },
            { id: 22, name: "Leah", birthday: "" },
            { id: 23, name: "Yehuda", birthday: "" }
          ]
        },
        {
          id: 5,
          name: "Shui",
          birthday: "",
          couple: { husband: { id: 27, name: "Shui", birthday: "" }, wife: { id: 28, name: "Shaina", birthday: "" } },
          children: [
            { id: 29, name: "Sheindy", birthday: "" },
            { id: 30, name: "Levi", birthday: "" }
          ]
        },
         {
          id: 6,
          name: "Srulik",
          birthday: "",
          couple: { husband: { id: 32, name: "Srulik", birthday: "" }, wife: { id: 33, name: "Leah Mindel", birthday: "" } },
          children: [
            { id: 34, name: "Sara rochel", birthday: "" },
           
            { id: 36, name: "Zevy", birthday: "" }
          ]
        },
        {
          id: 7,
          name: "Tuli",
          birthday: "",
          couple: { husband: { id: 37, name: "Tuli", birthday: "" }, wife: { id: 38, name: "Leah", birthday: "" } },
          children: [
            { id: 39, name: "Gella", birthday: "" }
          ]
        },
        {
          id: 8,
          name: "Shaindel",
          birthday: "",
          couple: { husband: { id: 40, name: "Meshulim", birthday: "" }, wife: { id: 41, name: "Shaindel", birthday: "" } },
          children: [
            { id: 42, name: "Fraidy", birthday: "" },
            { id: 43, name: "Yechiel", birthday: "" }
          ]
        },
        {
          id: 10,
          name: "Binyomin",
          birthday: "",
          couple: { husband: { id: 44, name: "Binyomin", birthday: "" }, wife: { id: 45, name: "Rivky", birthday: "" } },
          children: [
            { id: 46, name: "Fraidy", birthday: "" }
          ]
        },
        {
          id: 11,
          name: "Baila",
          birthday: "",
          couple: { husband: { id: 47, name: "Aryr Leib", birthday: "" }, wife: { id: 48, name: "Baila", birthday: "" } },
          children: [
            { id: 49, name: "Zevi", birthday: "" }
          ]
        },
        // Singles
        { id: 12, name: "Breindy", birthday: "" },
        { id: 13, name: "Bassy", birthday: "" },
        { id: 14, name: "Ari", birthday: "" },
        { id: 15, name: "Kiki", birthday: "" },
        { id: 16, name: "Mordy", birthday: "" },
        { id: 17, name: "Faiga", birthday: "" },
        { id: 18, name: "Esty", birthday: "" }

      ]
   
};

const treeDiv = document.getElementById("tree");

// Improved: render a person (or couple) correctly
function renderPerson(node) {
  const personDiv = document.createElement("div");
  personDiv.className = "person-node";

  // Determine if this is a single person or a married couple
  const isCouple = !!node.couple;
  const husband = isCouple ? node.couple.husband : node;
  const wife = isCouple ? node.couple.wife : null;

  // Create couple container if married
  const container = document.createElement("div");
  container.className = isCouple ? "couple" : "single";

  const husbandDiv = document.createElement("div");
  husbandDiv.className = "person";
  husbandDiv.innerHTML = `<strong>${husband.name}</strong><br><small>${husband.birthday || 'No birthday'}</small>`;
  
  container.appendChild(husbandDiv);

  if (wife) {
    const wifeDiv = document.createElement("div");
    wifeDiv.className = "person";
    wifeDiv.innerHTML = `<strong>${wife.name}</strong><br><small>${wife.birthday || 'No birthday'}</small>`;
    container.appendChild(wifeDiv);
  }

  // Buttons container
  const btns = document.createElement("div");
  btns.className = "buttons";

  // Edit Husband Name
  const editHBtn = document.createElement("button");
  editHBtn.textContent = "Edit Husband";
  editHBtn.onclick = (e) => {
    e.stopPropagation();
    const newName = prompt("Husband's name:", husband.name);
    if (newName?.trim()) {
      husband.name = newName.trim();
      husbandDiv.querySelector("strong").textContent = newName.trim();
    }
  };
  btns.appendChild(editHBtn);

  // Edit Wife Name (if exists)
  if (wife) {
    const editWBtn = document.createElement("button");
    editWBtn.textContent = "Edit Wife";
    editWBtn.onclick = (e) => {
      e.stopPropagation();
      const newName = prompt("Wife's name:", wife.name);
      if (newName?.trim()) {
        wife.name = newName.trim();
        wifeDiv.querySelector("strong").textContent = newName.trim();
      }
    };
    btns.appendChild(editWBtn);
  }

  // Edit Husband Birthday
  const editHBday = document.createElement("button");
  editHBday.textContent = "H Bday";
  editHBday.onclick = (e) => {
    e.stopPropagation();
    const newBday = prompt("Husband birthday (YYYY-MM-DD):", husband.birthday);
    if (newBday) {
      husband.birthday = newBday;
      husbandDiv.querySelector("small").textContent = newBday || 'No birthday';
    }
  };
  btns.appendChild(editHBday);

  // Edit Wife Birthday (if exists)
  if (wife) {
    const editWBday = document.createElement("button");
    editWBday.textContent = "W Bday";
    editWBday.onclick = (e) => {
      e.stopPropagation();
      const newBday = prompt("Wife birthday (YYYY-MM-DD):", wife.birthday);
      if (newBday) {
        wife.birthday = newBday;
        wifeDiv.querySelector("small").textContent = newBday || 'No birthday';
      }
    };
    btns.appendChild(editWBday);
  }

  // Show/Hide Children
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "Show Children";
  toggleBtn.onclick = (e) => {
    e.stopPropagation();
    const wasHidden = childrenDiv.style.display === "none" || !childrenDiv.style.display;
    childrenDiv.style.display = wasHidden ? "block" : "none";
    toggleBtn.textContent = wasHidden ? "Hide Children" : "Show Children";
  };
  btns.appendChild(toggleBtn);

  // Children container
  const childrenDiv = document.createElement("div");
  childrenDiv.className = "children";
  childrenDiv.style.display = "none"; // collapsed by default

  if (node.children && node.children.length > 0) {
    node.children.forEach(child => {
      childrenDiv.appendChild(renderPerson(child));
    });
  }

  personDiv.appendChild(container);
  personDiv.appendChild(btns);
  personDiv.appendChild(childrenDiv);

  return personDiv;
}

// Render root couple (Totty + Mommy)
const rootCoupleNode = {
  couple: family.couple,
  children: family.children
};

treeDiv.appendChild(renderPerson(rootCoupleNode));