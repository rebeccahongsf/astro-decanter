type Item = {
  active?: boolean;
  children?: Item[];
}

/**
 * Finds if there is an active item in a nested array of items.
 * @param items - The array of items to search.
 * @returns True if there is an active item; otherwise, false.
 */
const findActiveInItems = (items: Item[] | undefined): boolean => {
  // Done when no more items.
  if (!Array.isArray(items)) {
    return false;
  }

  const results = items.map((item) => {
    if (item.active) {
      return true;
    }
    if (Array.isArray(item.children)) {
      return findActiveInItems(item.children);
    }
    return false;
  });

  return results.includes(true);
};

/**
 * Finds if there is an active item in a nested array of items.
 * @param items - The array of items to search.
 * @returns True if there is an active item; otherwise, false.
 */
const findActiveInNestedItems = (items: Item[] | undefined): boolean => findActiveInItems(items);

export default findActiveInNestedItems;
