<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="modelValue" class="modal-overlay" @click.self="close">
        <Transition name="modal-scale">
          <div v-if="modelValue" class="modal" :class="`modal--${size}`">
            <div class="modal__header">
              <h3 class="modal__title">{{ title }}</h3>
              <button class="modal__close" @click="close" aria-label="Close modal">
                &#10005;
              </button>
            </div>
            <div class="modal__body">
              <slot />
            </div>
            <div class="modal__footer" v-if="$slots.footer">
              <slot name="footer" />
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  modelValue: { type: Boolean, default: false },
  title: { type: String, default: '' },
  size: { type: String, default: 'md' } // sm, md, lg
})

const emit = defineEmits(['update:modelValue'])

const close = () => {
  emit('update:modelValue', false)
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--z-modal);
  padding: var(--space-md);
}

.modal {
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
}

.modal--sm { max-width: 400px; }
.modal--md { max-width: 560px; }
.modal--lg { max-width: 720px; }

.modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-lg);
  border-bottom: 1px solid var(--color-border);
}

.modal__title {
  font-size: var(--fs-lg);
  font-weight: var(--fw-semibold);
}

.modal__close {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: var(--color-bg-tertiary);
  border-radius: var(--radius-full);
  cursor: pointer;
  font-size: var(--fs-sm);
  transition: background var(--transition-fast);
}

.modal__close:hover {
  background: var(--color-border);
}

.modal__body {
  padding: var(--space-lg);
}

.modal__footer {
  padding: var(--space-md) var(--space-lg);
  border-top: 1px solid var(--color-border);
  display: flex;
  gap: var(--space-sm);
  justify-content: flex-end;
}

/* Modal scale transition */
.modal-scale-enter-active {
  transition: all 0.3s ease;
}
.modal-scale-leave-active {
  transition: all 0.2s ease;
}
.modal-scale-enter-from {
  opacity: 0;
  transform: scale(0.95);
}
.modal-scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
