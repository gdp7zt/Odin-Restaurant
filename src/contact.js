export default function contact() {
    let contactContainer = document.createElement('div');
    contactContainer.classList.add('contactContainer');

    contactContainer.innerHTML = '<div><img src=\'../imgs/blue-phone-7152.svg\'>(573) 612-8744</div><div><img src=\'../imgs/pin-location-4345.svg\'>1051 E 18th St, Rolla, MO 65401</div></div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.795070625831!2d-91.75858628450518!3d37.958570709336264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87da55408a55a481%3A0xc95e313357da2293!2sCrepescape!5e0!3m2!1sen!2sus!4v1662261666723!5m2!1sen!2sus" width="600" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

    return contactContainer;
}