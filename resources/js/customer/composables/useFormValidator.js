/**
 * useFormValidator.js - Composable for inline form validation
 * Handles field-level validation with error messages
 */

export function useFormValidator() {
  const validators = {
    required: (value, fieldName) => value && value.trim() !== '' ? '' : `${fieldName} is required`,
    email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Please enter a valid email address',
    phone: (value) => /^\+?[\d\s\-()]{10,}$/.test(value) ? '' : 'Please enter a valid phone number',
    minLength: (value, fieldName, min) => value && value.length >= min ? '' : `${fieldName} must be at least ${min} characters`,
    maxLength: (value, fieldName, max) => value && value.length <= max ? '' : `${fieldName} must be no more than ${max} characters`,
    zipCode: (value) => /^\d{5}(-\d{4})?$/.test(value) ? '' : 'Please enter a valid ZIP code',
    street: (value) => value && value.trim().length > 3 ? '' : 'Please enter a valid street address'
  };

  /**
   * Validate a single field
   * @param {string} value - Field value
   * @param {Array} rules - Array of [ruleName, ...args] to apply
   * @returns {string} Error message string, or empty if valid
   */
  const validateField = (value, rules = []) => {
    for (const rule of rules) {
      const [ruleName, ...args] = Array.isArray(rule) ? rule : [rule];
      const validator = validators[ruleName];
      if (validator) {
        const error = validator(value, ...args);
        if (error) return error;
      }
    }
    return '';
  };

  /**
   * Validate entire form object
   * @param {Object} formData - Form fields object
   * @param {Object} fieldRules - { fieldName: [rules...] }
   * @returns {Object} { fieldName: errorMessage }
   */
  const validateForm = (formData, fieldRules) => {
    const errors = {};
    Object.entries(fieldRules).forEach(([field, rules]) => {
      errors[field] = validateField(formData[field] || '', rules);
    });
    return errors;
  };

  /**
   * Check if form has any errors
   * @param {Object} errors - Error object from validateForm
   * @returns {boolean} true if no errors
   */
  const isFormValid = (errors) => {
    return Object.values(errors).every(err => !err || err === '');
  };

  return {
    validateField,
    validateForm,
    isFormValid,
    validators
  };
}
