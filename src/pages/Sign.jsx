import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { LogIn } from '../components/LogIn';
import { ArrowRight } from '../components/Icons/ArrowRight';
import { SignUp } from '../components/SignUp';
import { Header } from '../components/Header';
import '../assets/styles/components/Sign.sass';

export const Sign = () => {
	const [ Sign, setSign ] = useState(true);

	const handleChangeSign = () => setSign(!Sign);

	return (
		<Layout>
			<Header title={!Sign ? 'Sign Up' : 'Log In'} description="Log in to Ruki" />
			<div className="formSign">
				<p className="changeSign" onClick={handleChangeSign}>
					{Sign ? 'Sign Up' : 'Log In'}
					<ArrowRight Title={Sign ? 'Sign Up' : 'Sign In'} />
				</p>
				{Sign ? <LogIn /> : <SignUp />}
			</div>
		</Layout>
	);
};
