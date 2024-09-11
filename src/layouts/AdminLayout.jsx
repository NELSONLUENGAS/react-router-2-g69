import BlogSidebar from '../components/BlogSidebar';
import AuthGuard from '../guard/AuthGuard';

const AdminLayout = () => {
	return (
		<>
			{/* <AuthGuard> */}
			<BlogSidebar />
			<main style={{ marginTop: '58px' }}>
				<div className="container pt-4"></div>
			</main>
			{/* </AuthGuard> */}
		</>
	);
};

export default AdminLayout;
