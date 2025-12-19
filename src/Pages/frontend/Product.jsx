import React from 'react'

function Product() {
    let [data, setData] = useState([]);
    let { cid } = useParams()
    useEffect(() => {
        async function getData() {
            let pData = await fetch(`https://dummyjson.com/products/${cid}`);
            let productData = await pData.json();
            setData(productData.products);
        }
        getData();
    }, [cid]);
    return (
        <>

        </>
    )
}

export default Product