export const mergeByProperty = (arrays: any[], property: string) => {
  const arr = arrays.flatMap((item) => item); //делаем из всех массивов - один

  const obj = arr.reduce((acc, item) => {
    return {
      // делаем из массива - объект, чтобы повторения перезаписывались
      ...acc,
      [item[property]]: { ...acc[item[property]], ...item },
    };
  }, {});

  return Object.values(obj); //обратно преобразуем из объекта в массив
};
