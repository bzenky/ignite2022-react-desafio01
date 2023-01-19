import { useEffect, useState } from "react"

function getIsMobile() {
    return window.innerWidth <= 768
}

export function useIsMobile() {
    const [isMobile, setIsMobile] = useState(getIsMobile)

    useEffect(() => {
        function onResize() {
            setIsMobile(getIsMobile)
        }

        window.addEventListener("resize", onResize)

        return () => {
            window.removeEventListener("resize", onResize)
        }
    }, [])

    return isMobile
}