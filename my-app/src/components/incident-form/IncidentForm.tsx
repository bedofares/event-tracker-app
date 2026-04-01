import { useRef, useState } from "react";

import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";

import { SEVERITIES, STATUSES } from "../../constants/incident.constants";
import type {
  Incident,
  IncidentSeverity,
  IncidentStatus,
} from "../../types/types";
import { FormField } from "./IncidentFormField";

interface IncidentFormProps {
  visible: boolean;
  onHide: () => void;
  onSave: (incident: Incident) => void;
}

interface FormErrors {
  name?: string;
  date?: string;
  status?: string;
  severity?: string;
}

export function IncidentForm({
  visible,
  onHide,
  onSave,
}: Readonly<IncidentFormProps>) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState<Date | null>(null);
  const [status, setStatus] = useState<IncidentStatus | null>(null);
  const [severity, setSeverity] = useState<IncidentSeverity | null>(null);

  const [errors, setErrors] = useState<FormErrors>({});

  const nameRef = useRef<HTMLInputElement>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!name.trim()) newErrors.name = "Name is required";
    if (!date) newErrors.date = "Date is required";
    if (!status) newErrors.status = "Status is required";
    if (!severity) newErrors.severity = "Severity is required";

    setErrors(newErrors);

    if (newErrors.name) {
      nameRef.current?.focus();
    }

    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setName("");
    setDescription("");
    setDate(null);
    setStatus(null);
    setSeverity(null);
    setErrors({});
  };

  const handleSave = () => {
    if (!validate()) return;
    if (!date || !status || !severity) return;

    onSave({
      id: Date.now(),
      name,
      description,
      date,
      status,
      severity,
    });

    resetForm();
    onHide();
  };

  const handleHide = () => {
    resetForm();
    onHide();
  };

  return (
    <Dialog
      header="Add Incident"
      visible={visible}
      className="w-[400px]"
      onHide={handleHide}
    >
      <div className="flex flex-col gap-4">
        <FormField id="incident-name" label="Name" required error={errors.name}>
          <InputText
            id="incident-name"
            ref={nameRef}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={errors.name ? "p-invalid" : ""}
          />
        </FormField>

        <FormField id="incident-description" label="Description">
          <InputText
            id="incident-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormField>

        <FormField id="incident-date" label="Date" required error={errors.date}>
          <Calendar
            inputId="incident-date"
            value={date}
            onChange={(e) => setDate(e.value as Date)}
            showIcon
            className={errors.date ? "p-invalid" : ""}
          />
        </FormField>

        <FormField
          id="incident-status"
          label="Status"
          required
          error={errors.status}
        >
          <Dropdown
            inputId="incident-status"
            value={status}
            options={STATUSES}
            onChange={(e) => setStatus(e.value)}
            placeholder="Select status"
            className={errors.status ? "p-invalid" : ""}
          />
        </FormField>

        <FormField
          id="incident-severity"
          label="Severity"
          required
          error={errors.severity}
        >
          <Dropdown
            inputId="incident-severity"
            value={severity}
            options={SEVERITIES}
            onChange={(e) => setSeverity(e.value)}
            placeholder="Select severity"
            className={errors.severity ? "p-invalid" : ""}
          />
        </FormField>

        <div className="flex justify-end gap-2">
          <Button label="Save" onClick={handleSave} />
          <Button label="Cancel" severity="secondary" onClick={handleHide} />
        </div>
      </div>
    </Dialog>
  );
}
