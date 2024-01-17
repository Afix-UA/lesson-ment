function digitsCounter() {
    // Обнулення
    if (document.querySelectorAll("[data-digits-counter]").length) {
        document.querySelectorAll("[data-digits-counter]").forEach(element => {
            element.dataset.digitsCounter = element.innerHTML;
            element.innerHTML = `0`;
        });
    }

    // Функція ініціалізації
    function digitsCountersInit(digitsCountersItems) {
        let digitsCounters = digitsCountersItems ? digitsCountersItems : document.querySelectorAll("[data-digits-counter]");
        if (digitsCounters.length) {
            digitsCounters.forEach(digitsCounter => {
                digitsCountersAnimate(digitsCounter);
            });
        }
    }

    // Функція анімації
    function digitsCountersAnimate(digitsCounter) {
        let startTimestamp = null;
        const duration = parseInt(digitsCounter.dataset.digitsCounterSpeed) ? parseInt(digitsCounter.dataset.digitsCounterSpeed) : 1000;
        const startValue = parseInt(digitsCounter.dataset.digitsCounter);
        const startPosition = 0;

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            digitsCounter.innerHTML = Math.floor(progress * (startPosition + startValue));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }

    // Виклик ініціалізації без події
    digitsCountersInit();
}

// Виклик основної функції
digitsCounter();