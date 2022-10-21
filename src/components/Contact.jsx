import { Button, Checkbox, FormControl, FormGroup, FormLabel, InputLabel, Select } from "@mui/material"

const Contact = () => {

  return (
    <FormControl>
      <fieldset disabled>
        <FormGroup className="mb-3">
          <FormLabel htmlFor="disabledTextInput">Disabled input</FormLabel>
          <FormControl id="disabledTextInput" placeholder="Disabled input" />
        </FormGroup>
        <FormGroup className="mb-3">
          <InputLabel htmlFor="disabledSelect">Disabled select menu</InputLabel>
          <Select id="disabledSelect">
            <option>Disabled select</option>
          </Select>
        </FormGroup>
        <FormGroup className="mb-3">
          <Checkbox
            type="checkbox"
            id="disabledFieldsetCheck"
            label="Can't check this"
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </fieldset>
    </FormControl>
  )
}

export default Contact;