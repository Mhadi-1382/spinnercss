
/*!
 * spinnercss Template
 * Created on date: 2/1/2024
 * Built on date: 2/3/2024
*/

// ========== SERVICE WORKER/MANIFEST
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js');
    });
}


// ========== LOADER
window.addEventListener('load', function() {
    setTimeout(() => {
        document.querySelector('#loader').classList.toggle('loader-warpper-hide')
    }, 4000)
});
