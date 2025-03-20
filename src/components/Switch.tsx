"use client";

interface SwitchProps
{
  isOn: boolean;
  handleToggle: () => void;
}

const Switch: React.FC<SwitchProps> = ({ isOn, handleToggle }) =>
{
  return (
    <div className="flex items-center">
      <input
        checked={isOn}
        onChange={handleToggle}
        className="hidden"
        id={`switch-new`}
        type="checkbox"
      />
      <label
        className="relative flex items-center cursor-pointer"
        htmlFor={`switch-new`}
      >
        <span
          className={`block w-10 h-6 rounded-full transition-colors ${isOn ? "bg-green-500" : "bg-gray-300"
            }`}
        ></span>
        <span
          className={`absolute left-0 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${isOn ? "translate-x-5" : "translate-x-1"
            }`}
        ></span>
      </label>
    </div>
  );
};

export default Switch;