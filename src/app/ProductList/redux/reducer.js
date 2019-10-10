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