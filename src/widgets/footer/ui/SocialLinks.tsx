import styles from "./styles.module.css";
import youtube from "@/shared/assets/icons/Youtube.svg";
import telegram from "@/shared/assets/icons/Telegram.svg";
import github from "@/shared/assets/icons/Github.svg";
import instagram from "@/shared/assets/icons/Instagram.svg";

const SocialLinks = () => {
  return (
    <div className={styles.socialIcons}>
      <a target="_blank" href="https://www.youtube.com/@reactify-it">
        <img src={youtube} alt="Logo Youtube" />
      </a>
      <a target="_blank" href="https://github.com/YeaHubTeam">
        <img src={github} alt="Logo Github" />
      </a>
      <a target="_blank" href="https://instagram.com">
        <img src={instagram} alt="Logo Instagram" />
      </a>
      <a target="_blank" href="https://t.me/ruslan_kuyanets">
        <img src={telegram} alt="Logo Telegram" />
      </a>
    </div>
  );
};

export default SocialLinks;
