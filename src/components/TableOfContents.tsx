import { useEffect, useRef, useState } from "react";
import "./TableOfContents.css";

export default function TableOfContents() {
    const [activeId, setActiveId] = useState<string | null>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        const sections = Array.from(document.querySelectorAll<HTMLElement>("section[data-toc-title]"));
        if (!sections.length) return;

        const visibleSections = new Map<string, IntersectionObserverEntry>();

        const handleIntersect: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                visibleSections.set(entry.target.id, entry);
            });

            const allVisible = Array.from(visibleSections.values()).filter(e => e.isIntersecting);
            if (!allVisible.length) return;

            const best = allVisible.reduce((a, b) =>
                a.intersectionRatio > b.intersectionRatio ? a : b
            );

            setActiveId(best.target.id || null);
        };

        observerRef.current = new IntersectionObserver(handleIntersect, {
            root: null,
            rootMargin: "-20% 0px -60% 0px",
            threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        });

        sections.forEach((s) => observerRef.current?.observe(s));

        return () => observerRef.current?.disconnect();
    }, []);

    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[data-toc-title]")).map((s) => ({
        id: s.id,
        title: s.dataset.tocTitle || s.id,
    }));

    const handleClick = (e: React.MouseEvent, id?: string) => {
        e.preventDefault();
        const el = id ? document.getElementById(id) : null;
        if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    };

    if (!sections.length) return null;

    return (
        <nav className="toc" aria-label="Table of contents">
            <ul>
                {sections.map((s) => (
                    <li key={s.id}>
                        <a
                            href={`#${s.id}`}
                            className={s.id === activeId ? "active" : ""}
                            onClick={(e) => handleClick(e, s.id)}
                        >
                            <h4>{s.title}</h4>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
