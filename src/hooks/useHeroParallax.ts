import { useRef, useEffect, useCallback } from "react";

export function useHeroParallax() {
  const heroRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const nameLinesRef = useRef<HTMLDivElement[]>([]);
  const sparkleRef = useRef<HTMLDivElement>(null);

  const targetX = useRef(0);
  const targetY = useRef(0);
  const currentX = useRef(0);
  const currentY = useRef(0);
  const isHovering = useRef(false);
  const rafId = useRef<number | null>(null);
  const ready = useRef(false);

  useEffect(() => {
    const t = setTimeout(() => { ready.current = true; }, 1400);
    return () => clearTimeout(t);
  }, []);

  const animate = useCallback(() => {
    const ease = 0.08;
    currentX.current += (targetX.current - currentX.current) * ease;
    currentY.current += (targetY.current - currentY.current) * ease;
    const x = currentX.current;
    const y = currentY.current;

    // Portrait moves ±45px horizontal, ±25px vertical
    if (portraitRef.current && ready.current) {
      portraitRef.current.style.transform = `translate(calc(-50% + ${x * 45}px), calc(-50% + ${y * 25}px))`;
    }

    // Name lines move in opposite horizontal directions
    nameLinesRef.current.forEach((line, i) => {
      if (!ready.current) return;
      const dir = i === 0 ? 1 : -1;
      line.style.transform = `translateX(${x * 12 * dir}px)`;
    });

    // Sparkle follows both axes
    if (sparkleRef.current && ready.current) {
      sparkleRef.current.style.transform = `translate(${x * 18}px, ${y * 10}px)`;
    }

    if (
      isHovering.current ||
      Math.abs(targetX.current - currentX.current) > 0.01 ||
      Math.abs(targetY.current - currentY.current) > 0.01
    ) {
      rafId.current = requestAnimationFrame(animate);
    } else {
      rafId.current = null;
    }
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      targetX.current = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      targetY.current = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      isHovering.current = true;
      if (!rafId.current) rafId.current = requestAnimationFrame(animate);
    };

    const onMouseLeave = () => {
      targetX.current = 0;
      targetY.current = 0;
      isHovering.current = false;
      if (!rafId.current) rafId.current = requestAnimationFrame(animate);
    };

    hero.addEventListener("mousemove", onMouseMove);
    hero.addEventListener("mouseleave", onMouseLeave);

    return () => {
      hero.removeEventListener("mousemove", onMouseMove);
      hero.removeEventListener("mouseleave", onMouseLeave);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [animate]);

  const setLineRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) nameLinesRef.current[i] = el;
  };

  return { heroRef, portraitRef, setLineRef, sparkleRef };
}
