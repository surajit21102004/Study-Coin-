  
        function animateCounter() {
            const counter = document.getElementById('coinCount');
            let count = 0;
            const target = 120;
            const duration = 2000;
            const increment = target / (duration / 16);

            const timer = setInterval(() => {
                count += increment;
                if (count >= target) {
                    counter.textContent = target;
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.floor(count);
                }
            }, 16);
        }

        // ==================== BUTTON HANDLERS ====================
        function handleContinue() {
            alert('🚀 Redirecting to your course...\n\nKeep up the great work!');
        }

        function handleRedeem() {
            alert('🎁 Opening Rewards Store...\n\nYou have 120 StudyCoins to spend!');
        }

        // ==================== 3D CARD EFFECT ====================
        document.addEventListener('mousemove', (e) => {
            const cards = document.querySelectorAll('.card');
            
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / 20;
                    const rotateY = (centerX - x) / 20;

                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
                }
            });
        });

        document.addEventListener('mouseleave', () => {
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => {
                card.style.transform = '';
            });
        });

        // ==================== INITIALIZE ====================
        window.addEventListener('load', () => {
            animateCounter();
        });
   