import {useRouter} from "next/router";

function ProductDetail({data}) {

    const {id, title, price, description, category, image, rating} = data

    const router = useRouter();

    if (router.isFallback) {
        return <>
            <h2>Loading...</h2>
        </>
    }

    return <>
        {image ? <img src={image} alt={title} className="w-[150px] "/> : <h1>لطفا تصویر محصول را وارد کنید</h1>}
        <h1>{title}</h1>
        <p>{description}</p>

    </>

}


export default ProductDetail;


export async function getStaticPaths() {
    const res = await fetch(`http://localhost:4000/data`);
    const json = await res.json();
    const data = json.slice(0, 10);

    const paths = data.map((pro) => ({
        params: {id: pro.id.toString()},
    }))


    return {
        paths,
        fallback: true,
    }

}


export async function getStaticProps(context) {

    const {params: {id}} = context;

    const res = await fetch(`http://localhost:4000/data/${id}`);
    const data = await res.json();

    if (!data.id) {
        return {
            notFound: true,
        }
    }

    return {
        props: {data},
        revalidate: 10 //second
    }

}