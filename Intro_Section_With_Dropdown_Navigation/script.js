// DOM starts
const menuIcon = document.getElementById('menuIcon');
const sidebar = document.querySelector('.sidebar');
const sidebarClose = document.getElementById('sidebarClose');

// desktop
const company = document.getElementById('company');
const features = document.getElementById('features');
const dropdownCompany = document.querySelector('.dropdownCompany');
const dropdownFeatures = document.querySelector('.dropdownFeatures');
const companyArrow = document.getElementById('companyArrow');
const featuresArrow = document.getElementById('featuresArrow');

// mobile
const featuresMobile = document.getElementById('featuresMobile');
const companyMobile = document.getElementById('companyMobile');
const dropdownCompanyMobile = document.querySelector('.dropdownCompanyMobile');
const dropdownFeaturesMobile = document.querySelector('.dropdownFeaturesMobile');
const companyArrowMobile = document.getElementById('companyArrowMobile');
const featuresArrowMobile = document.getElementById('featuresArrowMobile');
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



// desktop

features.addEventListener('click', openFeaturesDropDown);
company.addEventListener('click', openCompanyDropDown);


function openFeaturesDropDown() {
    if (dropdownFeatures.classList.contains('hide')) {
        dropdownFeatures.classList.remove('hide');
        featuresArrow.classList.add('upsideDown');
        dropdownCompany.classList.add('hide');
        companyArrow.classList.remove('upsideDown');
    } else {
        dropdownFeatures.classList.add('hide');
        featuresArrow.classList.remove('upsideDown');
        dropdownCompany.classList.add('hide');
        companyArrow.classList.remove('upsideDown');
    }
}

function openCompanyDropDown() {
    if (dropdownCompany.classList.contains('hide')) {
        dropdownCompany.classList.remove('hide');
        companyArrow.classList.add('upsideDown');
        dropdownFeatures.classList.add('hide');
        featuresArrow.classList.remove('upsideDown');
    } else {
        dropdownCompany.classList.add('hide');
        companyArrow.classList.remove('upsideDown');
        dropdownFeatures.classList.add('hide');
        featuresArrow.classList.remove('upsideDown');
    }
}

// mobile

featuresMobile.addEventListener('click', openFeaturesDropDownMobile);
companyMobile.addEventListener('click', openCompanyDropDownMobile);

function openFeaturesDropDownMobile() {
    if (dropdownFeaturesMobile.classList.contains('hide')) {
        dropdownFeaturesMobile.classList.remove('hide');
        featuresArrowMobile.classList.add('upsideDown');
        dropdownCompanyMobile.classList.add('hide');
        companyArrowMobile.classList.remove('upsideDown');
    } else {
        dropdownFeaturesMobile.classList.add('hide');
        featuresArrowMobile.classList.remove('upsideDown');
        dropdownCompanyMobile.classList.add('hide');
        companyArrowMobile.classList.remove('upsideDown');
    }
}

function openCompanyDropDownMobile() {
    if (dropdownCompanyMobile.classList.contains('hide')) {
        dropdownCompanyMobile.classList.remove('hide');
        companyArrowMobile.classList.add('upsideDown');
        dropdownFeaturesMobile.classList.add('hide');
        featuresArrowMobile.classList.remove('upsideDown');
    } else {
        dropdownCompanyMobile.classList.add('hide');
        companyArrowMobile.classList.remove('upsideDown');
        dropdownFeaturesMobile.classList.add('hide');
        featuresArrowMobile.classList.remove('upsideDown');
    }
}
