import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ProductDetail = () => {
	const { id } = useParams();

	const [product, setProduct] = useState([]);
	const [loaded, setLoaded] = useState(false);

	// async await trycatch
	// const handleFetch = async (id) => {
	// 	const response = await fetch(`https://fakestoreapi.com/products/${id}`);
	// 	const json = await response.json();
	// 	setProduct(json);
	// };

	// promises .then cath
	const handleFetch = (id) => {
		fetch(`https://fakestoreapi.com/products/${id}`)
			.then((response) => response.json())
			.then((json) => setProduct(json))
			.catch((error) => console.log(error))
			.finally(() => setLoaded(true));
	};

	useEffect(() => {
		handleFetch(id);
	}, [id]);

	return (
		<>
			{loaded ? (
				<Card>
					<Card.Img
						variant="top"
						src={product.image}
					/>
					<Card.Body>
						<Card.Title>{product.title}</Card.Title>
						<Card.Text>{product.description}</Card.Text>
						<Card.Text>{product.price}</Card.Text>
						<Card.Text>Rating: {product.rating?.rate}</Card.Text>
						<Card.Text>Category: {product.category}</Card.Text>
						<Button variant="primary">Add to cart</Button>
					</Card.Body>
				</Card>
			) : (
				<h1>Loading ...</h1>
			)}
		</>
	);
};

export default ProductDetail;
