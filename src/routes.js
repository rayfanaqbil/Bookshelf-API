const { addBooksHandler, getAllBooksHandler, getAllBooksHandlerDetails, editBooksHandler, deleteBooksHandler } = require('./handler');

const routes = [
    {
        method : 'POST',
        path: '/books',
        handler: addBooksHandler,
    },
    {
        method : 'GET',
        path: '/books',
        handler: getAllBooksHandler,
    },
    {
        method : 'GET',
        path: '/books/{id}',
        handler: getAllBooksHandlerDetails,
    },
    {
        method : 'PUT',
        path: '/books/{id}',
        handler: editBooksHandler,
    },
    {
        method : 'DELETE',
        path: '/books/{id}',
        handler: deleteBooksHandler,
    },

];

module.exports = routes;