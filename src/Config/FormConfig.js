// FormConfig.js
export const FormConfig = [
  {
    stepTitle: "Personal Details",
    field: [
      { label: "full name", name: "fullName", type: "text", placeholder: "Enter your fullName" },
      { label: "email", name: "email", type: "email", placeholder: "Enter your Email" },
      { label: "phone number", name: "phone", type: "number", placeholder: "Mobile" },
    ],
  },
  {
    stepTitle: "Job preference",
    field: [
      { label: "Desired Role", name: "desiredRole", type: "text", placeholder: "Example:React Developer,intern" },
      { label: "Expected Salary", name: "salary", type: "text", placeholder: "Enter the Excepted salary" },
      { label: "Prefered Location", name: "locationPreferred", type: "text", placeholder: "Enter prefered location " },
    ],
  },
  {
    stepTitle: "Add initial job Application",
    field: [
      { label: "companyName", name: "companyName", type: "text", placeholder: "Enter company Name" },
      { label: "RoleTitle", name: "roleTitle", type: "text", placeholder: "Enter Role Title" },
      { label: "Applicationlink", name: "applicationLink", type: "url", placeholder: "Enter Application link" },
      {
        label: "Enter current Status",
        name: "status",
        type: "select",
        optionForm: [
          { value: "Applied", label: "Applied" },
          { value: "Interview", label: "Interview" },
          { value: "Offered", label: "Offered" },
          { value: "Rejected", label: "Rejected" },
        ],
        placeholder: "Select Current status",
      },
    ],
  },
];
