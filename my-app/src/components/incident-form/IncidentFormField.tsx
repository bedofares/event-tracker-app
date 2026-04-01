interface FormFieldProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}

export function FormField({
  id,
  label,
  required,
  error,
  children,
}: Readonly<FormFieldProps>) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>
        {label}
        {required && (
          <span className="text-red-500" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      {error && <small className="p-error">{error}</small>}
    </div>
  );
}
