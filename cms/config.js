const config = {
	cms_manual_init: true,
	backend: {
		name: "github",
		repo: "thenahidul/nextjs-blog-with-netlifycms",
		branch: "main"
	},
	media_folder: "public/img",
	public_folder: "img",
	collections: [
		{
			name: "pages",
			label: "Pages",
			files: [
				{
					label: "Home",
					name: "home",
					file: "content/pages/home.md",
					fields: [
						{
							label: "Title",
							name: "title",
							widget: "string"
						},
						{
							label: "Description",
							name: "description",
							widget: "markdown"
						}
					]
				}
			]
		}
	]
};

export default config;
