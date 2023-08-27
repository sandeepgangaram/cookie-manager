window.onload = function () {
  CookieManager.set("hello", "world", 2);
  CookieManager.set("token", "worldaksdfalgai", 3);

  console.log(CookieManager.get("hello"));
  console.log(CookieManager.get("he"));

  CookieManager.update("hello", "wwowowowo", 3);
  CookieManager.remove("hello");

  console.log(CookieManager.getAll());
  CookieManager.clear();
};
