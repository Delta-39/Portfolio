import {
  FcAcceptDatabase,
  FcCommandLine,
  FcSmartphoneTablet,
} from "react-icons/fc";
import styles from "./StackOption.module.css";

const StackOption = ({ selectedOption, setSelectedOption, setData }) => {
  const stacks = [
    {
      id: 1,
      name: "Full Stack",
      icon: <FcCommandLine />,
    },
    {
      id: 2,
      name: "Frontend",
      icon: <FcSmartphoneTablet />,
    },
    {
      id: 3,
      name: "Backend",
      icon: <FcAcceptDatabase />,
    },
  ];

  const handleOptionSelect = (stackName) => {
    setSelectedOption(stackName);
    setData((prevData) => ({ ...prevData, stack: stackName }));
  };

  return (
    <>
      {stacks.map((stack) => (
        <div key={stack.id} className={styles.option}>
          <div
            className={`${styles.square} ${
              selectedOption === stack.name ? styles.selected : ""
            }`}
            onClick={() => handleOptionSelect(stack.name)}
          >
            {stack.icon}
            <span className={styles.label}>{stack.name}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default StackOption;
