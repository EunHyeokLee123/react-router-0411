import styles from './BlogFilter.module.scss';

import { categories } from '../assets/dummy-data';
import { useSearchParams } from 'react-router-dom';

const BlogFilter = () => {
  // setSearchParams -> 쿼리스트링을 만들어 주는 함수
  const [searchParams, setSearchParams] = useSearchParams();

  const handleCategoryChange = (e) => {
    // 매개값으로 콜백함수를 받음
    // 콜백함수의 매개변수로는 기존의 쿼리스트링이 온다.
    // set함수를 이용해서 원하는 쿼리스트링을 추가
    // 추가했다면, 리턴함 -> 반영됨.
    setSearchParams((prev) => {
      prev.set('category', e.target.value);
      return prev;
    });
  };

  const handleSortChange = (e) => {
    setSearchParams((prev) => {
      prev.set('sort', e.target.value);
      return prev;
    });
  };

  const handleSearch = (e) => {
    setSearchParams((prev) => {
      prev.set('search', e.target.value);
      return prev;
    });
  };

  return (
    <div className={styles.filter}>
      <select onChange={handleCategoryChange}>
        {categories.map(({ id, name }) => {
          return (
            <option key={id} value={id}>
              {name}
            </option>
          );
        })}
      </select>

      <select onChange={handleSortChange}>
        <option value='latest'>최신순</option>
        <option value='oldest'>오래된순</option>
      </select>

      <input
        type='text'
        placeholder='검색어를 입력하세요'
        onChange={handleSearch}
      />
    </div>
  );
};

export default BlogFilter;
