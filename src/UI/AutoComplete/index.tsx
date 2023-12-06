import { ChangeEvent, useRef, useState } from 'react';
import Input from '../Input';
import { useAppDispatch, useAppSelector } from '../../store';
import { setCountries } from '../../store/slices/countries';
import styles from './AutoComplete.module.scss';

export const AutoComplete = () => {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const { countries } = useAppSelector((state) => state.countries);
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    let suggestions: string[] = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = countries.filter((country: string) => regex.test(country));
      dispatch(setCountries(suggestions));
    }
  };

  return (
    <div className={styles.container} onClick={toggleOpen}>
      <Input
        id="country"
        name="country"
        label="Search country"
        type="text"
        onChange={handleChange}
        ref={inputRef}
      />
      {isOpen && (
        <div className={styles.dropdown}>
          {countries.map((value, index) => {
            return <div key={index}>{value}</div>;
          })}
        </div>
      )}
    </div>
  );
};
