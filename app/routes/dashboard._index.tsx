import { LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/react";

// export const loader: LoaderFunction = async () => {
//     return redirect('/dashboard/events');
// };

export const meta = () => {
    return [{
      title: "Dashboard CMS",
    }, {
      property: "robots",
      content: "noindex",
    }];
};

export default function DashboardPage() {
    return (
        <div>
        </div>
    )
}