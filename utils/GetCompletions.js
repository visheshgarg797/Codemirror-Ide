const Completions = (items) => {
  return items.map((item) => ({
    label: item.label,
    type: item.type,
    info: item.info,
    apply: item.apply,
  }));
};
export default Completions;
