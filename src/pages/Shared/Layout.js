import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function Layout({ children }) {
	return (
		<>
			<Header />
			<Container>
				<main>{children}</main>
			</Container>
			<Footer>
				<p>All rights reserved AgileManagement</p>
			</Footer>
		</>
	);
}

export default Layout;
