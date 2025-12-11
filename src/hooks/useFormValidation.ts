import { useState, useCallback } from "react"

export type ValidationRule = {
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  custom?: (value: string) => boolean
  message?: string
}

export type ValidationRules = {
  [fieldName: string]: ValidationRule
}

export type ValidationErrors = {
  [fieldName: string]: string
}

export type UseFormValidationReturn = {
  errors: ValidationErrors
  touched: { [fieldName: string]: boolean }
  validateField: (name: string, value: string) => string
  validateForm: (values: { [key: string]: string }) => boolean
  setFieldTouched: (name: string) => void
  clearErrors: () => void
  clearFieldError: (name: string) => void
  isFieldInvalid: (name: string) => boolean
  getFieldError: (name: string) => string
}

const defaultMessages = {
  required: "필수 입력 항목입니다.",
  minLength: (min: number) => `최소 ${min}자 이상 입력해주세요.`,
  maxLength: (max: number) => `최대 ${max}자까지 입력 가능합니다.`,
  pattern: "올바른 형식으로 입력해주세요.",
  custom: "입력값이 올바르지 않습니다."
}

export default function useFormValidation(rules: ValidationRules): UseFormValidationReturn {
  const [errors, setErrors] = useState<ValidationErrors>({})
  const [touched, setTouched] = useState<{ [fieldName: string]: boolean }>({})

  const validateField = useCallback((name: string, value: string): string => {
    const rule = rules[name]
    if (!rule) return ""

    const trimmedValue = value?.trim() || ""

    if (rule.required && !trimmedValue) {
      return rule.message || defaultMessages.required
    }

    if (rule.minLength && trimmedValue.length < rule.minLength) {
      return rule.message || defaultMessages.minLength(rule.minLength)
    }

    if (rule.maxLength && trimmedValue.length > rule.maxLength) {
      return rule.message || defaultMessages.maxLength(rule.maxLength)
    }

    if (rule.pattern && !rule.pattern.test(trimmedValue)) {
      return rule.message || defaultMessages.pattern
    }

    if (rule.custom && !rule.custom(trimmedValue)) {
      return rule.message || defaultMessages.custom
    }

    return ""
  }, [rules])

  const validateForm = useCallback((values: { [key: string]: string }): boolean => {
    const newErrors: ValidationErrors = {}
    const newTouched: { [fieldName: string]: boolean } = {}
    let isValid = true

    Object.keys(rules).forEach(fieldName => {
      const error = validateField(fieldName, values[fieldName] || "")
      newTouched[fieldName] = true
      if (error) {
        newErrors[fieldName] = error
        isValid = false
      }
    })

    setErrors(newErrors)
    setTouched(newTouched)
    return isValid
  }, [rules, validateField])

  const setFieldTouched = useCallback((name: string) => {
    setTouched(prev => ({ ...prev, [name]: true }))
  }, [])

  const clearErrors = useCallback(() => {
    setErrors({})
    setTouched({})
  }, [])

  const clearFieldError = useCallback((name: string) => {
    setErrors(prev => {
      const newErrors = { ...prev }
      delete newErrors[name]
      return newErrors
    })
  }, [])

  const isFieldInvalid = (name: string): boolean => {
    return touched[name] && !!errors[name]
  }

  const getFieldError = (name: string): string => {
    return touched[name] ? errors[name] || "" : ""
  }

  return {
    errors,
    touched,
    validateField,
    validateForm,
    setFieldTouched,
    clearErrors,
    clearFieldError,
    isFieldInvalid,
    getFieldError
  }
}
