// requiring employee.json file
const employees = require("../employees.json");

//this method will extract all the required information from the json file
const getEmployeeData = data => {
  let employeeData = [];

  let temp = data.map(employee => {
    return {
      id: employee.id,
      name: employee.name,
      email: employee.email,
      department: employee.department,
      designation: employee.designation,
      image: employee.image,
      phone_number: employee.phone_number,
      lastSeen: employee.attendances[employee.attendances.length - 1].end_time
    };
  });

  employeeData = [...temp];

  return employeeData;
};

// initializing initial state for this reducer
const initialState = {
  employees: employees,
  employeeData: getEmployeeData(employees)
};

const reducer = (state = initialState, action) => {
  let newState = { ...state };

  return newState;
};

export default reducer;
