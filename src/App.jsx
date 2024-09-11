import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { BasicLayout } from './layouts/BasicLayout';
import HomePage from './pages/HomePage';
import AdminLayout from './layouts/AdminLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import ProductDetail from './pages/ProductDetail';
import AuthGuard from './guard/AuthGuard';
import { useState } from 'react';

function App() {
	const [user, setUser] = useState({ id: 2, name: 'Pepito', roles: ['admin'] });

	return (
		<>
			<Router>
				<Routes>
					<Route
						path="/"
						element={<BasicLayout />}
					>
						<Route
							index
							element={<HomePage />}
						/>
						<Route
							path="login"
							element={<Login />}
						/>
						<Route
							path="register"
							element={<Register />}
						/>
						<Route
							path="cart"
							element={<Cart />}
						/>
						<Route
							path="profile"
							element={<Profile />}
						/>
						<Route
							path="/product-detail/:id"
							element={<ProductDetail />}
						/>
					</Route>

					<Route
						path="/admin"
						element={
							<AuthGuard
								isAllow={user.roles.includes('admin')}
								redirectTo="/"
							>
								<AdminLayout />
							</AuthGuard>
						}
					>
						<Route
							index
							element={<HomePage />}
						/>
					</Route>

					<Route
						path="*"
						element={<NotFound />}
					/>
				</Routes>
			</Router>
		</>
	);
}

export default App;
