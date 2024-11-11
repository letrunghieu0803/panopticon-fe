import styles from "./index.module.scss";

const Loading = () => {
  return (
    <div className="w-full h-full fixed z-50 bg-[#d1d1d1] opacity-80">
      <div  className={`${styles.spinner}`}></div>
      <div  className={`${styles.icon}`}>
      </div>
    </div>
  );
};
export default Loading;
