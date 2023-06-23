import { useCallback } from "react";
import { useLocation } from "react-router-dom";

export function useGiveClassName() {
    const location = useLocation();
    const giveName = useCallback(({isActive, isPending, filter}) => {
        const searchParams = new URLSearchParams(location.search);

        const name = isPending
            ? "footer_menu-item menu-item--pending"
            : isActive && searchParams.toString() === filter
                ? "footer_menu-item menu-item--active"
                : "footer_menu-item";
        return name;
    });
    return giveName
}