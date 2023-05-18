import { FormControl } from '@chakra-ui/react';
import Buttons from './../../../../../components/shared/button/Button';

const SignInButton = () => (
  <FormControl pt={5}>
    <Buttons
      type="submit"
      title="Sign In"
      width="100%"
      height={35}
      background="#4462F2"
      fontweight={100}
      fontsize={14}
      borderRadius={5}
    />
  </FormControl>
);

export default SignInButton;
