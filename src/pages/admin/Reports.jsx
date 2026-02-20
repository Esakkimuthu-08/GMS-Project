import StaffAdminLayout from "../../layouts/StaffAdminLayout";

export default function AdminReports() {
  return (
    <StaffAdminLayout>
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Reports & Analytics
        </h1>
        <p className="text-muted-foreground mb-8">
          Monthly and category-wise grievance reports
        </p>

        <div className="bg-white rounded-lg shadow-md border border-border p-12">
          <div className="text-center py-12">
            <div className="text-5xl mb-4">📈</div>
            <h2 className="text-2xl font-bold mb-2">
              Reports & Analytics Page
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-4">
              This page provides monthly and category-wise grievance analytics
              with charts and insights.
            </p>
            <p className="text-sm text-muted-foreground">
              Ready for charts & real data.
            </p>
          </div>
        </div>
      </div>
    </StaffAdminLayout>
  );
}
