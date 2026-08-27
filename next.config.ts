import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.113"],

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            // Host header is always ASCII/punycode, never the literal "ł"
            value: "www.xn--hydrokop-usugi-qnc.pl",
          },
        ],
        destination: "https://hydrokop-usługi.pl/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
