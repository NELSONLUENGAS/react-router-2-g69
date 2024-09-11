import BlogFooter from '../components/BlogFooter';
import BlogHeader from '../components/BlogHeader';
import { Outlet } from 'react-router-dom';

export const BasicLayout = () => {
	return (
		<>
			<BlogHeader />
			<main>
				<Outlet />
			</main>
			<BlogFooter />
		</>
	);
};
