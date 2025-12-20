import { forwardRef } from 'react';
import type { ReactNode } from 'react';
import './Input.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  error?: string;
  icon?: ReactNode;
  as?: 'input' | 'textarea';
}

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





