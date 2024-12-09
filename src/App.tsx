import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPageDarkTheme from "./pages/LandingPageDarkTheme";
import SellerAuthComplete from "./pages/SellerAuthComplete";
import BrandDashboardAi from "./pages/BrandDashboardAi";
import BrandAuthComplete from "./pages/BrandAuthComplete";
import LandingPageUserAuthCompl from "./pages/LandingPageUserAuthCompl";
import ConnectShops from "./pages/ConnectShops";
import BrandDashboad from "./pages/BrandDashboad";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/seller-auth-complete":
        title = "";
        metaDescription = "";
        break;
      case "/brand-dashboard-ai":
        title = "";
        metaDescription = "";
        break;
      case "/brand-auth-complete":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page-user-auth-complete":
        title = "";
        metaDescription = "";
        break;
      case "/connect-shops":
        title = "";
        metaDescription = "";
        break;
      case "/brand-dashboad":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPageDarkTheme />} />
      <Route path="/seller-auth-complete" element={<SellerAuthComplete />} />
      <Route path="/brand-dashboard-ai" element={<BrandDashboardAi />} />
      <Route path="/brand-auth-complete" element={<BrandAuthComplete />} />
      <Route
        path="/landing-page-user-auth-complete"
        element={<LandingPageUserAuthCompl />}
      />
      <Route path="/connect-shops" element={<ConnectShops />} />
      <Route path="/brand-dashboad" element={<BrandDashboad />} />
    </Routes>
  );
}
export default App;
