import { Component } from 'react';
import { ICharacter, ICharactersListProps } from '../../types';
import styles from './CharactersList.module.scss';

class CharactersList extends Component<ICharactersListProps> {
  render() {
    const { characters } = this.props;

    return (
      <div className={styles.container}>
        {characters?.map((character: ICharacter) => (
          <div key={character.id} className={styles.card}>
            <img
              src={character.image}
              alt={character.name}
              className={styles.image}
            />
            <div className={styles.content}>
              <h2 className={styles.name}>{character.name}</h2>
              <p className={styles.text}>
                The species of the character: {character.species}
              </p>
              <p className={styles.text}>
                The gender of the character: {character.gender}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default CharactersList;
