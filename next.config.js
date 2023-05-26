/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    optimizeFonts: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.pinimg.com',
            },
            {
                protocol: 'https',
                hostname: 'picsum.photos',
            },
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com'
            }, {
                protocol: 'https',
                hostname: 'istad.co'
            }, {
                protocol: 'https',
                hostname: "api.escuelajs.co"
            }
            , {
                protocol: 'https',
                hostname: "img1.ak.crunchyroll.com"
            }, {
                protocol: 'https',
                hostname: "imageio.forbes.com"
            }, {
                protocol: 'https',
                hostname: "m.media-amazon.com"
            }, {
                protocol: 'https',
                hostname: "cdna.artstation.com"
            }, {
                protocol: 'https',
                hostname: "placeimg.com"
            }
            , {
                protocol: 'https',
                hostname: "i.redd.it"
            }
            , {
                protocol: 'https',
                hostname: "cdn-icons-png.flaticon.com"
            }, {
                protocol: 'https',
                hostname: "pushinka.top"
            }, {
                protocol: 'https',
                hostname: "robohash.org"
            }, {
                protocol: 'https',
                hostname: "api.lorem.space"
            }, {
                protocol: 'https',
                hostname: "encrypted-tbn0.gstatic.com"
            }, {
                protocol: 'https',
                hostname: "th.bing.com"
            }, {
                protocol: 'https',
                hostname: "us-tuna-sounds-images.voicemod.net"
            }, {
                protocol: 'https',
                hostname: "edit.com"
            }, {
                protocol: 'https',
                hostname: "images.unsplash.com"
            }, {
                protocol: 'https',
                hostname: "cloudfront-us-east-1.images.arcpublishing.com"
            }, {
                protocol: 'https',
                hostname: "static.fundacion-affinity.org"
            }, {
                protocol: 'https',
                hostname: "cloudfront-us-east-1.images.arcpublishing.com"
            },{
                protocol: 'https',
                hostname:"static.vecteezy.com"
            },{
                protocol: 'https',
                hostname:"img.freepik.com"
            }
        ],
    }
}

module.exports = nextConfig
