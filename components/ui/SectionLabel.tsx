export const SectionLabel = ({ children }: { children: React.ReactNode }) => (
    <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
        <span className="h-px w-8 bg-yellow" />
        {children}
    </div>
);