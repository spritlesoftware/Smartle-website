import React, { useState } from "react";
import Link from "next/link";
import { InlineWidget } from "react-calendly";

interface NavigationItem {
    name: string;
    href: string;
}

const navigation: NavigationItem[] = [
    { name: 'ROI', href: '/roi' },
    { name: 'About Us', href: '/aboutus' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: 'https://www.smartle.ai/blog/' },
    { name: 'Contact Us', href: '/contactus' },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const Data = () => {
    const [showsCalendly, setShowsCalendly] = useState(false);
    const [overlayVisible, setOverlayVisible] = useState(false);
    const [activeLink, setActiveLink] = useState('/roi');
    const [menuVisible, setMenuVisible] = useState(true);

    const handleButtonClicks = () => {
        setMenuVisible(false);
        setTimeout(() => {
            setShowsCalendly(true);
            setOverlayVisible(true);
        }, 500); // Adjust the delay to match your transition duration
    };

    const handleCalendlyClose = () => {
        setShowsCalendly(false);
        setOverlayVisible(false);
        setTimeout(() => {
            setMenuVisible(true);
        }, 500); // Adjust the delay to match your transition duration
    };

    const handleLinkClick = (href: string) => {
        setActiveLink(href);
    };

    return (
        <div className="relative">
            <div className={`rounded-md max-w-sm w-full mx-auto ${menuVisible ? 'opacity-100 transition-opacity duration-500 ease-in' : 'opacity-0'}`}>
                <div className="flex-1 space-y-4 py-1">
                    <div className="sm:block">
                        <div className="space-y-1 px-5 pt-2 pb-3">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.href === activeLink ? 'text-navyblue' : 'text-black hover:text-purple',
                                        'block py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={item.href === activeLink ? 'page' : undefined}
                                    onClick={() => handleLinkClick(item.href)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="mt-4"></div>
                            <div className="flex items-center justify-center">
                                <button
                                    className="bg-navyblue w-full hover:text-white text-white border border-purple font-medium py-2 px-4 rounded-3xl"
                                    onClick={handleButtonClicks}
                                >
                                    Start for Free
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {overlayVisible && (
                <div
                    className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40 backdrop-blur-sm"
                    onClick={handleCalendlyClose}
                />
            )}

            {showsCalendly && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative rounded-lg p-8 w-full max-w-screen-lg my-8 bg-transparent transform transition-transform duration-500 ease-in">
                            <button
                                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
                                onClick={handleCalendlyClose}
                            >
                                &#10005; {/* X button */}
                            </button>
                            <InlineWidget url="https://calendly.com/prabhu-m-spritle/smartle-ai-demo?month=2024-03" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Data;
