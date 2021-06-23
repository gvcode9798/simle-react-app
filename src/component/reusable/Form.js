// inputs to this component :-<Form name="name" rollno="rollno" class="class"/>
// output this component going to produce
import TextInput from "./TextInput";
const Form = ({ studName, rollno, studClass }) => {
  const passedProps = [studName, rollno, studClass];
  return (
    <div>
      {passedProps.map((item) => (
        <TextInput name={item} />
      ))}
    </div>
  );
};

export default Form;
