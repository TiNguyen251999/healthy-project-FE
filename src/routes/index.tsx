import { useRoutes } from 'react-router-dom';

// routes
import dashboard from '@/routes/dashboard';

// ==============================|| ROUTING RENDER ||============================== //
export default function Routes() {
  return useRoutes([dashboard]);
}
