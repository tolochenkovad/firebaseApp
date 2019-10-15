import defaultImage from '../../../assets/img/defaultImg.png';

let initialState = {
    products:[{
        id: 1,
        img: defaultImage,
        title: 'Title',
        description: 'lorem lorem lorem lorem lorem lorem lorem ' +
            'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ' +
            'lorem lorem lorem lorem lorem lorem lorem',

        location: 'Kyiv',
        date: '13.12.2019',
        price: '500',
        author: 'Harry Potter',
        contact: '+380669586370'
    },
    {
        id: 2,
        img: defaultImage,
        title: 'TitleSecond',
        description: 'lorem lorem lorem lorem lorem lorem lorem ' +
            'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ' +
            'lorem lorem lorem lorem lorem lorem lorem',

        location: 'Zaporozhye',
        date: '19.12.2019',
        price: '1500',
        author: 'David Braun',
        contact: '+380634986370'
    },
    {
        id: 3,
        img: defaultImage,
        title: 'TitleThird',
        description: 'lorem lorem lorem lorem lorem lorem lorem ' +
            'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ' +
            'lorem lorem lorem lorem lorem lorem lorem',

        location: 'Kharkiv',
        date: '02.12.2019',
        price: '1800',
        author: 'Jack Gully',
        contact: '+380661598234'
    }
    ]
};

const productListReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default productListReducer;