'use client'
import './Navbar.css';
import {useState, useEffect} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleScroll = () => {
        if (window.scrollY > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTarget = async (sectionId) => {
        const currentPath = window.location.pathname;
        if (currentPath === '/') {
            // On homepage, directly scroll to the target section
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({behavior: 'smooth'});
            }
        } else {
            // Redirect to the homepage and then scroll
            await router.push('/');

            // Ensure scrolling happens after page navigation
            setTimeout(() => {
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({behavior: 'smooth'});
                }
            }, 100); // Short delay to ensure page redirection is processed
        }

        // Close the menu on mobile after clicking
        setMenuOpen(false);
    };

    return (
        <div className={`nav ${scrolled ? 'scrolled' : ''}`}>
            <nav className="container">
                <div className="logo">
                    <img
                        onClick={() => scrollToTarget('hero')}
                        className="nav-logo"
                        src="/images/nav-logo.webp"
                        alt="Logo mladejovsky"
                        draggable="false"
                        loading="eager"
                        placeholder="blur"
                    />
                    SOŠ a SOU Kolín
                </div>


                <div className={`burger-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <li onClick={() => scrollToTarget('portfolio')} data-aos="fade-down" data-aos-once="true"
                        data-aos-delay="0"><span>Portfolio</span>
                    </li>
                    <li onClick={() => scrollToTarget('whyus')} data-aos="fade-down" data-aos-once="true"
                        data-aos-delay="100"><span>Proč my?</span>
                    </li>
                    <li onClick={() => scrollToTarget('reference')} data-aos="fade-down" data-aos-once="true"
                        data-aos-delay="200"><span>Reference</span>
                    </li>
                    <li onClick={() => scrollToTarget('faq')} data-aos="fade-down" data-aos-once="true"
                        data-aos-delay="300"><span>Časté dotazy</span>
                    </li>
                    <li data-aos="fade-down" data-aos-once="true" data-aos-delay="500">
                        <button onClick={() => scrollToTarget('contact')} className={`btn btn-primary`}>Konzultace
                            zdarma
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
