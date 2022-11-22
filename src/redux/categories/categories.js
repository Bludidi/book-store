const CHECK_STATUS = 'books/categories/CHECK_STATUS';

const initialState = [];

export const categoryReducer = (state = initialState, { type }) => {
  switch (type) {
    case CHECK_STATUS:
      return 'Under the construction';
    default:
      return state;
  }
};

export const addStatus = () => ({
  type: CHECK_STATUS,
});
