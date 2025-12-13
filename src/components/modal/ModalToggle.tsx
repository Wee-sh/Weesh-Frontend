interface Props {
  value: boolean;
  onChange: (val: boolean) => void;
}

const ModalToggle = ({ value, onChange }: Props) => {
  return (
    <div
      onClick={() => onChange(!value)}
      className={`
        w-[56px] h-[30px] rounded-full cursor-pointer flex items-center px-1
        transition-colors duration-300
        ${value ? "bg-[#452F11]" : "bg-[#696969]"}
      `}
    >
      <div
        className={`
          w-6 h-6 bg-white rounded-full shadow
          transition-transform duration-300
          ${value ? "translate-x-6" : "translate-x-0"}
        `}
      />
    </div>
  );
};

export default ModalToggle;
