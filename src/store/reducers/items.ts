export function itemsHasErrored(
  state = false,
  action: { type: any; hasErrored: any }
) {
  switch (action.type) {
    case "ITEMS_HAS_ERRORED":
      return action.hasErrored;

    default:
      return state;
  }
}

export function itemsIsLoading(
  state = false,
  action: { type: any; isLoading: any }
) {
  switch (action.type) {
    case "ITEMS_IS_LOADING":
      return action.isLoading;

    default:
      return state;
  }
}

export function items(state = [], action: { type: any; items: any }) {
  switch (action.type) {
    case "ITEMS_FETCH_DATA_SUCCESS":
      return action.items;

    default:
      return state;
  }
}
