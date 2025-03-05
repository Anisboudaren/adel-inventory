import path from "path";



export default function Home() {
  console.log("Resolved Path for @:", path.resolve(__dirname, "../../components"));
  return (
      <div className="flex items-center justify-center min-h-screen">
        <h2 className="text-3xl">
            adel inventory mangament app that will never see the light if i keep procrasitating 
        </h2>
      </div>
  );
}
