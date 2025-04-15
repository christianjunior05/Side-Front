import { useEffect, useState } from "react";

const DashboardPage = () => {
  const [stats, setStats] = useState({
    users: 120,
    sales: 3200,
    visits: 18000,
    growth: 12,
  });

  useEffect(() => {
    // Tu peux remplacer par une vraie requête API ici plus tard
    // axios.get('/api/stats')...
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg hidden md:block">
        <div className="p-6 text-xl font-bold border-b">📊 Dashboard</div>
        <ul className="p-4 space-y-2">
          <li className="hover:text-blue-600 cursor-pointer">Accueil</li>
          <li className="hover:text-blue-600 cursor-pointer">Utilisateurs</li>
          <li className="hover:text-blue-600 cursor-pointer">Statistiques</li>
        </ul>
      </aside>

      {/* Main content */}
      <div className="flex-1 p-6 overflow-auto">
        <header className="text-2xl font-bold mb-6">Bienvenue 👋</header>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <StatCard title="Utilisateurs" value={stats.users} />
          <StatCard title="Ventes" value={`$${stats.sales}`} />
          <StatCard title="Visites" value={stats.visits} />
          <StatCard title="Croissance" value={`${stats.growth}%`} />
        </div>

        {/* Placeholder pour un graphique */}
        <div className="bg-white rounded-xl p-6 shadow-md h-64 flex items-center justify-center text-gray-400">
          📈 Graphique ici (Chart.js ou Recharts)
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value }) => (
  <div className="bg-white p-4 rounded-xl shadow text-center">
    <div className="text-sm text-gray-500">{title}</div>
    <div className="text-2xl font-bold mt-2">{value}</div>
  </div>
);

export default DashboardPage;
