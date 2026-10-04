// Small inline icons (no icon dependency). All are decorative: callers provide the accessible text.
type P = { size?: number; className?: string };
const base = (size: number) => ({ width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true, focusable: false });

export const ArrowRight = ({ size = 16, className }: P) => <svg {...base(size)} className={className}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
export const ArrowUpRight = ({ size = 16, className }: P) => <svg {...base(size)} className={className}><path d="M7 17 17 7M8 7h9v9" /></svg>;
export const ArrowUp = ({ size = 18, className }: P) => <svg {...base(size)} className={className}><path d="M12 19V5M6 11l6-6 6 6" /></svg>;
export const Copy = ({ size = 15, className }: P) => <svg {...base(size)} className={className}><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15V6a2 2 0 0 1 2-2h8" /></svg>;
export const Check = ({ size = 15, className }: P) => <svg {...base(size)} className={className}><path d="m5 12 4.5 4.5L19 7" /></svg>;
export const Sun = ({ size = 18, className }: P) => <svg {...base(size)} className={className}><circle cx="12" cy="12" r="4" /><path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4" /></svg>;
export const Moon = ({ size = 18, className }: P) => <svg {...base(size)} className={className}><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" /></svg>;
export const Facebook = ({ size = 18, className }: P) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable={false} className={className}><path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21h3.1z" /></svg>;
