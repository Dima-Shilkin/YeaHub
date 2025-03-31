import ButtonFilters from "@/shared/ui/button/ButtonFilters/ButtonFilters";
import FilterSection from "@/shared/ui/FilterSection/FilterSection";
import styles from "./styles.module.css";

interface SkillsFilterProps {
  skills: { id: number; title: string }[];
  activeSkills: string[];
  handleClickSkill: (id: number) => void;
}

const SkillsFilter = ({
  skills,
  activeSkills,
  handleClickSkill,
}: SkillsFilterProps) => {
  return (
    <FilterSection title="Навыки">
      {skills.map((el) => {
        const isActive = activeSkills.includes(String(el.id));
        return (
          <ButtonFilters
            id={el.id}
            key={el.id}
            text={el.title}
            onClick={() => handleClickSkill(el.id)}
            className={isActive ? styles.active : ""}
          />
        );
      })}
    </FilterSection>
  );
};

export default SkillsFilter;
