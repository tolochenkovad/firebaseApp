export const ROUTES = {
    login: '/login',
    dynamic: {
        product: (id = ':id') => `/product/${id}`,
    },
};