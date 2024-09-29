import { useTranslation } from "react-i18next";

export type DifficultySelection = "all" | "easy" | "medium" | "hard";

export interface ProblemSearchProps {
  title: string;
  onChangeTitle: (title: string) => void;
  difficulty: "all" | "easy" | "medium" | "hard";
  onChangeDifficulty: (difficulty: DifficultySelection) => void;
  onSearch: () => void;
}

/**
 * @param {string} props.Title
 * Input Title.
 * @param {(Title: string) => void} props.onChangeTitle
 * Set input Title.
 * @param {"all" | "easy" | "medium" | "hard"} props.Difficulty
 * Difficulty.
 * @param {(Difficulty: "all" | "easy" | "medium" | "hard") => void} props.onChangeDifficulty
 * Set difficulty.
 * @param {() => void} props.onSearch
 * Search.
 * @returns {JSX.Element}
 * @constructor
 * @description
 * Problem search component.
 */
const ProblemSearch: React.FC<ProblemSearchProps> = (props): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className="join m-2 rounded">
      <div>
        <div>
          <input
            className="input input-sm join-item border-base-content/10"
            placeholder={t("input title")}
            value={props.title}
            onChange={(e) => props.onChangeTitle(e.target.value)}
          />
        </div>
      </div>
      <select
        className="join-item select select-sm border-base-content/10"
        value={props.difficulty}
        onChange={(e) =>
          props.onChangeDifficulty(
            e.target.value as "all" | "easy" | "medium" | "hard",
          )
        }
      >
        <option value="all">{t("all")}</option>
        <option value="easy">{t("easy")}</option>
        <option value="medium">{t("medium")}</option>
        <option value="hard">{t("hard")}</option>
      </select>
      <div className="indicator">
        <button
          className="btn join-item btn-sm border-base-content/10 hover:border-base-content/10"
          onClick={props.onSearch}
        >
          {t("Search")}
        </button>
      </div>
    </div>
  );
};

export default ProblemSearch;
