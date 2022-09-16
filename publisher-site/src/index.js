let adContainer = document.createElement('section');
document.body.appendChild(adContainer);
adContainer.appendChild(document.createTextNode('Ad Container'));
setTimeout(() => {
    renderAd(adContainer);
}, 1000);

async function renderAd(adContainer) {
    let {AdView} = await import('ad_library/AdView');
    adContainer.appendChild(AdView());
}
