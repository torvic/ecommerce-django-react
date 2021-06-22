import CardProduct from "../components/CardProduct";
import { helpHttp } from "../helpers/helpHttp";
import { useState, useEffect } from 'react';

const Store = () => {
	const [db, setDb] = useState({});

	let url="";

	useEffect(() => {
		helpHttp().get(url).then(res => {
			if(!res.err) {
				setDb(res);
			} else {
				setDb(null);
			}
		})
	}, [url])


  return (
    <>
			<div className="row">
				<CardProduct />
				<CardProduct />
				<CardProduct />
				<CardProduct />
			</div>
			{/* {db.length > 0 ? db.map(el => <CardProduct/>): <p>No hay productos</p> } */}
			
    </>
  );
};

export default Store;
