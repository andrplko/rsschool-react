import { useState } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import updateQueryParams from 'utils/updateQueryParams';
import styles from './Dropdown.module.scss';

const dropdownValues: number[] = [4, 6, 8, 10, 12];

const Dropdown = ({ perPage }: { perPage: number }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('Select value');
  const [selectedItem, setSelectedItem] = useState(perPage);
  const toggleOpen = () => setIsOpen(!isOpen);

  const handleItemClick = (value: number) => {
    setSelected(String(value));
    setSelectedItem(value);
    updateQueryParams(router, { page: '1', per_page: String(value) });
  };

  const dropdownHeadClassNames = classNames(styles.dropdownHead, {
    [styles.opened]: isOpen,
    [styles.active]: selected !== 'Select value',
  });

  const selectedItemClassNames = (value: number) =>
    classNames(styles.item, {
      [styles.selected]: value === selectedItem,
    });

  return (
    <div className={styles.container} onClick={toggleOpen}>
      <div className={dropdownHeadClassNames}>{selected}</div>
      {isOpen && (
        <div className={styles.dropdown}>
          {dropdownValues.map((value, index) => {
            return (
              <div
                key={index}
                onClick={() => handleItemClick(value)}
                className={selectedItemClassNames(value)}
              >
                {value}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
