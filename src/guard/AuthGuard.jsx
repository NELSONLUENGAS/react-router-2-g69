import { Navigate, Outlet } from 'react-router-dom';

const AuthGuard = ({ isAllow, redirectTo = '/login', children }) => {
	if (!isAllow) {
		return (
			<Navigate
				to={redirectTo}
				replace
			/>
		);
	}
	return children ? children : <Outlet />;
};

export default AuthGuard;
