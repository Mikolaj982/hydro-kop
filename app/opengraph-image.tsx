import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

export const alt = "Hydro-Kop - roboty ziemne i usługi koparką, Starachowice";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
    const [heroBuffer, logoData] = await Promise.all([
        readFile(join(process.cwd(), "public/images/hero.webp")),
        readFile(join(process.cwd(), "public/images/logoHK.png"), "base64"),
    ]);
    // satori can't decode webp, so re-encode the hero photo as png first
    const heroPng = await sharp(heroBuffer).resize(size.width, size.height, { fit: "cover" }).png().toBuffer();
    const heroSrc = `data:image/png;base64,${heroPng.toString("base64")}`;
    const logoSrc = `data:image/png;base64,${logoData}`;

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    position: "relative",
                    background: "#17171a",
                }}
            >
                <img
                    src={heroSrc}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        opacity: 0.55,
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: "flex",
                        background:
                            "linear-gradient(0deg, rgba(23,23,26,0.95) 10%, rgba(23,23,26,0.55) 55%, rgba(23,23,26,0.75) 100%)",
                    }}
                />
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        padding: "56px 64px",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                        <img
                            src={logoSrc}
                            style={{ width: 56, height: 56, objectFit: "contain", borderRadius: 12 }}
                        />
                        <span style={{ fontSize: 32, fontWeight: 700, color: "#faf8f3", letterSpacing: -0.5 }}>
                            Hydro-Kop
                        </span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                        <span
                            style={{
                                display: "flex",
                                fontSize: 60,
                                fontWeight: 700,
                                color: "#faf8f3",
                                lineHeight: 1.1,
                                maxWidth: 900,
                            }}
                        >
                            Roboty ziemne i usługi koparką
                        </span>
                        <span style={{ display: "flex", fontSize: 34, fontWeight: 600, color: "#f4c430" }}>
                            Starachowice i województwo świętokrzyskie
                        </span>
                    </div>
                </div>
            </div>
        ),
        { ...size }
    );
}
