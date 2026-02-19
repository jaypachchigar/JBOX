import { Navbar } from "@/components/ui/Navbar";

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-[#F8F9FA] flex flex-col">
            <Navbar />
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h1 className="text-2xl font-semibold mb-4">Welcome to JBOX Dashboard</h1>
                    <p className="text-gray-500 mb-6">
                        This is the main application screen. The complex flows and canvas would be initialized here.
                    </p>
                    <div className="h-40 bg-gray-50 rounded-lg border border-dashed border-gray-200 flex items-center justify-center text-gray-400">
                        Dashboard Canvas Placeholder
                    </div>
                </div>
            </div>
        </div>
    );
}
