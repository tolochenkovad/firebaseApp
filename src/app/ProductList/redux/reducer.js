import defaultImage from '../../../assets/img/defaultImg.png';


let initialState = {
    img: defaultImage,
    title: 'Title',
    description: 'lorem lorem lorem lorem lorem lorem lorem ' +
        'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ' +
        'lorem lorem lorem lorem lorem lorem lorem',
    location: 'Ukraine',
    date: '13.12.2019',
    price: '500'
};

const productListReducer = (state = initialState, action) => {
    switch (action.type) {
        // case ADD_CATEGORY:
        //     return {
        //         ...state,
        //         category: [...state.category, {
        //             id: action.payload.id,
        //             categoryValue: action.payload.value,
        //             parent: action.payload.parent
        //         }]
        //     };
        default:
            return state;
    }
};

export default productListReducer;