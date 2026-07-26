export const Stats = () => {
    const stats = [
        { n: 6, s: "+", l: "Lat doświadczenia" },
        { n: 300, s: "+", l: "Zrealizowanych prac" },
        { n: 100, s: "%", l: "Zaangażowania" },
        { n: 24, s: "h", l: "Średni czas odpowiedzi" },
    ];
    return (
        <section className="py-24 md:py-32 bg-ink text-white border-y border-white/5">
            <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
                {stats.map((s, i) => (
                    //   <Reveal
                    <div
                        key={s.l}
                        //   delay={i * 0.06} 
                        className="text-center md:text-left">
                        <div className="text-5xl md:text-7xl font-display font-semibold tracking-tight text-yellow">
                            {/* <Counter to={s.n} suffix={s.s} /> */}
                        </div>
                        <p className="mt-3 text-sm text-white/60 uppercase tracking-wider">{s.l}</p>
                        {/* </Reveal> */}
                    </div>
                ))}
            </div>
        </section>
    );
}
