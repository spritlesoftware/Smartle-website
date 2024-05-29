import React, { useState } from "react";
import Link from "next/link";
import { InlineWidget } from "react-calendly";

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'ROI', href: '/roi', current: true },
    { name: 'About Us', href: '/aboutus', current: false },
    { name: 'Pricing', href: '/pricing', current: false },
    { name: 'Blog', href: 'https://www.smartle.ai/blog/', current: false },
    { name: 'Contact Us', href: '/contactus', current: false },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const Data = () => {
    const [showsCalendly, setShowsCalendly] = useState(false);
    const [overlayVisible, setOverlayVisible] = useState(false);

    const handleButtonClicks = () => {
        setShowsCalendly(true);
        setOverlayVisible(true);
    };

    const handleCalendlyClose = () => {
        setShowsCalendly(false);
        setOverlayVisible(false);
    };

    return (
        <div className="rounded-md max-w-sm w-full mx-auto">
            <div className="flex-1 space-y-4 py-1">
                <div className="sm:block">
                    <div className="space-y-1 px-5 pt-2 pb-3">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                    item.current ? 'bg-gray-900 text-purple' : 'text-black hover:bg-gray-700 hover:text-purple',
                                    'block py-2 rounded-md text-base font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
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
                            {showsCalendly && (
                                <div className="fixed inset-0 flex items-center justify-center z-50">
                                    <div className="relative rounded-lg p-8 w-11/12 max-w-4xl my-8 bg-transparent">
                                        <button
                                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl text-white"
                                            onClick={handleCalendlyClose}
                                        >
                                            &#10005; {/* X button */}
                                        </button>
                                        <InlineWidget url="https://calendly.com/prabhu-m-spritle/smartle-ai-demo?month=2024-03" />
                                    </div>
                                </div>
                            )}
                            {overlayVisible && (
                                <div
                                    className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40 backdrop-blur-sm"
                                    onClick={handleCalendlyClose}
                                />
                            )}
                        </div>
                        
                        {/* <Contactusform /> */}
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Data;
