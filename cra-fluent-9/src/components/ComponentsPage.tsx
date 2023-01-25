import {
  Button,
  Dialog,
  DialogActions,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  DialogTrigger,
  Divider,
  Image,
  Input,
  Label,
  useId,
} from '@fluentui/react-components';
import { FC } from 'react';

const ComponentsPage: FC = () => {
  const inputId = useId('input');
  return (
    <div>
      <Button>Button</Button>
      <Divider />
      <Dialog>
        <DialogTrigger disableButtonEnhancement>
          <Button>Dialog</Button>
        </DialogTrigger>
        <DialogSurface>
          <DialogBody>
            <DialogTitle>Dialog title</DialogTitle>
            <DialogContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam exercitationem cumque repellendus eaque
              est dolor eius expedita nulla ullam? Tenetur reprehenderit aut voluptatum impedit voluptates in natus iure
              cumque eaque?
            </DialogContent>
            <DialogActions>
              <DialogTrigger disableButtonEnhancement>
                <Button appearance="secondary">Close</Button>
              </DialogTrigger>
              <Button appearance="primary">Do Something</Button>
            </DialogActions>
          </DialogBody>
        </DialogSurface>
      </Dialog>
      <Image alt="Erik's avatar" shape="circular" src="https://via.placeholder.com/50" height={50} width={50} />
      <div>
        {/* size only affects the label? the doc says it should do more than that */}
        <Label htmlFor={inputId} size="medium">
          Sample input
        </Label>
        <Input id={inputId} />
      </div>
    </div>
  );
};

export default ComponentsPage;
