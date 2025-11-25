import React, { useEffect, useState } from "react";
import { FormConfig } from "../../Config/FormConfig";
import Stepping from "../Stepping";

const MainForm = ({ onClose, defaultStage }) => {
  const [currentStep, SetCurrentStep] = useState(0);
  const [formData, setFormData] = useState({ stage: defaultStage });
  const step = FormConfig[currentStep];
  const selectField = step.field.find(f => f.type === "select");

  useEffect(() => {
    if(!selectField)
    {
      return;
    }
    setFormData((prev) => ({
      ...prev,
      [selectField.name]: defaultStage,
    }));
  }, [defaultStage,selectField]);

  
  function handleSubmit(e) {
    e.preventDefault();
    const payload = {
    ...formData,
    
    stage:formData.status || defaultStage || "Applied",
  };

    onClose(payload);

    alert("Success...");
    console.log(formData);
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[350px] bg-white p-6 rounded-2xl">
        <div>
          <Stepping stepCount={currentStep} />
        </div>

        <button
          onClick={onClose}
          className="relative top-0 left-70 text-xl font-bold text-red-500 hover:bg-gray-300 w-5 cursor-pointer rounded-2xl transition-transform duration-500 ease-in-out hover:rotate-180 "
        >
          X
        </button>

        <h2 className="text-xl font-bold flex justify-center ">
          {step.stepTitle}
        </h2>

        <form onSubmit={handleSubmit} className="m-1 flex flex-col gap-2">
          {step.field.map((field) => (
            <div key={field.name}>
              <label className="font-semibold">{field.label}</label>
              {field.type == "select" ? (
                <select
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  className="border cursor-pointer rounded-xl"
                >
                  {defaultStage &&
                    !field.optionForm.some((o) => o.value === defaultStage) && (
                      <option value={defaultStage}>{defaultStage}</option>
                    )}
                  {field.optionForm.map((options) => (
                    <option key={options.value} value={options.value}>
                      {options.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  className="border rounded-xl w-full placeholder:text-p-1 p-1"
                />
              )}
            </div>
          ))}
          <div className="flex justify-between ">
            <div>
              {currentStep > 0 ? (
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    SetCurrentStep((p) => p - 1);
                  }}
                  className="border cursor-pointer w-[60px] p-1  hover:bg-gray-400 rounded-xl"
                >
                  Back
                </button>
              ) : (
                <div />
              )}
            </div>
            <div>
              {currentStep < FormConfig.length - 1 ? (
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    SetCurrentStep((p) => p + 1);
                  }}
                  className="border w-[60px] p-1 bg-green-500 cursor-pointer hover:rounded-xl hover:bg-green-700"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="border w-15 p-1 bg-green-500 cursor-pointer hover:rounded-xl hover:bg-green-700"
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MainForm;
