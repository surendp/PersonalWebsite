
import { PROJECT_LIST } from '../actions/action_index';

export default function (state=[], action) {
  
  switch (action.type) {
    case PROJECT_LIST:
      return action.payload.data.projects;
  }

  return state;
};
