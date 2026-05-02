import Snowfall from '@/components/Snowfall';

export default function ProfilePage({ params }: { params: { username: string } }) {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      <Snowfall />
      
      <div className="text-center z-10">
        <h1 className="text-5xl font-bold mb-4">@{params.username}</h1>
        <p className="text-xl">Bu sayfa yapım aşamasında</p>
        <div className="mt-12 text-xs opacity-50">by Bone</div>
      </div>
    </div>
  );
}
