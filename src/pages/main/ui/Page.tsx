import { Container } from "@/shared/ui";
import styles from "./styles.module.css";
import QuestionList from "./QuestionList";
import ButtonFilters from "@/shared/ui/ButtonFilters/ButtonFilters";

import FigmaIcon from "@/shared/assets/icons/filterIcons/Figma.svg";
import FilterInput from "./FilterInput";
import FilterSection from "./FilterSection";

const Page = () => {
  return (
    <div className={styles.main}>
      <Container>
        <div className={styles.contentWrapper}>
          <QuestionList />
          <div className={styles.filterContainer}>
            <FilterInput />
            <FilterSection title="Специализация" showSeeAll={true}>
              <ButtonFilters text="UI/UX/designe" />
              <ButtonFilters text="Frontend developer" />
              <ButtonFilters text="Backed developer" />
              <ButtonFilters text="Fullstack" />
              <ButtonFilters text="Software tester" />
            </FilterSection>
            <FilterSection title="Навыки" showSeeAll={true}>
              <ButtonFilters text="Figma" img={FigmaIcon} />
              <ButtonFilters text="Wireframing" />
              <ButtonFilters text="CSS" />
              <ButtonFilters text="Wireframing" />
              <ButtonFilters text="React.js" />
              <ButtonFilters text="HTML" />
              <ButtonFilters text="Figma" />
              <ButtonFilters text="Wireframing" />
            </FilterSection>
            <FilterSection title="Уровень сложности">
              <ButtonFilters text="1-3" />
              <ButtonFilters text="4-6" />
              <ButtonFilters text="7-8" />
              <ButtonFilters text="9-10" />
            </FilterSection>
            <FilterSection title="Рейтинг">
              <ButtonFilters text="1" />
              <ButtonFilters text="2" />
              <ButtonFilters text="3" />
              <ButtonFilters text="4" />
              <ButtonFilters text="5" />
            </FilterSection>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Page;
