import QuestList from '../quest-list/quest-list';
import QuestGenres from '../quests-genre-item/quest-genres';
import { useAppSelector } from 'hooks';
import { getActiveGenre } from 'store/app-process/selectors';

export default function QuestsCatalog(): JSX.Element {
  const activeGenre = useAppSelector(getActiveGenre);

  return (
    <>
      <QuestGenres activeGenre={activeGenre} />
      <QuestList />
    </>
  );
}
