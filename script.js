var elementInfo = {
    H: {
      name: "Hydrogen",
      symbol: "H",
      atomicNumber: 1,
      atomicMass: 1.008,
      group: "Non-metal",
      state: "Gas",
      meltingPoint: -259.14,
      boilingPoint: -252.87,
      summary: "Hydrogen is a chemical element with chemical symbol H and atomic number 1. With an atomic weight of 1.00794 u, hydrogen is the lightest element on the periodic table. Its monatomic form (H) is the most abundant chemical substance in the Universe, constituting roughly 75% of all baryonic mass.",
    },
    He: {
      name: "Helium",
      symbol: "He",
      atomicNumber: 2,
      atomicMass: 4.003,
      group: "Noble gas",
      state: "Gas",
      meltingPoint: -272.2,
      boilingPoint: -268.93,
      summary: "Helium is a chemical element with symbol He and atomic number 2. It is a colorless, odorless, tasteless, non-toxic, inert, monatomic gas that heads the noble gas group in the periodic table. Its boiling and melting points are the lowest among all the elements.",
    },
    Li: {
        name: "Lithium",
        symbol: "Li",
        atomicNumber: 3,
        atomicMass: 6.941,
        group: "Alkali metal",
        state: "Solid",
        meltingPoint: 180.54,
        boilingPoint: 1342,
        summary: "Lithium (from Greek:λίθος lithos, \"stone\") is a chemical element with the symbol Li and atomic number 3. It is a soft, silver-white metal belonging to the alkali metal group of chemical elements. Under standard conditions it is the lightest metal and the least dense solid element.",
    },
    Be: {
      name: "Beryllium",
      symbol: "Be",
      atomicNumber: 4,
      atomicMass: 9.012,
      group: "Alkaline earth metal",
      state: "Solid",
      meltingPoint: 1287,
      boilingPoint: 2471,
      "summary": "Beryllium is a chemical element with symbol Be and atomic number 4. It is created through stellar nucleosynthesis and is a relatively rare element in the universe. It is a divalent element which occurs naturally only in combination with other elements in minerals.",

    },
    B: {
      name: "Boron",
      symbol: "B", atomicNumber: 5, 
      atomicMass: 10.811, 
      group: "Non-metal", 
      state: "Solid", 
      meltingPoint: 2076, 
      boilingPoint: 3927,
      "summary": "Boron is a metalloid chemical element with symbol B and atomic number 5. Produced entirely by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a low-abundance element in both the Solar system and the Earth's crust. Boron is concentrated on Earth by the water-solubility of its more common naturally occurring compounds, the borate minerals.",
    }, 
    C: { 
        name: "Carbon", 
        symbol: "C", 
        atomicNumber: 6, 
        atomicMass: 12.011, 
        group: "Non-metal", 
        state: "Solid", 
        meltingPoint: 3550, 
        boilingPoint: 4027,
        "summary": "Carbon (from Latin:carbo \"coal\") is a chemical element with symbol C and atomic number 6. On the periodic table, it is the first (row 2) of six elements in column (group) 14, which have in common the composition of their outer electron shell. It is nonmetallic and tetravalent—making four electrons available to form covalent chemical bonds.",
    }, 
    N: { 
        name: "Nitrogen", 
        symbol: "N", 
        atomicNumber: 7, 
        atomicMass: 14.007, 
        group: "Non-metal", 
        state: "Gas", 
        meltingPoint: -210.1, 
        boilingPoint: -195.8 
    },
    O: { 
        name: "Oxygen", 
        symbol: "O", 
        atomicNumber: 8, 
        atomicMass: 15.999, 
        group: "Non-metal", 
        state: "Gas", 
        meltingPoint: -218.8, 
        boilingPoint: -182.9,
        summary: "Oxygen is a chemical element with symbol O and atomic number 8. It is a member of the chalcogen group on the periodic table and is a highly reactive nonmetal and oxidizing agent that readily forms compounds (notably oxides) with most elements. By mass, oxygen is the third-most abundant element in the universe, after hydrogen and helium."
    }, 
    F: { 
        name: "Fluorine", 
        symbol: "F",
        atomicNumber: 9, 
        atomicMass: 18.998, 
        group: "Halogen", 
        state: "Gas", meltingPoint: -219.6, 
        boilingPoint: -188.1,
        summary: "Fluorine is a chemical element with symbol F and atomic number 9. It is the lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard conditions. As the most electronegative element, it is extremely reactive:almost all other elements, including some noble gases, form compounds with fluorine.",

    },

    Ne: { 
        name: "Neon", 
        symbol: "Ne", 
        atomicNumber: 10, 
        atomicMass: 20.180, 
        group: "Noble gas", 
        state: "Gas", 
        meltingPoint: -248.6, 
        boilingPoint: -246,
        "summary": "Neon is a chemical element with symbol Ne and atomic number 10. It is in group 18 (noble gases) of the periodic table. Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about two-thirds the density of air.",

    }, 

    Na: {
      "name": "Sodium",
      "boilingPoint": 1156.09,
    }
    
  
}

// Define a function that takes an element symbol as a parameter
function showElementInfo(symbol) {
    // Get the element info box element by its id
    var elementInfoBox = document.getElementById("element-info");
    // Clear the previous content of the element info box
    elementInfoBox.innerHTML = "";
    // Get the info object for the given element symbol
    var info = elementInfo[symbol];
    // Create a paragraph element for each property of the info object
    var name = document.createElement("p");
    name.textContent = "Name: " + info.name;
    var symbol = document.createElement("p");
    symbol.textContent = "Symbol: " + info.symbol;
    var atomicNumber = document.createElement("p");
    atomicNumber.textContent = "Atomic number: " + info.atomicNumber;
    var atomicMass = document.createElement("p");
    atomicMass.textContent = "Atomic mass: " + info.atomicMass;
    var group = document.createElement("p");
    group.textContent = "Group: " + info.group;
    var state = document.createElement("p");
    state.textContent = "State: " + info.state;
    var meltingPoint = document.createElement("p");
    meltingPoint.textContent = "Melting point: " + info.meltingPoint + " °C";
    var boilingPoint = document.createElement("p");
    boilingPoint.textContent = "Boiling point: " + info.boilingPoint + " °C";
    var summary =document.createElement('p');
    summary.textContent = "Summary: " + info.summary;
    var named_by = document.createElement('p');
    named_by.textContent = 'Named By:' + "Antoine Lavoisier";
    // Append each paragraph element to the element info box
    elementInfoBox.appendChild(name);
    elementInfoBox.appendChild(symbol);
    elementInfoBox.appendChild(atomicNumber);
    elementInfoBox.appendChild(atomicMass);
    elementInfoBox.appendChild(group);
    elementInfoBox.appendChild(state);
    elementInfoBox.appendChild(meltingPoint);
    elementInfoBox.appendChild(boilingPoint);
    elementInfoBox.appendChild(summary);
    elementInfoBox.appendChild(named_by);
  }
  