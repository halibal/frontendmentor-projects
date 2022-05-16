// DOM starts
const menuIcon = document.getElementById('menuIcon');
const sidebar = document.querySelector('.sidebar');
const sidebarClose = document.getElementById('sidebarClose');
const features = document.getElementById('features');
const dropdownFeatures = document.querySelector('.dropdownFeatures');
const company = document.getElementById('company');
const dropdownCompany = document.querySelector('.dropdownCompany');
const companyArrow = document.getElementById('companyArrow');
const featuresArrow = document.getElementById('featuresArrow');

// DOM ends



// sidebar open/close starts

sidebarClose.addEventListener('click', closeSideBar);

function closeSideBar() {
    sidebar.classList.add('hide');
    document.body.style.backgroundColor = "";
}

menuIcon.addEventListener('click', openSideBar);

function openSideBar() {
    sidebar.classList.remove('hide');
    document.body.style.backgroundColor = "rgba(0,0,0,0.6)";
}

// sidebar open/close ends



// 

features.addEventListener('click', openFeaturesDropDown);
company.addEventListener('click', openCompanyDropDown);


function openFeaturesDropDown() {
    if (dropdownFeatures.classList.contains('hide')) {
        dropdownFeatures.classList.remove('hide');
        featuresArrow.classList.add('upsideDown');
    } else {
        dropdownFeatures.classList.add('hide');
        featuresArrow.classList.remove('upsideDown');
    }
}

function openCompanyDropDown() {
    if (dropdownCompany.classList.contains('hide')) {
        dropdownCompany.classList.remove('hide');
        companyArrow.classList.add('upsideDown');
    } else {
        dropdownCompany.classList.add('hide');
        companyArrow.classList.remove('upsideDown');
    }
}