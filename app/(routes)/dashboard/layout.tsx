import Header from "./_components/Header";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <Header/>
        <div className="px-10 md:px-20 lg:px-40 py-10">
            {children}
        </div>
        
    </div>
        
   
  );
}