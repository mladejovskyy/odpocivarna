'use client'
import './Footer.css';
import Link from "next/link";
import {useRouter} from 'next/navigation'; // For Next.js 13 or newer

export default function Footer() {
    const router = useRouter();

    const scrollToTarget = async (sectionId) => {
        const currentPath = window.location.pathname;

        if (currentPath === '/') {
            // Directly scroll to the target section if already on homepage
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({behavior: 'smooth'});
            }
        } else {
            // Redirect to homepage and then scroll to the target section
            await router.push('/');

            // Ensure scrolling happens after redirection
            setTimeout(() => {
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({behavior: 'smooth'});
                }
            }, 100); // Short delay to ensure page redirection is processed
        }
    };

    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="item left">
                        <div className="logo">
                            <img
                                onClick={() => scrollToTarget('hero')}
                                src="/images/nav-logo.webp"
                                alt="Logo mladejovsky"
                                className='footer-logo'
                                draggable="false"
                                loading="lazy"
                                placeholder="blur"
                            />
                            SOŠ a SOU Kolín
                        </div>
                    </div>
                    <div className="item right">
                        <h3 className='sm-show'>Navigace</h3>
                        <ul>
                            <li onClick={() => scrollToTarget('portfolio')}>Portfolio</li>
                            <li onClick={() => scrollToTarget('whyus')}>Proč my?</li>
                            <li onClick={() => scrollToTarget('reference')}>Reference</li>
                            <li onClick={() => scrollToTarget('faq')}>Časté dotazy</li>
                            <li onClick={() => scrollToTarget('contact')}>Kontakt</li>
                        </ul>
                    </div>
                </div>
                <hr/>
                <div className="bottom row">
                    <p className="copyright">© 2024 mladejovsky, Všechna práva vyhrazena.</p>
                    <Link href='https://www.mladejovsky.cz' className="author">Web &
                        Design <span>mladejovsky</span></Link>
                </div>
            </div>
        </footer>
    );
}
