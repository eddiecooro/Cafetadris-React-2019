let router = null;
export const setRouter = newRouter => {
  router = newRouter;
};

export const redirect = newRoute => {
  router.history.push(newRoute);
};
