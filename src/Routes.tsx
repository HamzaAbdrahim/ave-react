import HomeLayout from './layout/HomeLayout';
import ErrorBoundary from './components/commen/pages/ErrorBoundary';
import DashbordLayout from './layout/DashbordLayout';
import DetailsDemandeLayout from './layout/DetailsDemandeLayout';
import ProfileLayout from './layout/ProfileLayout';
import OfferLayout from './layout/OfferLayout';
import MessagesLayout from './layout/MessagesLayout';
import AbonnementLayout from './layout/AbonnementLayout';
import PyementCardsLayout from './layout/pyementCardsLayout';
import PaiementLayout from './layout/PaiementLayout';
import { createBrowserRouter } from 'react-router-dom';

const routes = [
  { element: <HomeLayout />, path: '/', errorElement: <ErrorBoundary /> },
  { element: <DashbordLayout />, path: 'Accueil', errorElement: <ErrorBoundary /> },
  { element: <DetailsDemandeLayout />, path: 'DetailsDemand', errorElement: <ErrorBoundary /> },
  { element: <ProfileLayout />, path: 'profile', errorElement: <ErrorBoundary /> },
  { element: <OfferLayout />, path: 'offreurs', errorElement: <ErrorBoundary /> },
  { element: <MessagesLayout />, path: 'Messages', errorElement: <ErrorBoundary /> },
  { element: <AbonnementLayout />, path: 'Abonnement', errorElement: <ErrorBoundary /> },
  { element: <PyementCardsLayout />, path: 'pyementCards', errorElement: <ErrorBoundary /> },
  { element: <PaiementLayout />, path: 'paiement', errorElement: <ErrorBoundary /> },
];

export  const router = createBrowserRouter(routes);
