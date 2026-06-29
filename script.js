const categoryNav = document.getElementById("category-nav");
const menuContainer = document.getElementById("menu-container");
const footer = document.getElementById("footer");

fetch("menu.json")
  .then(response => response.json())
  .then(menu => {

    // ===== CATEGORY BUTTONS =====
    Object.keys(menu).forEach(category => {

      const button = document.createElement("button");
      button.textContent = category;

      button.addEventListener("click", () => {
        document.getElementById(category).scrollIntoView({
          behavior: "smooth"
        });
      });

      categoryNav.appendChild(button);

      // ===== CATEGORY SECTION =====
      const section = document.createElement("section");
      section.id = category;

      const heading = document.createElement("h2");
      heading.textContent = category;

      section.appendChild(heading);

      // ===== MENU ITEMS =====
      menu[category].forEach(item => {

        const card = document.createElement("div");
        card.className = "menu-card";

        card.innerHTML = `
          <div class="card-image">
            <img src="${item.image}" alt="${item.name}">
          </div>

          <div class="card-content">
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>
          </div>
        `;

        section.appendChild(card);

      });

      menuContainer.appendChild(section);

    });

    // ===== CONTACT BUTTON =====
    const contactBtn = document.createElement("button");

    contactBtn.textContent = "Contact";

    contactBtn.addEventListener("click", () => {
      footer.scrollIntoView({
        behavior: "smooth"
      });
    });

    categoryNav.appendChild(contactBtn);
	// ===== FOOTER =====
footer.innerHTML = `
  <h2>Bulk Orders & Party Orders</h2>

  <a href="tel:+91XXXXXXXXXX" class="phone-link">
    <i class="fa-solid fa-phone"></i> +91 XXXXXXXXXX
  </a>

  <br><br>

  <p>Designed by 😎</p>

  <a href="https://www.instagram.com/mr_developer3102?igsh=YzljYTk1ODg3Zg==" target="_blank" rel="noopener noreferrer" class="instagram-link">
    <i class="fa-brands fa-instagram"></i> @mr_developer3102
  </a>
`;

  })

  .catch(error => {
    console.error("Menu Load Error:", error);
  });
