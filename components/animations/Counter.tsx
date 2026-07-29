import { useInView, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const mv = useMotionValue(0);
    const spring = useSpring(mv, { duration: 1600, bounce: 0 });
    useEffect(() => { if (inView) mv.set(to); }, [inView, mv, to]);
    useEffect(() => spring.on("change", (v) => { if (ref.current) ref.current.textContent = Math.floor(v) + suffix; }), [spring, suffix]);
    return <span ref={ref}>0{suffix}</span>;
}