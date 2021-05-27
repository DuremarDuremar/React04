//1 1 2 3 5 8 13 21 34

export const fil = (n) => {
  if (n <= 0) {
    return 0;
  }
  if (n <= 2) {
    return 1;
  }
  return fil(n - 1) + fil(n - 2);
};
