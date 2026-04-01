import { useNavigate } from "react-router";

import { Button } from "primereact/button";
import { Card } from "primereact/card";

import incidentImg from "../assets/incident.jpg";

export function HomePage() {
  const navigate = useNavigate();

  const header = (
    <img
      alt="Incident"
      src={incidentImg}
      className="block w-full h-48 object-cover"
    />
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl mb-2">
          Welcome to the Incident Management Platform
        </h1>

        <p className="max-w-[70%] text-gray-500 text-lg!">
          Get a clear overview of building activity in one place. Track issues,
          analyze trends, and respond efficiently.
        </p>

        <Card
          title="Dashboard"
          subTitle="Overview & Insights"
          header={header}
          className="w-[450px] max-w-full mt-4 text-left"
        >
          <p className="text-lg text-gray-500 mb-4">
            Explore reported issues, monitor their status, and stay up to date
            in real time.
          </p>

          <Button
            size="small"
            label="Open Dashboard"
            icon="pi pi-arrow-right"
            onClick={(e) => {
              e.stopPropagation();
              navigate("/dashboard");
            }}
          />
        </Card>
      </div>
    </div>
  );
}
