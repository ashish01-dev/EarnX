import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen w-full flex items-center justify-center" style={{ background: "#13121b" }}>
      <Card className="w-full max-w-md mx-4" style={{ background: "rgba(22,22,26,0.9)", backdropFilter: "blur(40px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 24 }}>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center gap-4 py-8">
            <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "rgba(255,137,6,0.15)", border: "1px solid rgba(255,137,6,0.3)" }}>
              <AlertCircle className="h-8 w-8" style={{ color: "#ff8906" }} />
            </div>
            <h1 className="text-4xl font-bold" style={{ fontFamily: "'Syne',sans-serif", color: "#fffffe" }}>
              404
            </h1>
            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 16, color: "#a7a9be" }}>
              Page not found
            </p>
            <button onClick={() => setLocation("/")}
              className="btn-magnetic rounded-full flex items-center gap-2 font-body font-bold mt-4 cursor-pointer"
              style={{ padding: "12px 28px", fontSize: 14, color: "#fffffe", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
              <ArrowLeft size={16} /> Back to Home
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
