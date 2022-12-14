import * as S from './quests-list.styled';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import { AppRoute, Levels } from 'const/const';
import { useAppSelector } from 'hooks';
import { selectFilteredQuests } from 'store/quests-data/selectors';
import { generatePath } from 'react-router';

export default function QuestList(): JSX.Element {
  const filteredQuests = useAppSelector(selectFilteredQuests);

  return(
    <S.QuestsList>
      {filteredQuests.map((quest) => (
        <S.QuestItem key={quest.id}>
          <S.QuestItemLink to={generatePath(AppRoute.Quest, {
            id: String(quest.id)
          })}
          >
            <S.Quest>
              <S.QuestImage
                src={quest.previewImg}
                width="344"
                height="232"
                alt={`квест ${quest.title}`}
              />

              <S.QuestContent>
                <S.QuestTitle>{quest.title}</S.QuestTitle>

                <S.QuestFeatures>
                  <S.QuestFeatureItem>
                    <IconPerson />
                    {`${quest.peopleCount.join('-')} чел`}
                  </S.QuestFeatureItem>
                  <S.QuestFeatureItem>
                    <IconPuzzle />
                    {Levels[quest.level]}
                  </S.QuestFeatureItem>
                </S.QuestFeatures>
              </S.QuestContent>
            </S.Quest>
          </S.QuestItemLink>
        </S.QuestItem>
      ))}
    </S.QuestsList>
  );
}
