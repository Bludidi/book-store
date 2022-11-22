const CHECK_STATUS = 'book-store/categories/CHECK_STATUS';

const initialState = [];

const categoryReducer = (state = initialState, { type }) => {
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

export default categoryReducer;
