'use client';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-zinc-950 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
        
        <div className="bg-zinc-900 rounded-3xl p-8">
          <h2 className="text-2xl mb-6">Profilini Oluştur</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm mb-2">Kullanıcı Adı (tek kullanımlık)</label>
              <input 
                type="text" 
                placeholder="kullaniciadi" 
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">İsim / Görünen Ad</label>
              <input 
                type="text" 
                placeholder="Ahmet Yılmaz" 
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Bio</label>
              <textarea 
                placeholder="Kendin hakkında kısa bilgi..."
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 h-24 focus:outline-none focus:border-white"
              />
            </div>

            <button className="w-full bg-white text-black py-4 rounded-2xl font-semibold hover:bg-gray-200 transition">
              Profili Kaydet
            </button>
          </div>
        </div>

        <div className="text-center mt-12 text-sm opacity-50">
          by Bone
        </div>
      </div>
    </div>
  );
}
