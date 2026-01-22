        let scrollTimeout;
        window.addEventListener('scroll', function() {
            document.querySelector('.indikator-scroll').style.opacity = '0';
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(function() {
                if (window.scrollY < document.body.scrollHeight - window.innerHeight - 100) {
                    document.querySelector('.indikator-scroll').style.opacity = '1';
                }
            }, 1000);
        });

        document.querySelector('.indikator-scroll').addEventListener('click', function() {
            const currentScroll = window.scrollY;
            const viewportHeight = window.innerHeight;
            const nextSlide = Math.floor(currentScroll / viewportHeight) + 1;
            window.scrollTo({
                top: nextSlide * viewportHeight,
                behavior: 'smooth'  
            });
        });