import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { L } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted px-4">
      <div className="text-center">
        <h1 className="mb-4 font-bold">404</h1>
        <p className="mb-4 text-lg sm:text-xl text-muted-foreground">{L('الصفحة غير موجودة', 'Page not found')}</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          {L('العودة للصفحة الرئيسية', 'Back to Home')}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
