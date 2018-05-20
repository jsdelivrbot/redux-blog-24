import { ACTIVE_POST } from "../actions/actions-type";

export default (state = null, actions) => {
  switch (actions.type) {
    case ACTIVE_POST:
      return actions.payload;
    default:
      return state;
  }
};
