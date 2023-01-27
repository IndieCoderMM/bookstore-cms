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
    <article className="categories-page">
      <h2>Categories Page</h2>
      <h3>
        {categoriesStatus === 'UNDER_CONSTRUCTION' ? (
          <div className="status-popup">
            <p>
              🚧
              {categoriesStatus}
              🚧
            </p>
          </div>
        ) : null}
      </h3>
      <button type="button" onClick={handleClick} className="check-btn">
        Check Status
      </button>
    </article>
  );
};

export default Categories;
