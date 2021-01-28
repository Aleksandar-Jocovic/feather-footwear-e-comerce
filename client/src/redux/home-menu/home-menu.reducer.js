const INITIAL_STATE = {
	sections: [
		{
			id: 0,
			title: 'mens',
			description: 'mens running snickers',
			coverImage: '/fdr-img/mens-cover.jpg',
			url: 'mens'
		},
		{
			id: 1,
			title: 'womens',
			description: 'womens running snickers',
			coverImage: '/fdr-img/womens-cover.jpg',
			url: 'womens'
		},
		{
			id: 2,
			title: 'kids',
			description: 'kids running snickers',
			coverImage: '/fdr-img/kids-cover.jpg',
			url: 'kids'
		}
	]
};

const homeMenuReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default homeMenuReducer;
