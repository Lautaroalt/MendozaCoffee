
import { useEffect } from 'react';

const SmoothScroll = () => {
    useEffect(() => {
        const smoothScroll = () => {
            const links = document.querySelectorAll('a[href^="#"]');
            links.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = link.getAttribute('href').substring(1);
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        };
        smoothScroll();
    }, []);

    return null;
}

export default SmoothScroll;
