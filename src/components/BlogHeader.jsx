import { NavLink, useNavigate } from 'react-router-dom';

const BlogHeader = () => {
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate('/admin');
	};

	const handleClassActive = ({ isActive }) =>
		isActive ? 'nav-link px-2 text-secondary' : 'nav-link px-2 text-white';
	return (
		<>
			<header className="p-3 text-bg-dark">
				<div className="container">
					<div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
						<NavLink
							to="/"
							className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
						></NavLink>

						<ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
							<li>
								<NavLink
									to="/"
									className={handleClassActive}
								>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/cart"
									className={handleClassActive}
								>
									Cart
								</NavLink>
							</li>
							<li>
								<NavLink
									to="login"
									className={handleClassActive}
								>
									LogIn
								</NavLink>
							</li>
							<li>
								<NavLink
									to="register"
									className={handleClassActive}
								>
									Register
								</NavLink>
							</li>
							<li>
								<NavLink
									to="profile"
									className={handleClassActive}
								>
									Perfil
								</NavLink>
							</li>
						</ul>

						<form
							className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
							role="search"
						>
							<input
								type="search"
								className="form-control form-control-dark text-bg-dark"
								placeholder="Search..."
								aria-label="Search"
							/>
						</form>

						<div className="text-end">
							<button
								onClick={handleNavigate}
								type="button"
								className="btn btn-outline-light me-2"
							>
								Dashboard
							</button>
							<button
								type="button"
								className="btn btn-warning"
							>
								Sign-up
							</button>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default BlogHeader;
