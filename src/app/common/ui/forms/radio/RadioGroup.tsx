import React from 'react';

type InputFieldProps = {
  register?: any;
  icon?: any;
  title?: string; 
  width?: any; 
  height?: any; 
  style?: string; 
  name?: any;
  placeholder?: any;
  type?: any; 
}

const RadioGroup: React.FC<InputFieldProps> = ({
  register,
  title,
  name,
  icon,
  placeholder,
  type, 
  width, 
  height, style,
}) => {
  return (
    <>
      <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
        <input
          id="bordered-radio-1"
          type="radio"
          value=""
          name="bordered-radio"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="bordered-radio-1"
          className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Default radio
        </label>
      </div>
      <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
        <input
          checked
          id="bordered-radio-2"
          type="radio"
          value=""
          name="bordered-radio"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="bordered-radio-2"
          className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Checked state
        </label>
      </div>
    </>
  );
};

export default RadioGroup;
