import { Button } from "@/components/ui/button";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-24">
            <Button variant={'secondary'}>Dashboard Button</Button>
            {children}
        </div>
    )
}