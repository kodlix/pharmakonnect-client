import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import MultiSelect from "react-multi-select-component";
import { loadCategories } from "../../store/modules/category";

const MultiSelector = ({ setCategories, blogCategories }) => {
  const dispatch = useDispatch();
  const categoryOption = useSelector(state => state.category.categories)
  const options = [];
  const blogCategoriesOption = [];
  const [selected, setSelected] = useState([]);


  

  categoryOption.forEach(element => {
    let option = {};
    option.label = element.title;
    option.value = element.id;
    options.push(option);
  });

  console.log({ options })


  useEffect(() => {
    
    if(blogCategories?.length > 0) {
      
      for (const b of blogCategories) {
        let blogCategoryOption = {};
        blogCategoryOption.label = b.title;
        blogCategoryOption.value = b.id;
        blogCategoriesOption.push(blogCategoryOption);
      }
    
      setSelected(blogCategoriesOption);
    }
    dispatch(loadCategories())
  }, [blogCategories])

  const handleSelected = (input) => {
    setSelected(input)
    setCategories(input)
  }

  return (
    <div>
      {
        selected.map(x =>
          <span className="badge bg-primary text-white mr-2 mb-1">
            {x.label}
          </span>
        )
      }

      <MultiSelect
        id="categoryIds"
        name="categoryIds"
        options={options}
        value={selected}
        onChange={handleSelected}
        labelledBy="Select"
      />
    </div>
  );
};

export default MultiSelector;