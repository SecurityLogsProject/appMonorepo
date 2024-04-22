/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        domains: ['lh3.googleusercontent.com'],
    },
    webpack(config) {
        config.experiments = {
            ...config.experiments,
            topLevelAwait: true,
        }
        return config
    },
}

module.exports = {
    ...nextConfig,
    async headers() {
        return [
            {
                source: '/api/:path*',
                headers: [
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: '*', // Set your origin
                    },
                    {
                        key: 'Access-Control-Allow-Methods',
                        value: 'GET, POST, PUT, DELETE, OPTIONS',
                    },
                    {
                        key: 'Access-Control-Allow-Headers',
                        value: 'Content-Type, Authorization',
                    },
                ],
            },
        ]
    },
}
