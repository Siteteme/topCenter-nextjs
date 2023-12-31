import HomePage from "@/components/templates/HomePage";

function Home({data}) {

    return (
        <div>
            <HomePage data={data}/>
        </div>
    );
}


export default Home;


export async function getStaticProps() {

    const res = await fetch("http://localhost:4000/data");
    const json = await res.json();
    const data = json.slice(0, 8)


    return {
        props: {data},
        revalidate: 10 //second
    }

}