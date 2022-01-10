import { FilterForm, FilterInput, FilterBtn } from "./Filter.styled";
import { MdSearch } from "react-icons/md";

const Filter = ({ value, onChange }) => {
  return (
    <>
      <h3>Find contacts by name</h3>
      <FilterForm>
        <FilterInput
          type="text"
          name="filter"
          onChange={onChange}
          value={value}
          placeholder="Search name"
          autoComplete="off"
        />
        <FilterBtn className="filter-button" type="submit">
          <MdSearch />
        </FilterBtn>
      </FilterForm>
    </>
  );
};

export default Filter;
