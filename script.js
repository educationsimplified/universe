document.getElementById('startJourneyBtn').addEventListener('click', function() {
    window.location.href = 'https://sites.google.com/view/mgkvpmasscom/home-page';
});

document.getElementById('fillFormIcon').addEventListener('click', function() {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdzA2gaJ9mEVTTGaaJpSD3Xh1XzDyYuJGWx39lQJoq-LalSqg/viewform?usp=sf_link', '_blank');
});

window.onload = function() {
    const donationPopup = document.getElementById('donationPopup');
    const closePopup = document.getElementById('closePopup');
    const donationLink = document.getElementById('donationLink');

    // Show the popup
    donationPopup.style.display = 'flex';

    // Close the popup when clicking the "X"
    closePopup.addEventListener('click', function() {
        donationPopup.style.display = 'none';
    });

    // Redirect to donation link when image is clicked
    donationLink.addEventListener('click', function() {
        window.open('https://razorpay.me/@ahmedsireducation', '_blank');
    });
};

// Visitor counter animation
let count = 0;
const countTo = 8000; // Example visitor count
const counterElement = document.getElementById('visitorCount');

function updateCounter() {
    if (count < countTo) {
        count++;
        counterElement.textContent = count.toLocaleString();
        requestAnimationFrame(updateCounter);
    }
}

requestAnimationFrame(updateCounter);

// Make floating icons draggable
function makeDraggable(icon) {
    icon.addEventListener('touchstart', function(e) {
        let shiftX = e.touches[0].clientX - icon.getBoundingClientRect().left;
        let shiftY = e.touches[0].clientY - icon.getBoundingClientRect().top;

        function moveAt(clientX, clientY) {
            icon.style.left = clientX - shiftX + 'px';
            icon.style.top = clientY - shiftY + 'px';
        }

        function onTouchMove(e) {
            moveAt(e.touches[0].clientX, e.touches[0].clientY);
        }

        document.addEventListener('touchmove', onTouchMove);

        icon.addEventListener('touchend', function() {
            document.removeEventListener('touchmove', onTouchMove);
        });
    });

    icon.ondragstart = function() {
        return false;
    };
}

makeDraggable(document.getElementById('fillFormIcon'));
makeDraggable(document.getElementById('communityIcon'));
makeDraggable(document.getElementById('visitorIcon'));
