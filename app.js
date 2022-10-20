const toggleFeatures = () => {
    const featuresArrowDown = document.querySelector(".features_arrow_down");
    featuresArrowDown.classList.toggle("hidden");
    const featuresArrowUp = document.querySelector(".features_arrow_up");
    featuresArrowUp.classList.toggle("hidden");

    const featuresMenu = document.querySelector(".header_features_menu");
    featuresMenu.classList.toggle("hidden");
};
const toggleCompany = () => {
    const companyArrowDown = document.querySelector(".company_arrow_down");
    companyArrowDown.classList.toggle("hidden");
    const companyArrowUp = document.querySelector(".company_arrow_up");
    companyArrowUp.classList.toggle("hidden");

    const companyMenu = document.querySelector(".header_company_menu");
    companyMenu.classList.toggle("hidden");
};

const featuresButton = document.querySelector(".features_button");
featuresButton.addEventListener("mouseenter", toggleFeatures);
featuresButton.addEventListener("mouseleave", toggleFeatures);

const companyButton = document.querySelector(".company_button");
companyButton.addEventListener("mouseenter", toggleCompany);
companyButton.addEventListener("mouseleave", toggleCompany);

const openMobileMenu = () => {
    const mobileMenu = document.querySelector(".mobile_menu");
    mobileMenu.classList.remove("hidden");

    const menuButton = document.querySelector(".header_mobile_menu");
    menuButton.classList.add("hidden");

    const headerLeft = document.querySelector(".header_left");
    headerLeft.style.display = "block";
    const headerRight = document.querySelector(".header_right");
    headerRight.style.display = "block";

    console.log("ddd");
};

const mobileMenuButton = document.querySelector(".header_mobile_menu");
mobileMenuButton.addEventListener("click", openMobileMenu);
console.log(mobileMenuButton);
