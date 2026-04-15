"use client";

import { useLayoutEffect } from "react";

export default function ScrollToTopOnMount() {
    useLayoutEffect(() => {
        if (typeof window === "undefined") {
            return;
        }

        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }

        if (window.location.hash) {
            window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
        }

        window.scrollTo({ top: 0, left: 0, behavior: "auto" });

        return () => {
            if ("scrollRestoration" in window.history) {
                window.history.scrollRestoration = "auto";
            }
        };
    }, []);

    return null;
}