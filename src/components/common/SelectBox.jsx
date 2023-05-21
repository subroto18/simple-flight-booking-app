import { useDispatch } from "react-redux";
import Select from "react-select";
import { updateDepartureFrom } from "../../store/slices/bookingSearchSlice";

const options = [
  { value: "kolkata", label: "Kolkata" },
  { value: "dehli", label: "Dehli" },
  { value: "bengalore", label: "Bengalore" },
];

const handleChange = (value) => {


  console.log(dispatch(updateDepartureFrom(value.label)));
};

export const SelectBox = () => (

    return (
        <Select onChange={handleChange} options={options} />
    )
 
);
