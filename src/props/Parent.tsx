import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log('Clicked')}>
        gsgfassd
    </ChildAsFC>
  );
};

export default Parent;