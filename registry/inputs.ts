import { ComponentItem } from './index';

export const inputs: ComponentItem[] = [
  {
    id: 'floating-label-input',
    name: 'Floating Label',
    description: 'Input field where the placeholder elegantly floats to become a label.',
    category: 'Inputs',
    new: true,
    code: {
      html: `<div class="input-group">
  <input type="text" id="name-input" class="modern-input" required>
  <label for="name-input" class="floating-label">Full Name</label>
</div>`,
      css: `.input-group {
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 20px 0;
}
.modern-input {
  width: 100%;
  background: #18181b;
  border: 2px solid #27272a;
  border-radius: 8px;
  padding: 16px 16px 12px;
  font-size: 1rem;
  color: #fff;
  transition: border-color 0.3s, box-shadow 0.3s;
  outline: none;
}
.modern-input:focus {
  border-color: #6366f1;
  box-shadow: 0 0 0 1px #6366f1;
}
.floating-label {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #a1a1aa;
  font-size: 1rem;
  pointer-events: none;
  transition: all 0.2s ease-out;
}
.modern-input:focus ~ .floating-label,
.modern-input:valid ~ .floating-label {
  top: 0;
  transform: translateY(-50%) scale(0.85);
  background: #09090b; /* Match app bg */
  padding: 0 4px;
  color: #6366f1;
}
.modern-input:valid ~ .floating-label {
  color: #a1a1aa;
}`,
      js: ``
    }
  },
  {
    id: 'otp-input',
    name: 'Animated OTP',
    description: 'One-time password input with auto-focus and visual feedback.',
    category: 'Inputs',
    code: {
      html: `<div class="otp-container">
  <input type="text" class="otp-input" maxlength="1" pattern="[0-9]" inputmode="numeric">
  <input type="text" class="otp-input" maxlength="1" pattern="[0-9]" inputmode="numeric">
  <input type="text" class="otp-input" maxlength="1" pattern="[0-9]" inputmode="numeric">
  <input type="text" class="otp-input" maxlength="1" pattern="[0-9]" inputmode="numeric">
  <input type="text" class="otp-input" maxlength="1" pattern="[0-9]" inputmode="numeric">
  <input type="text" class="otp-input" maxlength="1" pattern="[0-9]" inputmode="numeric">
</div>`,
      css: `.otp-container {
  display: flex;
  gap: 12px;
}
.otp-input {
  width: 48px;
  height: 60px;
  background: #18181b;
  border: 2px solid #27272a;
  border-radius: 12px;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-align: center;
  transition: border-color 0.3s, transform 0.2s;
  outline: none;
}
.otp-input:focus {
  border-color: #10b981;
  transform: scale(1.05);
}
.otp-input.filled {
  border-color: #3f3f46;
  background: #27272a;
}`,
      js: `const inputs = document.querySelectorAll('.otp-input');

inputs.forEach((input, index) => {
  input.addEventListener('input', (e) => {
    if (input.value.length === 1) {
      input.classList.add('filled');
      if (index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      input.classList.remove('filled');
      if (input.value.length === 0 && index > 0) {
        inputs[index - 1].focus();
      }
    }
  });
});`
    }
  }
];
