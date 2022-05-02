import React from "react";
import { useDispatch } from "react-redux";
import { setSearchField } from "./searchSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const onSearchChange = (event) => {
    dispatch(setSearchField(event.target.value));
  };

  return (
    <div className='pa3'>
      <input
        onChange={onSearchChange}
        type='search'
        placeholder='Search robots...'
        className='pa3 ba b--orange bg-light-yellow'
      />
    </div>
  );
};

export default SearchBox;