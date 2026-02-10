<template>
  <div class="input-group" :class="{ 'input-group--error': error }">
    <label v-if="label" :for="inputId" class="input-group__label">
      {{ label }}
      <span v-if="required" class="input-group__required">*</span>
    </label>
    <input
      :id="inputId"
      class="input-group__input"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      v-bind="$attrs"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <p v-if="error" class="input-group__error">{{ error }}</p>
    <p v-if="hint && !error" class="input-group__hint">{{ hint }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: { type: [String, Number], default: '' },
  label: { type: String, default: '' },
  type: { type: String, default: 'text' },
  placeholder: { type: String, default: '' },
  required: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  error: { type: String, default: '' },
  hint: { type: String, default: '' },
  id: { type: String, default: '' }
})

defineEmits(['update:modelValue'])

const inputId = computed(() => props.id || `input-${Math.random().toString(36).substring(2, 9)}`)
</script>

<style scoped>
.input-group {
  margin-bottom: var(--space-md);
}

.input-group__label {
  display: block;
  font-size: var(--fs-sm);
  font-weight: var(--fw-medium);
  color: var(--color-text-primary);
  margin-bottom: var(--space-xs);
}

.input-group__required {
  color: var(--color-error);
}

.input-group__input {
  width: 100%;
  padding: var(--space-sm) var(--space-md);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: var(--fs-base);
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
  background: var(--color-bg-primary);
}

.input-group__input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.input-group__input:disabled {
  background: var(--color-bg-tertiary);
  cursor: not-allowed;
  opacity: 0.7;
}

.input-group--error .input-group__input {
  border-color: var(--color-error);
}

.input-group--error .input-group__input:focus {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.input-group__error {
  font-size: var(--fs-xs);
  color: var(--color-error);
  margin-top: var(--space-xs);
}

.input-group__hint {
  font-size: var(--fs-xs);
  color: var(--color-text-light);
  margin-top: var(--space-xs);
}
</style>
