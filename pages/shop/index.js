import Products from "@/components/templates/Products";


function Shop({data}) {

    return (
        <div>
            <Products data={data}/>
        </div>
    );
}


export default Shop;


export async function getStaticProps() {

    const res = await fetch("http://localhost:4000/data");
    const data = await res.json();



    return {
        props: {data},
        revalidate: 10 //second
    }

}