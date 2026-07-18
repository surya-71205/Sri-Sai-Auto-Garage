import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import Home from '@/pages/Home';
import { GARAGE_NAME, ADDRESS, PHONE, MAP_EMBED_URL, META_DESCRIPTION } from '@/lib/constants';
import { useEffect } from 'react';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Setup dark mode as default and inject structured data
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.title = `${GARAGE_NAME} — Trusted Car Repair & Service Workshop`;
    
    // Create/update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', META_DESCRIPTION);

    // Schema markup
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "AutoRepair",
      "name": GARAGE_NAME,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": ADDRESS
      },
      "telephone": PHONE,
      "priceRange": "$$",
      "image": "/placeholder-workshop.jpg"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;