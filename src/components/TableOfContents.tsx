import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import { motion } from "framer-motion";

import { IoPlay } from "react-icons/io5";

import "./TableOfContents.css";

export default function TableOfContents() {
    const [activeId, setActiveId] = useState<string | null>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const navRef = useRef<HTMLElement | null>(null);
    const indicatorRef = useRef<HTMLDivElement | null>(null);
    const [indicatorTop, setIndicatorTop] = useState(0);
    const location = useLocation();
    const [sections, setSections] = useState<Array<{ id: string; title: string }>>([]);

    useEffect(() => {
        if (!sections.length) return;

        const visibleSections = new Map<string, IntersectionObserverEntry>();

        const handleIntersect: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                visibleSections.set(entry.target.id, entry);
            });

            const allVisible = Array.from(visibleSections.values()).filter((e) => e.isIntersecting);
            if (!allVisible.length) return;

            const best = allVisible.reduce((a, b) => (a.intersectionRatio > b.intersectionRatio ? a : b));

            setActiveId(best.target.id || null);
        };

        observerRef.current = new IntersectionObserver(handleIntersect, {
            root: null,
            rootMargin: "-20% 0px -60% 0px",
            threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        });

        sections.forEach((s) => {
            const el = document.getElementById(s.id);
            if (el) observerRef.current?.observe(el);
        });

        return () => observerRef.current?.disconnect();
    }, [sections]);

    useEffect(() => {
        const secs = Array.from(document.querySelectorAll<HTMLElement>("section[data-toc-title]") || []).map((s) => ({
            id: s.id,
            title: s.dataset.tocTitle || s.id,
        }));
        setSections(secs);
        if (!secs.length) setActiveId(null);
    }, [location]);

    useEffect(() => {
        const update = () => {
            const n = sections.length;
            if (n === 0) return setIndicatorTop(0);

            const parent = navRef.current ?? containerRef.current;
            let parentHeight = parent ? parent.getBoundingClientRect().height : 0;

            const indicatorEl = indicatorRef.current;
            const indicatorHeight = indicatorEl ? indicatorEl.getBoundingClientRect().height : 0;

            parentHeight = Math.max(0, parentHeight - indicatorHeight);

            const index = Math.max(0, sections.findIndex((s) => s.id === activeId));

            let top = 0;
            if (n > 1) {
                top = (parentHeight / (n - 1)) * index;
            }

            setIndicatorTop(top);
        };

        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, [sections.length, activeId]);

    const handleClick = (e: React.MouseEvent, id?: string) => {
        e.preventDefault();
        const el = id ? document.getElementById(id) : null;
        if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    };

    if (!sections.length) return null;

    return (
        <div className="toc-container" ref={containerRef}>
            <motion.div
                className="toc-indicator"
                style={{ top: indicatorTop }}
                animate={{ top: indicatorTop }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                ref={indicatorRef}
            >
                <IoPlay />
            </motion.div>
            <nav className="toc" aria-label="Table of contents" ref={navRef}>
                <ul>
                    {sections.map((s) => {
                        const isActive = s.id === activeId
                        return (
                            <motion.li
                                key={s.id}
                                initial={{ x: 0 }}
                                animate={{ x: isActive ? 3 : 0 }}
                                whileHover={{ x: 3 }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                            >
                                <a
                                    href={`#${s.id}`}
                                    className={s.id === activeId ? "active" : ""}
                                    onClick={(e) => handleClick(e, s.id)}
                                >
                                    <h4>{s.title}</h4>
                                </a>
                            </motion.li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
}
