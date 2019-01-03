export default [
    {
      text: "Home",
      path: "/"
    },
    {
      text: "Prices",
      path: "/prices"
    },
    {
      text: "ICOs",
      path: "/icos"
    },
    {
      text: "News",
      path: "/news"
    },
    {
      text: "Login",
      path: "/private",
      login: true
    },
    // Private routes
    {
      text: "Dashboard",
      path: "/private/dashboard",
      private: true
    },
    {
      text: "Personal pages",
      path: "/private/personal",
      private: true
    }
  ];