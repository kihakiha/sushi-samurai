import React from 'react';
const SubService = () => {
	return (
		<div className='subService'>
			<div className='container'>
				<h1>Roll as a gift for sub</h1>
				<p>Get sales and promos</p>
				<form>
					<input type='text' placeholder='Name' />
					<input type='email' placeholder='Email' />
				</form>
				<a href='/'>
					<button>Get</button>
				</a>
			</div>
		</div>
	);
};

export default SubService;
