    document.addEventListener('DOMContentLoaded', () => {
        const reviews = document.querySelectorAll('.review-item'); // Получаем все элементы отзывов
        const prevButton = document.querySelector('.prev-button');
        const nextButton = document.querySelector('.next-button');

        let currentSlide = 0;

        const updateSlides = () => {
            // Скрываем все отзывы
            reviews.forEach(review => {
                review.style.display = 'none';
            });

            // Показать текущий отзыв
            reviews[currentSlide].style.display = 'flex';
        };

        prevButton.addEventListener('click', () => {
            currentSlide = (currentSlide > 0) ? currentSlide - 1 : reviews.length - 1; // Переход к предыдущему отзыву
            updateSlides();
        });

        nextButton.addEventListener('click', () => {
            currentSlide = (currentSlide < reviews.length - 1) ? currentSlide + 1 : 0; // Переход к следующему отзыву
            updateSlides();
        });

        // Инициализация слайдера
        updateSlides();
    });
