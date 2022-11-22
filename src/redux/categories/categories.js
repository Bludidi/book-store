const CHECK_STATUS = 'books/categories/CHECK_STATUS';

const initialState = [];

const categoryReducer = (state = initialState, { type }) => {
  switch (type) {
    case CHECK_STATUS:
      return 'Under the construction';
    default:
      return state;
  }
};

export default categoryReducer;

export const addStatus = () => ({
  type: CHECK_STATUS,
});
