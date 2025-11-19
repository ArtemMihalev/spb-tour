document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});
    const learnMoreButtons = document.querySelectorAll('.learn-more');
    const modal = document.getElementById('tourModal');
    const closeModal = document.querySelector('.close-modal');
    const modalTitle = document.getElementById('modalTourTitle');
    const modalDescription = document.getElementById('modalTourDescription');
    const modalPrice = document.getElementById('modalTourPrice');
    const modalDuration = document.getElementById('modalTourDuration');

    const tourData = {
        1: {
            title: 'Васильевский остров: между небом и водой',
            description: 'Уникальная прогулка по старейшему району Петербурга. Мы пройдем по линиям Васильевского острова, заглянем в знаменитые дворы-колодцы, увидим первые каменные дома города и почувствуем атмосферу морского порта. Вы узнаете, почему остров так и не стал центром города, и какие тайны хранят его стены.',
            price: '4000 ₽',
            duration: '2.5 часа'
        },
        2: {
            title: 'Петроградская сторона: имперский размах',
            description: 'Маршрут по месту, где зарождался Петербург. Мы увидим домик Петра I, прогуляемся по Каменному острову с его старинными дачами, исследуем особняки Родзянко и Кшесинской, и узнаем о жизни императорской семьи в этом районе. Экскурсия полна историй о власти, любви и заговорах.',
            price: '4500 ₽',
            duration: '3 часа'
        },
        3: {
            title: 'Коломна: призраки старого города',
            description: 'Самая мистическая прогулка по Петербургу. Коломна — район, вдохновлявший Пушкина, Гоголя и Достоевского. Мы пройдем по узким улочкам, сохранившим атмосферу XIX века, увидим Никольский морской собор, Театральную площадь и места, где разворачивались события знаменитых литературных произведений.',
            price: '3500 ₽',
            duration: '2 часа'
        }
    };

    
    learnMoreButtons.forEach(button => {
    button.addEventListener('click', function() {
        const tourId = this.getAttribute('data-tour');
        const tour = tourData[tourId];
        
        modalTitle.textContent = tour.title;
        modalDescription.textContent = tour.description;
        modalPrice.textContent = tour.price;
        modalDuration.textContent = tour.duration;
        
        
        const modalImage = document.querySelector('.modal-tour-image');
        modalImage.style.backgroundImage = `url('tour-${tourId}.jpg')`;
        
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
});
    
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

   
    document.querySelector('.contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if (!name || !email) {
            alert('Пожалуйста, заполните обязательные поля: Имя и Email');
            return;
        }

        if (!validateEmail(email)) {
            alert('Пожалуйста, введите корректный email адрес');
            return;
        }

        alert('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.');
        this.reset();
    });

   
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(248, 245, 240, 0.98)';
            header.style.padding = '15px 0';
        } else {
            header.style.background = 'rgba(248, 245, 240, 0.95)';
            header.style.padding = '20px 0';
        }
    });
});