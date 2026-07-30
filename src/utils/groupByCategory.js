export const groupByCategory = (items) => {
  const groups = [];
  items.forEach((item) => {
    const group = groups.find((g) => g.category === item.category);
    if (group) {
      group.items.push(item);
    } else {
      groups.push({ category: item.category, items: [item] });
    }
  });
  return groups;
};
