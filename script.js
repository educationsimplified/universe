document.getElementById('startJourneyBtn').addEventListener('click', function() {
    window.location.href = 'https://sites.google.com/view/mgkvpmasscom/home-page';
});

document.getElementById('floatingIcon').addEventListener('click', function() {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdzA2gaJ9mEVTTGaaJpSD3Xh1XzDyYuJGWx39lQJoq-LalSqg/viewform?usp=sf_link', '_blank');
});

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

// Make floating icon draggable
const floatingIcon = document.getElementById('floatingIcon');

floatingIcon.addEventListener('touchstart', function(e) {
    let shiftX = e.touches[0].clientX - floatingIcon.getBoundingClientRect().left;
    let shiftY = e.touches[0].clientY - floatingIcon.getBoundingClientRect().top;

    function moveAt(pageX, pageY) {
        floatingIcon.style.left = pageX - shiftX + 'px';
        floatingIcon.style.top = pageY - shiftY + 'px';
    }

    function onTouchMove(e) {
        moveAt(e.touches[0].pageX, e.touches[0].pageY);
    }

    document.addEventListener('touchmove', onTouchMove);

    floatingIcon.addEventListener('touchend', function() {
        document.removeEventListener('touchmove', onTouchMove);
    });

    floatingIcon.addEventListener('dragstart', function() {
        return false;
    });
});

floatingIcon.addEventListener('mousedown', function(e) {
    floatingIcon.classList.add('draggable');
    let shiftX = e.clientX - floatingIcon.getBoundingClientRect().left;
    let shiftY = e.clientY - floatingIcon.getBoundingClientRect().top;

    function moveAt(pageX, pageY) {
        floatingIcon.style.left = pageX - shiftX + 'px';
        floatingIcon.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(e) {
        moveAt(e.pageX, e.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    floatingIcon.addEventListener('mouseup', function() {
        document.removeEventListener('mousemove', onMouseMove);
        floatingIcon.classList.remove('draggable');
    });

    floatingIcon.addEventListener('dragstart', function() {
        return false;
    });
});
