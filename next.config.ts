import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/#services",
        permanent: false,
      },
      {
        source: "/expertise",
        destination: "/#expertise",
        permanent: false,
      },
      {
        source: "/success-stories",
        destination: "/#success-stories",
        permanent: false,
      },
      {
        source: "/contact",
        destination: "/#contact",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
