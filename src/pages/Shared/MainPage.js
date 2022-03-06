import React from 'react';
import { Outlet } from 'react-router-dom';
import Layout from './Layout';

function MainPage() {
	return (
		<Layout>
			<Outlet />
		</Layout>
	);
}

export default MainPage;
