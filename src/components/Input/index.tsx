import { FC, useState } from 'react';
import styles from './Input.module.css';

interface InputProps {
  id: string;
  label: string;
  placeholder: string;
  type?: 'text' | 'tel' | 'email' | 'password';
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

const Input: FC<InputProps> = ({
  id,
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  required = false
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={styles.inputGroup}>
      <label 
        htmlFor={id} 
        className={`${styles.label} ${(isFocused || value) ? styles.labelFocused : ''}`}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        className={styles.input}
        placeholder={isFocused ? '' : placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required={required}
      />
    </div>
  );
};

export default Input; 