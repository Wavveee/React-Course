import { ChangeEvent} from 'react';
import './search-box.styles.css'

type SearchBoxPrors = {
  className: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
}

const SearchBox = ({className, placeholder, onChangeHandler}: SearchBoxPrors) => (
  <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
)

export default SearchBox;
