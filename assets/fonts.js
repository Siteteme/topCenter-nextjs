import localFont from 'next/font/local'

const yekanBakh = localFont({
    src: [
        {
            path: './fonts/woff2/YekanBakhFaNum-Light.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: './fonts/woff2/YekanBakhFaNum-Regular.woff2',
            weight: '500',
            style: 'normal',
        }
    ]
})


export default yekanBakh;