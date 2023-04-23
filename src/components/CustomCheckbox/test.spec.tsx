import {
  RenderResult,
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CustomCheckbox } from './index';

const onDone = jest.fn();
const renderCustomCheckbox = () =>
  render(<CustomCheckbox done={false} onDone={onDone} />);

it.todo('testar CustomCheckbox');
