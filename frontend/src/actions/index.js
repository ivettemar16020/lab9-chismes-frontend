import * as types from '../types';

export const createChisme = (
  id, 
  title,
  content,
  date,
) => ({
  type: types.CHISME_CREATED,
  payload: {
    id, 
    title,
    content,
    date,
  }
});

export const selectChisme = id => ({
    type: types.CHISME_SELECTED,
    payload: {
      id,
    }
});

export const deleteChisme = id => ({
    type: types.CHISME_DELETED,
    payload: {
      id,
    }
});
