import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ id, image, title, description }) => {
	const navigate = useNavigate();

	const handleNavigate = (id) => {
		navigate(`/product-detail/${id}`);
	};

	return (
		<Card>
			<Card.Img
				variant="top"
				src={image}
			/>
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>{description}</Card.Text>
				<Button
					onClick={() => handleNavigate(id)}
					variant="primary"
				>
					Go Details
				</Button>
			</Card.Body>
		</Card>
	);
};

export default BlogCard;
