const data: any = {
    newsContent: [
        {
            'title': 'News number 1',
            'text': 'whatever asdasdasdasd <p>asdasd</p>'
        },
        {
            'title': 'totally different',
            'text': '<a href="https://google.com" target="blank">asd</a>'
        }
    ],
    pieChart: {
        'title': 'Do you like the new React site?',
        'answers': [
            {
                'Yes': 50,
                'No': 10,
                'I don\'t find any difference': 30
            }
        ]
    },
    slides: [
        {
            'Main_Title': 'what we sell',
            'Text': 'Welcome to What We Sell, the DXC destination for what to sell and how to sell it!',
            'Picture_Link': 'https://hpe.sharepoint.com/teams/Ericsson_Services/BrandImages/241_2030.jpg',
            'Read_More_Link': 'https://whatwesell.dxc.com/dxc/',
            'Button_Text': 'Read more',
            'Visualisation': 'Slider'
        },
        {
            'Main_Title': 'what we sell',
            'Text': 'Welcome to What We Sell, the DXC destination for what to sell and how to sell it!',
            'Picture_Link': 'https://hpe.sharepoint.com/teams/Ericsson_Services/BrandImages/241_2030.jpg',
            'Read_More_Link': 'https://whatwesell.dxc.com/dxc/',
            'Button_Text': 'Read more',
            'Visualisation': 'NewsPage'
        },
        {
            'Main Title': 'what we sell',
            'Text': 'test!',
            'Picture (Link)': 'https://hpe.sharepoint.com/teams/Ericsson_Services/BrandImages/221_2010.jpg',
            'Read More(Link)': 'https://whatwesell.dxc.com/dxc/',
            'Button text': 'click me',
        },
        {
            'Main Title': 'what we sell',
            'Text': 'Welcome to What We Sell, the DXC destination for what to sell and how to sell it!',
            'Picture (Link)': 'https://hpe.sharepoint.com/teams/Ericsson_Services/BrandImages/241_2030.jpg',
            'Read More(Link)': 'https://whatwesell.dxc.com/dxc/',
            'Button text': 'Read more',
        },
        {
            'Main Title': 'Front Door',
            'Text': 'Solutioning & Commercial Function',
            'Picture (Link)': 'https://hpe.sharepoint.com/teams/Ericsson_Services/BrandImages/176_1179.jpg',
            'Read More(Link)': 'https://whatwesell.dxc.com/dxc/',
            'Button text': 'Ask a question',
        },
        {
            'Main Title': 'what we sell',
            'Text': 'test!',
            'Picture (Link)': 'https://hpe.sharepoint.com/teams/Ericsson_Services/BrandImages/221_2010.jpg',
            'Read More(Link)': 'https://whatwesell.dxc.com/dxc/',
            'Button text': 'click me',
        },
    ],
    leadership: {
        'Name': 'Todd Taylor',
        'Title': 'test',
        'Email': 'todd.r.taylor@hpe.com',
        'Org_Chart': '',
        'Image': 'https://hpe.sharepoint.com/teams/Ericsson_Services/Picture%20Library/PaulGlibbery-2.png'

    },
    topNav: [
        {
            'Name': 'test',
            'Parent': '',
            'Link': '',
            'Item_Order': 1,
        },
        {
            'Name': 'test child',
            'Parent': 'test',
            'Link': 'google.com',
            'Item_Order': 2,
        },
        {
            'Name': 'really long one here',
            'Parent': '',
            'Link': 'hp.com',
            'Item_Order': 2,
        },
        {
            'Name': 'spotify',
            'Parent': 'test',
            'Link': 'spotify.com',
            'Item_Order': 1,
        },
        {
            'Name': 'test',
            'Parent': 'really long one here',
            'Link': 'google.com',
            'Item_Order': 1,
        },
        {
            'Name': 'test',
            'Parent': '',
            'Link': '',
            'Item_Order': 1,
        },
        {
            'Name': 'test child',
            'Parent': 'test',
            'Link': 'google.com',
            'Item_Order': 2,
        },
        {
            'Name': 'really long one here',
            'Parent': '',
            'Link': 'hp.com',
            'Item_Order': 2,
        },
        {
            'Name': 'spotify',
            'Parent': 'test',
            'Link': 'spotify.com',
            'Item_Order': 1,
        },
        {
            'Name': 'test',
            'Parent': 'really long one here',
            'Link': 'google.com',
            'Item_Order': 1,
        },
        {
            'Name': 'test',
            'Parent': '',
            'Link': '',
            'Item_Order': 1,
        },
        {
            'Name': 'test child',
            'Parent': 'test',
            'Link': 'google.com',
            'Item_Order': 2,
        },
        {
            'Name': 'really long one here',
            'Parent': '',
            'Link': 'hp.com',
            'Item_Order': 2,
        },
        {
            'Name': 'spotify',
            'Parent': 'test',
            'Link': 'spotify.com',
            'Item_Order': 1,
        },
        {
            'Name': 'test',
            'Parent': 'really long one here',
            'Link': 'google.com',
            'Item_Order': 1,
        },
    ],
    sideNav: [
        {
            'Name': 'test',
            'Parent': '',
            'Link': '',
            'Item_Order': 1,
        },
        {
            'Name': 'test child',
            'Parent': 'test',
            'Link': 'google.com',
            'Item_Order': 2,
        },
        {
            'Name': 'really long one here',
            'Parent': '',
            'Link': 'hp.com',
            'Item_Order': 2,
        },
        {
            'Name': 'spotify',
            'Parent': 'test',
            'Link': 'spotify.com',
            'Item_Order': 1,
        },
        {
            'Name': 'test',
            'Parent': 'really long one here',
            'Link': 'google.com',
            'Item_Order': 1,
        },
        {
            'Name': 'our first link',
            'Parent': '',
            'Link': 'google.com',
            'Item_Order': 0,
        },
    ],
    news: [
        {
            'Title': 'News number 1',
            'Section': 'Global',
            'Type_of_Content': 'Thumbnail', // or Link
            'Thumbnail': 'https://hpe.sharepoint.com/teams/Ericsson_Services/Picture%20Library/PaulGlibbery-2.png',
            'Date': '01/05/2016',
            'Content': 'This is my amazing content 1',
        },
        {
            'Title': 'News number 2',
            'Section': 'Global',
            'Type_of_Content': 'Thumbnail', // or Link
            'Thumbnail': 'https://hpe.sharepoint.com/teams/Ericsson_Services/Picture%20Library/PaulGlibbery-2.png',
            'Date': '01/05/2017',
            'Content': 'This is my amazing content 2',
        },
        {
            'Title': 'News number 3',
            'Section': 'Global',
            'Type_of_Content': 'Thumbnail', // or Link
            'Thumbnail': 'https://hpe.sharepoint.com/teams/Ericsson_Services/Picture%20Library/dxc.png',
            'Date': '01/05/2015',
            'Content': 'This is my amazing content 3',
        },
        {
            'Title': 'News number 20',
            'Section': 'APAC',
            'Type_of_Content': 'Link', // or Link
            'Date': '01/05/2016',
            'Content': 'This is my amazing content',
        },
        {
            'Title': 'News number 20',
            'Section': 'APAC',
            'Type_of_Content': 'Link', // or Link
            'Date': '01/05/2016',
            'Content': 'This is my amazing content',
        },
        {
            'Title': 'News number 20',
            'Section': 'APAC',
            'Type_of_Content': 'Link', // or Link
            'Date': '01/05/2016',
            'Content': 'This is my amazing content',
        },
        {
            'Title': 'News number 20',
            'Section': 'APAC',
            'Type_of_Content': 'Link', // or Link
            'Date': '01/05/2016',
            'Content': 'This is my amazing content',
        },
        {
            'Title': 'News number 20',
            'Section': 'APAC',
            'Type_of_Content': 'Link', // or Link
            'Date': '01/05/2016',
            'Content': 'This is my amazing content',
        },

        {
            'Title': 'News number 20',
            'Section': 'APAC',
            'Type_of_Content': 'Link', // or Link
            'Date': '01/05/2016',
            'Content': 'This is my amazing content',
        },
        {
            'Title': 'News number 20',
            'Section': 'APAC',
            'Type_of_Content': 'Link', // or Link
            'Date': '01/05/2016',
            'Content': 'This is my amazing content',
        },
        {
            'Title': 'News number 20',
            'Section': 'APAC',
            'Type_of_Content': 'Link', // or Link
            'Date': '01/05/2016',
            'Content': 'This is my amazing content',
        },
        {
            'Title': 'News number 20',
            'Section': 'APAC',
            'Type_of_Content': 'Link', // or Link
            'Date': '01/05/2016',
            'Content': 'This is my amazing content',
        },
        {
            'Title': 'News number 20',
            'Section': 'APAC',
            'Type_of_Content': 'Link', // or Link
            'Date': '01/05/2016',
            'Content': 'This is my amazing content',
        },
        {
            'Title': 'News number 20',
            'Section': 'APAC',
            'Type_of_Content': 'Link', // or Link
            'Date': '01/05/2016',
            'Content': 'This is my amazing content',
        },
        {
            'Title': 'News number 1',
            'Section': 'Useful Links',
            'Type_of_Content': 'External Link', // or Link
            'Date': '01/05/2016',
            'Content': 'https://developer.mozilla.org/en-US/docs/Web/CSS/Child_selectors',
        },
    ],
    allSlides: function () {
        return this.slides;
    },
    getLeadership: function () {
        return this.leadership;
    },
    getTopNav: function () {
        return this.topNav;
    },
    getSideNav: function () {
        return this.sideNav;
    },
    getNews: function () {
        return this.news;
    },
    getPieChart: function () {
        return this.pieChart;
    },
    getSlide: function (name: string) { // replace with id, age, occupation whatever you want to filer in the router
        return this.slides.filter((elem: any) => elem.name === name)[0];
        /* time to check what arrows functions do and how the filter method works 
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
        */
    },
    getNewsContent: function () {
        return this.newsContent;
    }

};

export default data;