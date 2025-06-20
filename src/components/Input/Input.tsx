import { useState } from 'react';
import styles from './Input.module.css';

interface InputProps {
  id: string;
  label: string;
  placeholder: string;
  type?: 'text' | 'tel' | 'email' | 'password';
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  error?: string;
  disabled?: boolean;
}

export default function Input({ id, label, placeholder, type = 'text', value, onChange, required = false, error, disabled = false }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const hasError = !!error;

  return (
    <div className={styles.inputGroup}>
      <label
        htmlFor={id}
        className={`${styles.label} ${(isFocused || value) ? styles.labelFocused : ''} ${hasError ? styles.labelError : ''} ${disabled ? styles.labelDisabled : ''}`}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        className={`${styles.input} ${hasError ? styles.inputError : ''} ${disabled ? styles.inputDisabled : ''}`}
        placeholder={isFocused ? '' : placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required={required}
        disabled={disabled}
        aria-invalid={hasError}
        aria-describedby={hasError ? `${id}-error` : undefined}
      />
      {hasError && (
        <span id={`${id}-error`} className={styles.errorMessage} role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
