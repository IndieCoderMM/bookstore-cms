import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const categoriesStatus = useSelector((state) => state.categories);

  const handleClick = () => {
    dispatch(checkStatus());
  };

  return (
    <article>
      <h2>Categories</h2>
      <h3>{categoriesStatus.length ? categoriesStatus : null}</h3>
      <button type="button" onClick={handleClick}>
        Check Status
      </button>
    </article>
  );
};

export default Categories;
