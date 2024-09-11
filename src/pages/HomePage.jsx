import { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';

const HomePage = () => {
	const [products, setProducts] = useState([]);
	const handleFetch = async () => {
		fetch('https://fakestoreapi.com/products')
			.then((res) => res.json())
			.then((json) => setProducts(json));
	};
	useEffect(() => {
		handleFetch();
	}, []);

	return (
		<div className="blog-grid">
			{products.length ? (
				products.map((product) => (
					<BlogCard
						key={product.id}
						{...product}
					/>
				))
			) : (
				<h1>Loading ...</h1>
			)}
		</div>
	);
};

export default HomePage;
