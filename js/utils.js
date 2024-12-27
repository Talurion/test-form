const createCookie = (name, value, hours) => {
  const date = new Date();
  date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
  const expires = `expires=${ date.toUTCString()}`;

  document.cookie = `${name}=${value}; ${expires}; path=/; secure; SameSite=Strict`;
};

export { createCookie };
