import { forwardRef } from 'react';
import type { ReactNode } from 'react';
import './Input.css';

type BaseInputProps = {
  label?: string;
  error?: string;
  icon?: ReactNode;
  as?: 'input' | 'textarea';
};

type InputProps = BaseInputProps & (
  | (React.InputHTMLAttributes<HTMLInputElement> & { as?: 'input' })
  | (React.TextareaHTMLAttributes<HTMLTextAreaElement> & { as: 'textarea' })
);

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  ({ label, error, icon, as = 'input', className = '', ...props }, ref) => {
    const inputClasses = `input-wrapper ${className}`.trim();
    const inputElementClasses = `form-input ${error ? 'error' : ''}`.trim();

    return (
      <div className="form-group">
        {label && <label htmlFor={props.id}>{label}</label>}
        <div className={inputClasses}>
          {icon && <span className="input-icon">{icon}</span>}
          {as === 'textarea' ? (
            <textarea
              ref={ref as React.Ref<HTMLTextAreaElement>}
              className={inputElementClasses}
              {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
            />
          ) : (
            <input
              ref={ref as React.Ref<HTMLInputElement>}
              className={inputElementClasses}
              {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
            />
          )}
        </div>
        {error && <span className="error-message">{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;





